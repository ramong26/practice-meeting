import ky, { HTTPError } from 'ky';

import { REFRESH_TOKEN_KEY } from '@/shared/constants/token';
import type { components } from '@/shared/types/api/api-schemas.types';

export const api = ky.create({
  prefix: import.meta.env.VITE_API_BASE,
  credentials: 'include',
  retry: 1,

  hooks: {
    beforeRequest: [
      async ({ request }) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
    beforeRetry: [
      async ({ request, error }) => {
        if (!(error instanceof HTTPError) || error.response?.status !== 401) {
          return;
        }
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

        if (!refreshToken) {
          localStorage.removeItem('accessToken');
          return;
        }

        const { accessToken } = await ky
          .post(`${import.meta.env.VITE_API_BASE}/99-46/auth/refresh-token`, {
            json: {
              refreshToken,
            },
            credentials: 'include',
          })
          .json<components['schemas']['AuthTokens']>();

        localStorage.setItem('accessToken', accessToken);
        request.headers.set('Authorization', `Bearer ${accessToken}`);
      },
    ],
  },
});
