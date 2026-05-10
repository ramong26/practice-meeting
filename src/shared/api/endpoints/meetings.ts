import { teamId } from '@/shared/constants/teamId';
import type { components } from '@/shared/types/api/api-schemas.types';

import { api } from '../client/kyClient';

// 참여한 모임 목록
export const getJoinedMeetings = () => {
  return api
    .get(`${teamId}/meetings/joined`)
    .json<components['schemas']['JoinedMeetingList']>();
};

// 내가 만든 모임 목록
export const getMyCreatedMeetings = () => {
  return api
    .get(`${teamId}/meetings/my`)
    .json<components['schemas']['MeetingList']>();
};

// 모임 목록
export const getMeetings = () => {
  return api
    .get(`${teamId}/meetings`)
    .json<components['schemas']['MeetingList']>();
};

// 모임 생성
export const postMeeting = (
  request: components['schemas']['CreateMeeting'],
) => {
  return api.post(`${teamId}/meetings`, {
    json: request,
  });
};

// 모임 상세
export const getMeetingById = (meetingId: number) => {
  return api
    .get(`${teamId}/meetings/${meetingId}`)
    .json<components['schemas']['MeetingWithHost']>();
};

// 모임 수정
export const patchMeeting = (
  meetingId: number,
  request: components['schemas']['UpdateMeeting'],
) => {
  return api.patch(`${teamId}/meetings/${meetingId}`, {
    json: request,
  });
};

// 모임 삭제
export const deleteMeeting = (meetingId: number) => {
  return api.delete(`${teamId}/meetings/${meetingId}`);
};

// 모임 참여
export const postJoinMeeting = (meetingId: number) => {
  return api.post(`${teamId}/meetings/${meetingId}/join`);
};

// 모임 참여 취소
export const deleteJoinMeeting = (meetingId: number) => {
  return api.delete(`${teamId}/meetings/${meetingId}/join`);
};

// 모임 참여자 목록
export const getMeetingParticipants = (meetingId: number) => {
  return api.get(`${teamId}/meetings/${meetingId}/participants`);
};

// 모임 상태 변경
export const patchMeetingStatus = (
  meetingId: number,
  request: components['schemas']['UpdateMeetingStatus'],
) => {
  return api.patch(`${teamId}/meetings/${meetingId}/status`, {
    json: request,
  });
};
