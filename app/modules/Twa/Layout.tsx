import type {PropsWithChildren} from 'react';

import {lazy, Suspense} from 'react';

const TwaProvider = lazy(() => import('./components/TwaProvider'));

export default function TwaLayout(props: PropsWithChildren) {
  return (
    <Suspense>
      <TwaProvider>{props.children}</TwaProvider>
    </Suspense>
  );
}
