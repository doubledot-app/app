import type {FunctionComponent, PropsWithChildren} from 'react';

import {QueryClientProvider} from '@tanstack/react-query';

import {queryClient} from './config';

export const QueryProvider: FunctionComponent<PropsWithChildren> = (props) => {
  const {children} = props;

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
