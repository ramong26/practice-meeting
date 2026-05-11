import { teamId } from '@/shared/constants/teamId';
import type { components } from '@/shared/types/api/api-schemas.types';

import { api } from '../client/kyClient';

// 게시글 목록
export const getPosts = () => {
  return api.get(`${teamId}/posts`).json<components['schemas']['PostList']>();
};

// 게시글 작성
export const postPost = (request: components['schemas']['CreatePost']) => {
  return api
    .post(`${teamId}/posts`, {
      json: request,
    })
    .json();
};

// 게시글 상세
export const getPostById = (postId: number) => {
  return api
    .get(`${teamId}/posts/${postId}`)
    .json<components['schemas']['PostWithComments']>();
};

// 게시글 수정
export const patchPost = (
  postId: number,
  request: components['schemas']['UpdatePost'],
) => {
  return api
    .patch(`${teamId}/posts/${postId}`, {
      json: request,
    })
    .json();
};

// 게시글 삭제
export const deletePost = (postId: number) => {
  return api.delete(`${teamId}/posts/${postId}`);
};

// 댓글 목록
export const getPostComments = (postId: number) => {
  return api
    .get(`${teamId}/posts/${postId}/comments`)
    .json<components['schemas']['CommentList']>();
};

// 댓글 작성
export const postPostComment = (
  postId: number,
  request: components['schemas']['CreateComment'],
) => {
  return api
    .post(`${teamId}/posts/${postId}/comments`, {
      json: request,
    })
    .json();
};

// 댓글 수정
export const patchPostComment = (
  postId: number,
  commentId: number,
  request: components['schemas']['UpdateComment'],
) => {
  return api
    .patch(`${teamId}/posts/${postId}/comments/${commentId}`, {
      json: request,
    })
    .json();
};

// 댓글 삭제
export const deletePostComment = (postId: number, commentId: number) => {
  return api.delete(`${teamId}/posts/${postId}/comments/${commentId}`);
};

// 댓글 좋아요
export const postPostCommentLike = (postId: number, commentId: number) => {
  return api
    .post(`${teamId}/posts/${postId}/comments/${commentId}/like`)
    .json();
};

// 댓글 좋아요 취소
export const deletePostCommentLike = (postId: number, commentId: number) => {
  return api.delete(`${teamId}/posts/${postId}/comments/${commentId}/like`);
};

// 게시글 좋아요
export const postPostLike = (postId: number) => {
  return api.post(`${teamId}/posts/${postId}/like`).json();
};

// 게시글 좋아요 취소
export const deletePostLike = (postId: number) => {
  return api.delete(`${teamId}/posts/${postId}/like`);
};
