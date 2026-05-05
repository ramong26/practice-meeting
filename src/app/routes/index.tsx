import { createFileRoute, redirect } from '@tanstack/react-router';

import { route } from '@/shared/constants/route';

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    throw redirect({ to: route.landing });
  },
});
