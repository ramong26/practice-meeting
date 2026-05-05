import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { EntireLayout } from '../layouts/EntireLayout';

export const Route = createRootRoute({
  component: () => (
    <>
      <EntireLayout>
        <Outlet />
        <TanStackRouterDevtools />
      </EntireLayout>
    </>
  ),
});
