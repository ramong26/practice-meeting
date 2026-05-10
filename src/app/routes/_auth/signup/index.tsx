import { createFileRoute } from '@tanstack/react-router';

import { SignupPage } from '@/pages/signup';

export const Route = createFileRoute('/_auth/signup/')({
  component: SignupPage,
});
