import type {PropsWithChildren} from 'react';

import {BackButtonManipulator} from '@Components/core/BackButtonManipulator/BackButtonManipulator';
import {AppRoot} from '@telegram-apps/telegram-ui';
import WebApp from '@twa-dev/sdk';

export default function TwaProvider(props: PropsWithChildren) {
  return (
    <AppRoot
      appearance={WebApp.colorScheme}
      platform={['macos', 'ios'].includes(WebApp.platform) ? 'ios' : 'base'}
    >
      {props.children}
      <BackButtonManipulator />
    </AppRoot>
  );
}
