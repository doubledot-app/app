import type {RegisteredSW} from './types';
import type {FunctionComponent} from 'react';

import * as Sentry from '@sentry/react';
import {onlineManager} from '@tanstack/react-query';
import {Button, Modal, Placeholder} from '@telegram-apps/telegram-ui';
import {memo, useMemo, useRef, useState} from 'react';
import {useIntervalWhen} from 'rooks';
import {registerSW} from 'virtual:pwa-register';

const CHECK_INTERVAL = 5 * 60 * 1_000; // 5m

const UpdateManagerComponent: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const [registered, setRegistered] = useState(false);

  const registeredSWRef = useRef<RegisteredSW>(null);

  const updateSW = useMemo(() => {
    if (import.meta.env.DEV) return;

    return registerSW({
      onRegisteredSW: (swUrl, registration) => {
        setRegistered(true);
        if (!registration) return;
        registeredSWRef.current = [swUrl, registration];
      },
      onNeedRefresh: () => {
        setOpen(true);
      },
      onRegisterError: (error) => {
        Sentry.captureException(error);
        console.log('🚀 ~ updateSW ~ error:', error);
      }
    });
  }, []);

  useIntervalWhen(
    async () => {
      if (!registeredSWRef.current) return;
      if (!onlineManager.isOnline()) return;

      const [swUrl, registration] = registeredSWRef.current;
      if (!registration || registration.installing) return;

      const resp = await fetch(swUrl, {
        cache: 'no-store',
        headers: {
          cache: 'no-store',
          'cache-control': 'no-cache'
        }
      });

      if (resp?.status === 200) await registration.update();
    },
    CHECK_INTERVAL,
    registered
  );

  return (
    <Modal open={open}>
      <Placeholder
        header={'A new version of HamrahTel is available!'}
        description={
          'If the update is not performed, the new changes may not be displayed until you reload the page.'
        }
        action={
          <Button
            onClick={() => {
              setOpen(false);
              updateSW?.(true);
            }}
          >
            {'Update now!'}
          </Button>
        }
      />
    </Modal>
  );
};

export const UpdateManager = memo(UpdateManagerComponent);
