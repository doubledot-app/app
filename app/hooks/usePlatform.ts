import WebApp from '@twa-dev/sdk';
import {useAtom} from 'jotai/react';
import {atomWithStorage} from 'jotai/utils';
import {useCallback, useEffect} from 'react';

export type Platforms = (typeof WebApp)['platform'];
export const PlatformAtom = atomWithStorage<Platforms>('platform', 'unknown');

export function usePlatform() {
  const [platform, setPlatform] = useAtom(PlatformAtom);

  const updatePlatform = useCallback(async () => {
    if (platform) return;
    if (typeof window === 'undefined') return;

    if (WebApp.platform && WebApp.platform !== 'unknown') {
      return setPlatform(WebApp.platform);
    }

    if (!('navigator' in window)) return;

    const {UAParser} = await import('ua-parser-js');
    const parser = new UAParser(window.navigator.userAgent);

    const name = parser.getOS().name || 'unknown';
    setPlatform(name.toLowerCase() as Platforms);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void updatePlatform();
  }, [updatePlatform]);

  return platform;
}
