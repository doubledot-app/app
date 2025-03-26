import type {Route} from '@RouterTypes/root';

import {useBack} from '@Hooks/useBack';
import {hierarchy} from '@Router';
import {Button, Placeholder} from '@telegram-apps/telegram-ui';
import {isRouteErrorResponse} from 'react-router';

function parseError(error: Error | unknown) {
  let status = 500;
  let message = 'An unexpected problem!';
  let details = 'An error has occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message = error.status === 404 ? 'Not Found' : 'Error!';
    details =
      error.status === 404
        ? 'The page you are looking for was not found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return {status, message, details, stack};
}

export default function ErrorPage({error}: Route.ErrorBoundaryProps) {
  const back = useBack();

  const {status, message, details} = parseError(error);

  return (
    <Placeholder
      header={message}
      description={details}
      action={
        <Button onClick={() => back(hierarchy.home.path)}>
          {status === 404 ? 'Go Back' : 'Go Back Home'}
        </Button>
      }
    >
      <img
        alt="error"
        style={{display: 'block', width: '144px', height: '144px'}}
        src={status === 404 ? '/stickers/oops.gif' : '/stickers/error.gif'}
      />
    </Placeholder>
  );
}
