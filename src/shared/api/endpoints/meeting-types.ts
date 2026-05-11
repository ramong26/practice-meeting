import { teamId } from '@/shared/constants/teamId';
import type { components } from '@/shared/types/api/api-schemas.types';

import { api } from '../client/kyClient';

// 모임 타입 목록
export const getMeetingTypes = () => {
  return api
    .get(`${teamId}/meeting-types`)
    .json<components['schemas']['MeetingTypeList']>();
};

// 모임 타입 생성
export const postMeetingType = (
  request: components['schemas']['CreateMeetingType'],
) => {
  return api
    .post(`${teamId}/meeting-types`, {
      json: request,
    })
    .json();
};

// 모임 타입 수정
export const patchMeetingType = (
  typeId: number,
  request: components['schemas']['UpdateMeetingType'],
) => {
  return api
    .patch(`${teamId}/meeting-types/${typeId}`, {
      json: request,
    })
    .json();
};

// 모임 타입 삭제
export const deleteMeetingType = (typeId: number) => {
  return api.delete(`${teamId}/meeting-types/${typeId}`);
};
