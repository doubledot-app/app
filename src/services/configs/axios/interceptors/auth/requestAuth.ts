import { authStore } from "@/services/stores/auth"
import type { InternalAxiosRequestConfig } from "axios"

export function requestAuth(request: InternalAxiosRequestConfig) {
  const { accessToken, tokenType } = authStore.getSnapshot()

  if (accessToken) {
    request.headers.Authorization = `${tokenType} ${accessToken}`
  }

  return request
}
