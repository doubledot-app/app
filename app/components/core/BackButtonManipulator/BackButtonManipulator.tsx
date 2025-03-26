import {useBack} from '@Hooks/useBack';
import WebApp from '@twa-dev/sdk';
import {useEffect} from 'react';
import {useLocation} from 'react-router';

export function BackButtonManipulator() {
  const location = useLocation();
  const back = useBack();

  useEffect(() => {
    function onClick() {
      back();
    }

    WebApp.BackButton.onClick(onClick);
    return () => {
      WebApp.BackButton.offClick(onClick);
    };
  }, [back]);

  useEffect(() => {
    if (location.pathname === '/') {
      if (WebApp.BackButton.isVisible) WebApp.BackButton.hide();
    } else {
      if (!WebApp.BackButton.isVisible) WebApp.BackButton.show();
    }
  }, [location]);

  return null;
}
