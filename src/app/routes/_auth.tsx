import { Outlet, createFileRoute } from '@tanstack/react-router';

import AuthLayout from '../layouts/AuthLayout';

export const Route = createFileRoute('/_auth')({
  component: () => {
    return (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    );
  },
});
