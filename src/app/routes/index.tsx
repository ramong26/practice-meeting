import { createFileRoute, redirect } from '@tanstack/react-router';

import { route } from '@/shared/constants/route';

// TODO: home 페이지 추가 후, redirect 경로 변경
export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    throw redirect({ to: route.home });
  },
});
