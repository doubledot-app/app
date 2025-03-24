import type {Route} from '@RouterTypes/root';

import {useBack} from '@Hooks/useBack';
import {hierarchy} from '@Router';
import {isRouteErrorResponse} from 'react-router';

function parseError(error: Error | unknown) {
  let status = 500;
  let message = 'یک مشکل ناگهانی!';
  let details = 'خطایی رخ داده است.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message = error.status === 404 ? 'یافت نشد' : 'خطا!';
    details = error.status === 404 ? 'صفحه مورد نظر شما یافت نشد.' : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return {status, message, details, stack};
}

export default function ErrorPage({error}: Route.ErrorBoundaryProps) {
  const back = useBack();

  const {status, message, details, stack} = parseError(error);

  return (
    <main className="container mx-auto flex h-full w-full flex-1 flex-col items-center justify-center p-4">
      <h1 className="mb-2 text-6xl font-black text-primary/50">{status}</h1>
      <h2 className="typography-subtitle1">{message}</h2>
      <p className="typography-body1 mb-4">{details}</p>
      <button onClick={() => back(hierarchy.home.path)}>
        {status === 404 ? 'بازگشت' : 'بازگشت به خانه'}
      </button>
      {stack && (
        <pre className="mt-4 w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
