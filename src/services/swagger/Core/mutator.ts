import type { AxiosError, AxiosRequestConfig } from "axios"

import axios from "axios"

import { AxiosClient } from "@/services/configs/axios/client"
import { env } from "@/utils/env"

const coreClient = new AxiosClient({
  baseURL: env.api.coreUrl
})

export function coreMutator<T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> {
  const source = axios.CancelToken.source()

  const combinedConfig = {
    ...config,
    ...options,
    cancelToken: source.token
  }

  const promise: any = coreClient
    .adaptor(combinedConfig)
    .then((response) => {
      return response.data
    })
    .catch((error: AxiosError) => {
      // const responseError: any = error?.response?.data
      // const statusError = error?.response?.status
      //   ? t(`error.status.${error.response.status}`)
      //   : ""
      // const message = responseError?.message || statusError || error.message
      // if (
      //   error.config?.method !== "get" &&
      //   message &&
      //   error?.code !== "ERR_CANCELED"
      // ) {
      //   showSnack({ message, variant: "error" })
      // }

      // console.error("🐍 ~ coreMutator:", error)
      throw error
    })

  promise.cancel = () => {
    source.cancel("Query was cancelled")
  }

  return promise
}

export type ErrorType<Error> = AxiosError<Error>
