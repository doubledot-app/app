import type {PropsWithChildren} from 'react';

import {isServer} from '@tanstack/react-query';
import {lazy} from 'react';

const TwaProvider = lazy(() => import('./components/TwaProvider'));

export default function TwaLayout(props: PropsWithChildren) {
  if (isServer) {
    return null;
  }

  return <TwaProvider>{props.children}</TwaProvider>;
}
