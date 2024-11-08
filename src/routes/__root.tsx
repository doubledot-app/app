import type { QueryClient } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AppRoot } from '@telegram-apps/telegram-ui';
import WebApp from '@twa-dev/sdk';

import { BackButtonManipulator } from '@/components/BackButtonManipulator';
import { NotFound } from '@/components/NotFound';
import { AuthProvider } from '@/modules/Auth/components/AuthProvider';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
  notFoundComponent: NotFound
});

function RootComponent() {
  return (
    <AppRoot
      appearance={WebApp.colorScheme}
      platform={['macos', 'ios'].includes(WebApp.platform) ? 'ios' : 'base'}
    >
      <AuthProvider>
        <Outlet />
        <BackButtonManipulator />
        <ReactQueryDevtools buttonPosition='top-right' />
        <TanStackRouterDevtools position='bottom-right' />
      </AuthProvider>
    </AppRoot>
  );
}
