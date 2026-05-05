import { createFileRoute } from '@tanstack/react-router';

import { HomePage } from '@/page/home';

export const Route = createFileRoute('/_main/home/')({
  staticData: {
    title: 'Home',
  },
  component: HomePage,
});
