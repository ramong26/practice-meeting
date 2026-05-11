import { teamId } from '@/shared/constants/teamId';
import type { components } from '@/shared/types/api/api-schemas.types';

import { api } from '../client/kyClient';

// 내 정보 조회
export const getMe = () => {
  return api.get(`${teamId}/users/me`).json<components['schemas']['User']>();
};

// 내 정보 수정
export const patchMe = (
  request: components['schemas']['UpdateUserRequest'],
) => {
  return api
    .patch(`${teamId}/users/me`, {
      json: request,
    })
    .json<components['schemas']['User']>();
};

// 유저 공개 정보 조회
export const getUserById = (userId: number) => {
  return api
    .get(`${teamId}/users/${userId}`)
    .json<components['schemas']['PublicUser']>();
};

// 내가 참여한 모임 조회
export const getMyMeetings = () => {
  return api
    .get(`${teamId}/users/me/meetings`)
    .json<components['schemas']['UserMeetingsResponse']>();
};

// 내가 작성한 게시글 조회
export const getMyPosts = () => {
  return api
    .get(`${teamId}/users/me/posts`)
    .json<components['schemas']['UserPostsResponse']>();
};

// 내가 작성한 리뷰 조회
export const getMyReviews = () => {
  return api
    .get(`${teamId}/users/me/reviews`)
    .json<components['schemas']['UserReviewsResponse']>();
};
