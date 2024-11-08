import type swaggerJSON from '@/services/swagger/Core/swagger.json';
import type { AxiosError, AxiosInstance } from 'axios';

import { authStore } from '@/services/stores/auth';
import { authControllerRefreshToken } from '@/services/swagger/Core';

export function buildOnRejectedResponseAuth(adaptor: AxiosInstance) {
  return async function onRejectedResponseAuth(error: AxiosError) {
    const { refreshToken } = authStore.getSnapshot();

    const paths: (keyof typeof swaggerJSON.paths)[] = [
      '/api/v1/auth/refresh-token',
      '/api/v1/auth/telegram'
    ];
    const isIgnorePaths = paths.some(path => {
      return error.config?.url?.startsWith(path);
    });

    if (isIgnorePaths) {
      void authStore.logout();
      return Promise.reject(error);
    }

    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    if (!refreshToken) {
      void authStore.logout();
      return Promise.reject(error);
    }

    const data = await authControllerRefreshToken({ refreshToken });

    if (!data) {
      return Promise.reject(error);
    }

    return adaptor(error.config!);
  };
}
