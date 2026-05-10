import { teamId } from '@/shared/constants/teamId';
import type { components } from '@/shared/types/api/api-schemas.types';

import { api } from '../client/kyClient';

// 리뷰 목록
export const getReviews = () => {
  return api
    .get(`${teamId}/reviews`)
    .json<components['schemas']['PaginatedReview']>();
};

// 리뷰 통계
export const getReviewStatistics = () => {
  return api
    .get(`${teamId}/reviews/statistics`)
    .json<components['schemas']['ReviewStatistics']>();
};

// 리뷰 카테고리 통계
export const getReviewCategoryStatistics = () => {
  return api.get(`${teamId}/reviews/categories/statistics`);
};

// 리뷰 수정
export const patchReview = (
  reviewId: number,
  request: components['schemas']['UpdateReview'],
) => {
  return api.patch(`${teamId}/reviews/${reviewId}`, {
    json: request,
  });
};

// 리뷰 삭제
export const deleteReview = (reviewId: number) => {
  return api.delete(`${teamId}/reviews/${reviewId}`);
};

// 모임 리뷰 목록
export const getMeetingReviews = (meetingId: number) => {
  return api
    .get(`${teamId}/meetings/${meetingId}/reviews`)
    .json<components['schemas']['PaginatedReview']>();
};

// 모임 리뷰 작성
export const postMeetingReview = (
  meetingId: number,
  request: components['schemas']['CreateReviewByMeeting'],
) => {
  return api.post(`${teamId}/meetings/${meetingId}/reviews`, {
    json: request,
  });
};
