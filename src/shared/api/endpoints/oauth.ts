import { teamId } from '@/shared/constants/teamId';
import type { components } from '@/shared/types/api/api-schemas.types';

import { api } from '../client/kyClient';

// OAuth 로그인
export const postOAuthProvider = (
  provider: 'google' | 'kakao',
  request: components['schemas']['OAuthRequest'],
) => {
  return api.post(`${teamId}/oauth/${provider}`, {
    json: request,
  });
};
