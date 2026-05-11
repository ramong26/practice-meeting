import { teamId } from '@/shared/constants/teamId';
import type { components } from '@/shared/types/api/api-schemas.types';

import { api } from '../client/kyClient';

// 알림 목록
export const getNotifications = () => {
  return api
    .get(`${teamId}/notifications`)
    .json<components['schemas']['NotificationList']>();
};

// 읽지 않은 알림 수
export const getUnreadNotificationCount = () => {
  return api.get(`${teamId}/notifications/unread-count`).json();
};

// 전체 알림 읽음 처리
export const putNotificationsReadAll = () => {
  return api.put(`${teamId}/notifications/read-all`).json();
};

// 단일 알림 읽음 처리
export const putNotificationRead = (notificationId: number) => {
  return api.put(`${teamId}/notifications/${notificationId}/read`).json();
};

// 알림 삭제
export const deleteNotification = (notificationId: number) => {
  return api.delete(`${teamId}/notifications/${notificationId}`);
};

// 전체 알림 삭제
export const deleteNotifications = () => {
  return api.delete(`${teamId}/notifications`);
};
