import ky from 'ky';

export const api = ky.create({
  prefix: import.meta.env.VITE_API_BASE,
  credentials: 'include',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`, // TODO: 임시
  },
  // hooks: {
  //   beforeRequest: [
  //     (request) => {
  //       // 예: 토큰 갱신, 로깅 등
  //     },
  //   ],
  // },
});
