import { teamId } from '@/shared/constants/teamId';
import type { components } from '@/shared/types/api/api-schemas.types';

import { api } from '../client/kyClient';

// 이미지 업로드
export const postImage = (
  request: components['schemas']['PresignedUrlRequest'],
) => {
  return api
    .post(`${teamId}/images`, {
      json: request,
    })
    .json();
};
