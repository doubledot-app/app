import type { PropsWithChildren } from 'react';

import { Placeholder, Spinner } from '@telegram-apps/telegram-ui';
import WebApp from '@twa-dev/sdk';
import { useEffect } from 'react';

import { useUser } from '@/modules/Auth/hooks/useUser';
import { useAuthControllerTelegram } from '@/services/swagger/Core';

export function AuthProvider(props: PropsWithChildren) {
  const initDataRaw = WebApp.initData;

  const { isLoading } = useUser();
  const { mutate: authenticate, isPending } = useAuthControllerTelegram();

  useEffect(() => {
    if (!initDataRaw) return;
    authenticate({ data: { initDataRaw } });
  }, [authenticate, initDataRaw]);

  if (isPending || isLoading) {
    return (
      <Placeholder>
        <Spinner size='l' />
      </Placeholder>
    );
  }

  if (!initDataRaw) {
    return (
      <Placeholder
        header='Oops'
        description='Application was launched with missing init data'
      >
        <img
          alt='oops'
          src='/stickers/oops.gif'
          style={{ display: 'block', width: '144px', height: '144px' }}
        />
      </Placeholder>
    );
  }

  return props.children;
}
