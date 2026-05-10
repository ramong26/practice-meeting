import { teamId } from '@/shared/constants/teamId';
import type { components } from '@/shared/types/api/api-schemas.types';

import { api } from '../client/kyClient';

// 회원가입
export const postSignup = (request: components['schemas']['SignupRequest']) => {
  return api.post(`${teamId}/auth/signup`, {
    json: request,
  });
};

// 이메일 중복 체크
export const postCheckEmail = (
  request: components['schemas']['EmailCheckRequest'],
) => {
  return api.post(`${teamId}/auth/email-check`, {
    json: request,
  });
};

// 로그인
export const postLogin = (request: components['schemas']['LoginRequest']) => {
  return api.post(`${teamId}/auth/login`, {
    json: request,
  });
};

// 로그아웃
export const postLogout = () => {
  return api.post(`${teamId}/auth/logout`);
};

// 토큰 갱신
export const postRefresh = (
  request: components['schemas']['RefreshRequest'],
) => {
  return api.post(`${teamId}/auth/refresh`, {
    json: request,
  });
};
