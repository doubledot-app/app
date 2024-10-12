import type { AxiosInstance, CreateAxiosDefaults } from "axios"

import axios from "axios"
import merge from "lodash.merge"
import { onRejectedResponseError, requestLanguage } from "./interceptors"

export class AxiosClient {
  private readonly adapter: AxiosInstance

  constructor(config?: CreateAxiosDefaults) {
    const defaultConfig = {
      timeout: 15 * 100000000 // 15s
    }

    // initial adapter
    this.adapter = axios.create(merge(defaultConfig, config))

    this.adapter.interceptors.request.use(requestLanguage)
    // this.adapter.interceptors.request.use(interceptors.requestAuth)

    // const onRejectedResponseAuth = interceptors.buildOnRejectedResponseAuth(
    // this.adapter
    // )
    // this.adapter.interceptors.response.use(undefined, onRejectedResponseAuth)
    this.adapter.interceptors.response.use(undefined, onRejectedResponseError)
  }

  public get adaptor(): AxiosInstance {
    return this.adapter
  }
}
