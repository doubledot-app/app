import type { Token } from '@/services/swagger/Core';
import type swaggerJSON from '@/services/swagger/Core/swagger.json';
import type { AxiosResponse } from 'axios';

import { authStore } from '@/services/stores/auth';

export function onFulfilledResponseToken(response: AxiosResponse<Token>) {
  const { data } = response;

  const tokenPaths: (keyof typeof swaggerJSON.paths)[] = [
    '/api/v1/auth/refresh-token',
    '/api/v1/auth/telegram'
  ];
  const isTokenResponse = tokenPaths.some(path => {
    return response.config.url?.includes(path);
  });

  if (isTokenResponse && 'accessToken' in data) {
    authStore.login(data);
  }

  return response;
}
