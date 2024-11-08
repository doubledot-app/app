import { useLocation, useRouter } from '@tanstack/react-router';
import WebApp from '@twa-dev/sdk';
import { useEffect } from 'react';

export function BackButtonManipulator() {
  const location = useLocation();
  const router = useRouter();

  useEffect(() => {
    function onClick() {
      router.history.back();
    }
    WebApp.BackButton.onClick(onClick);

    return () => WebApp.BackButton.offClick(onClick);
  }, [router.history]);

  useEffect(() => {
    if (location.pathname === '/') {
      if (WebApp.BackButton.isVisible) WebApp.BackButton.hide();
    } else {
      if (!WebApp.BackButton.isVisible) WebApp.BackButton.show();
    }
  }, [location]);

  return null;
}
