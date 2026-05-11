import ky, { HTTPError } from 'ky';

import { teamId } from '@/shared/constants/teamId';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/shared/constants/token';
import type { components } from '@/shared/types/api/api-schemas.types';

export const api = ky.create({
  prefix: import.meta.env.VITE_API_BASE,
  credentials: 'include',
  retry: 1,

  hooks: {
    beforeRequest: [
      async ({ request }) => {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
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
          localStorage.removeItem(ACCESS_TOKEN_KEY);
          return;
        }

        const { accessToken } = await ky
          .post(`${import.meta.env.VITE_API_BASE}/${teamId}/auth/refresh`, {
            json: {
              refreshToken,
            },
            credentials: 'include',
          })
          .json<components['schemas']['AuthTokens']>();

        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        request.headers.set('Authorization', `Bearer ${accessToken}`);
      },
    ],
  },
});
