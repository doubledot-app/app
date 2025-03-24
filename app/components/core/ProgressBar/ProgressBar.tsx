import {NProgress} from 'nprogress-v2';
import {useEffect, useRef} from 'react';
import {useNavigation} from 'react-router';

// import {SpinnerLoading} from '@Components/ui/Loading';
// import {cn} from '@Utils/style';
// import {Modal as AriaModal, ModalOverlay as AriaModalOverlay} from 'react-aria-components';

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
  // return (
  //   <AriaModalOverlay
  //     isOpen={isNavigating}
  //     isDismissable={false}
  //     className={cn(
  //       'fixed inset-0 z-[51] flex items-center justify-center bg-white/80',
  //       /* Exiting */
  //       'data-[exiting]:duration-300 data-[exiting]:animate-out data-[exiting]:fade-out-0',
  //       /* Entering */
  //       'data-[entering]:animate-in data-[entering]:fade-in-0'
  //     )}
  //   >
  //     <AriaModal>
  //       <SpinnerLoading className="size-8 text-primary" />
  //     </AriaModal>
  //   </AriaModalOverlay>
  // );
};
