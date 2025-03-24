import {NProgress} from 'nprogress-v2';
import {useEffect, useRef} from 'react';
import {useNavigation} from 'react-router';

export const ProgressBar = () => {
  NProgress.configure({showSpinner: false});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const navigation = useNavigation();
  const isNavigating = !!navigation.location;

  useEffect(() => {
    const startProgress = () => {
      timerRef.current = setTimeout(() => {
        NProgress.start();
      }, 0);
    };

    const stopProgress = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        if (!NProgress.isStarted()) return;
        NProgress.done();
      }, 0);
    };

    if (isNavigating) {
      startProgress();
    } else {
      stopProgress();
    }
  }, [isNavigating]);

  return null;
};
