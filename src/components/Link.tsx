import type { LinkComponentProps, RegisteredRouter } from '@tanstack/react-router';
import type { MouseEventHandler } from 'react';

import { Link as RouterLink } from '@tanstack/react-router';
import WebApp from '@twa-dev/sdk';
import { useCallback } from 'react';

import { cn } from '@/utils/cn';

export function Link<
  TRouter extends RegisteredRouter = RegisteredRouter,
  TFrom extends string = string,
  TTo extends string | undefined = undefined,
  TMaskFrom extends string = TFrom,
  TMaskTo extends string = ''
>(props: LinkComponentProps<'a', TRouter, TFrom, TTo, TMaskFrom, TMaskTo>) {
  const { className, onClick: onClickProp, to, ...rest } = props;

  const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    e => {
      onClickProp?.(e);

      // Compute if target path is external. In this case we would like to open link using
      // TMA method.
      let path: string;
      if (typeof to === 'string') {
        path = to;
      } else {
        const { search = '', pathname = '', hash = '' } = to as any;
        path = `${pathname}?${search}#${hash}`;
      }

      const targetUrl = new URL(path, window.location.toString());
      const currentUrl = new URL(window.location.toString());
      const isExternal =
        targetUrl.protocol !== currentUrl.protocol || targetUrl.host !== currentUrl.host;

      if (isExternal) {
        e.preventDefault();
        WebApp.openLink(targetUrl.toString());
      }
    },
    [to, onClickProp]
  );

  return (
    <RouterLink
      {...({
        ...rest,
        to,
        onClick,
        className: cn('no-underline	text-[var(--tg-theme-link-color)]', className)
      } as any)}
    />
  );
}
