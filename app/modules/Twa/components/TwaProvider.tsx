import type {PropsWithChildren} from 'react';

import {BackButtonManipulator} from '@Components/core/BackButtonManipulator/BackButtonManipulator';
import {usePlatform} from '@Hooks/usePlatform';
import {AppRoot} from '@telegram-apps/telegram-ui';
import WebApp from '@twa-dev/sdk';

export default function TwaProvider(props: PropsWithChildren) {
  const platform = usePlatform();

  return (
    <AppRoot
      className="h-full w-full"
      appearance={WebApp.colorScheme}
      platform={['macos', 'ios'].includes(platform) ? 'ios' : 'base'}
    >
      {props.children}
      <BackButtonManipulator />
    </AppRoot>
  );
}
