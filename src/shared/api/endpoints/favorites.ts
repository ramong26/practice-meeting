import { teamId } from '@/shared/constants/teamId';
import type { components } from '@/shared/types/api/api-schemas.types';

import { api } from '../client/kyClient';

// 즐겨찾기 목록
export const getFavorites = () => {
  return api
    .get(`${teamId}/favorites`)
    .json<components['schemas']['FavoriteList']>();
};

// 즐겨찾기 수
export const getFavoriteCount = () => {
  return api
    .get(`${teamId}/favorites/count`)
    .json<components['schemas']['FavoriteCount']>();
};

// 모임 즐겨찾기 추가
export const postMeetingFavorite = (meetingId: number) => {
  return api.post(`${teamId}/meetings/${meetingId}/favorites`).json();
};

// 모임 즐겨찾기 제거
export const deleteMeetingFavorite = (meetingId: number) => {
  return api.delete(`${teamId}/meetings/${meetingId}/favorites`);
};
