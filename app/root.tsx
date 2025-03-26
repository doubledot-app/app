import type {Route} from './+types/root';

import {ProgressBar} from '@Components/core/ProgressBar';
import ErrorPage from '@Error/Page';
import telegramStylesheet from '@telegram-apps/telegram-ui/dist/styles.css?url';
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from 'react-router';

import stylesheet from './app.css?url';
import TwaLayout from './modules/Twa/Layout';

export const ErrorBoundary = ErrorPage;

export const links: Route.LinksFunction = () => [
  {rel: 'stylesheet', href: stylesheet},
  {rel: 'stylesheet', href: telegramStylesheet}
];

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

        {/* <!-- Android  --> */}
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* <!-- iOS --> */}
        <meta name="apple-mobile-web-app-title" content="DoubleDot." />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* <!-- Windows  --> */}
        <meta name="msapplication-navbutton-color" content="#FFFFFF" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />

        {/* <!-- Pinned Sites  --> */}
        <meta name="application-name" content="DoubleDot." />
        <meta name="msapplication-tooltip" content="DoubleDot." />
        <meta name="msapplication-starturl" content="/" />

        {/* <!-- Tap highlighting  --> */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/* <!-- UC Mobile Browser  --> */}
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />

        {/* <!-- Disable night mode for this page  --> */}
        <meta name="nightmode" content="disable" />

        {/* <!-- Layout mode --> */}
        <meta name="layoutmode" content="standard" />

        {/* <!-- imagemode - show image even in text only mode  --> */}
        <meta name="imagemode" content="force" />

        {/* <!-- Orientation  --> */}
        <meta name="screen-orientation" content="portrait" />

        {/* <!-- Manifest.json  --> */}
        <link href="/manifest.json" rel="manifest" />

        {/* <!-- Icons  --> */}
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="mask-icon" href="/icon.png" color="#FFFFFF" /> */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        {/* <link rel="apple-touch-icon" href="/icons/icon-512x512.png" sizes="512x512" /> */}

        <Meta />
        <Links />
      </head>
      <body className="text-secondary-foreground">
        <TwaLayout>{children}</TwaLayout>
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
