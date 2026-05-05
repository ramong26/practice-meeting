import { createFileRoute } from '@tanstack/react-router';

import { LandingPage } from '@/page/landing';

export const Route = createFileRoute('/landing/')({
  component: LandingPage,
});
