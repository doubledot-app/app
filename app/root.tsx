import type {Route} from './+types/root';

import {ProgressBar} from '@Components/core/ProgressBar';
import ErrorPage from '@Error/Page';
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from 'react-router';

import stylesheet from './app.css?url';

export const ErrorBoundary = ErrorPage;

export const links: Route.LinksFunction = () => [{rel: 'stylesheet', href: stylesheet}];

export function meta() {
  return [{title: 'DoubleDot.'}];
}

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="UTF-8" />

        {/* <!-- Must --> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <meta name="description" content="Pay without limits for exclusive content" />

        {/* <!-- Tap highlighting  --> */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/* <!-- Layout mode --> */}
        <meta name="layoutmode" content="standard" />

        {/* <!-- imagemode - show image even in text only mode  --> */}
        <meta name="imagemode" content="force" />

        {/* <!-- Orientation  --> */}
        <meta name="screen-orientation" content="portrait" />

        {/* <!-- Icons  --> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/icon.png" color="#FFFFFF" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" sizes="512x512" />

        <Meta />
        <Links />
      </head>
      <body className="text-secondary-foreground">
        {children}
        <ProgressBar />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
