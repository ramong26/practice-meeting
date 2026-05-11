import { teamId } from '@/shared/constants/teamId';
import type { components } from '@/shared/types/api/api-schemas.types';

import { api } from '../client/kyClient';

// 회원가입
export const postSignup = async (
  request: components['schemas']['SignupRequest'],
) => {
  return await api
    .post(`${teamId}/auth/signup`, {
      json: request,
    })
    .json<components['schemas']['User']>();
};

// 이메일 중복 체크
export const postCheckEmail = async (
  request: components['schemas']['EmailCheckRequest'],
) => {
  return await api
    .post(`${teamId}/auth/email-check`, {
      json: request,
    })
    .json<components['schemas']['EmailCheckResponse']>();
};

// 로그인
export const postLogin = async (
  request: components['schemas']['LoginRequest'],
) => {
  return await api
    .post(`${teamId}/auth/login`, {
      json: request,
    })
    .json<components['schemas']['LoginResponse']>();
};

// 로그아웃
export const postLogout = () => {
  return api.post(`${teamId}/auth/logout`);
};

// 토큰 갱신
export const postRefresh = (
  request: components['schemas']['RefreshRequest'],
) => {
  return api
    .post(`${teamId}/auth/refresh`, {
      json: request,
    })
    .json<components['schemas']['AuthTokens']>();
};
