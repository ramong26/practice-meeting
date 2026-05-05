import { LandingPage } from '@/page/landing';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/landing/')({
  component: LandingPage,
});
