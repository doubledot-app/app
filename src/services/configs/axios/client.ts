import type { AxiosInstance, CreateAxiosDefaults } from 'axios';

import axios from 'axios';
import merge from 'lodash.merge';
import ms from 'ms';

import { onRejectedResponseError, requestLanguage } from './interceptors';
import { buildOnRejectedResponseAuth, requestAuth } from './interceptors/auth';
import { onFulfilledResponseToken } from './interceptors/token';

export class AxiosClient {
  private readonly adapter: AxiosInstance;

  constructor(config?: CreateAxiosDefaults) {
    const defaultConfig = {
      timeout: ms('15s')
    };

    // initial adapter
    this.adapter = axios.create(merge(defaultConfig, config));

    this.adapter.interceptors.request.use(requestLanguage);
    this.adapter.interceptors.request.use(requestAuth);

    this.adapter.interceptors.response.use(onFulfilledResponseToken);
    const onRejectedResponseAuth = buildOnRejectedResponseAuth(this.adapter);
    this.adapter.interceptors.response.use(undefined, onRejectedResponseAuth);
    this.adapter.interceptors.response.use(undefined, onRejectedResponseError);
  }

  public get adaptor(): AxiosInstance {
    return this.adapter;
  }
}
