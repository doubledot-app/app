import equal from 'fast-deep-equal';
import Cookie from 'js-cookie';
import ms from 'ms';
import { SyncedExternalStore, useSyncedExternalStore } from 'use-synced-external-store';

import { ACCESS_TOKEN, REFRESH_TOKEN, TOKEN_TYPE } from '@/services/constants';

import { Token } from '../swagger/Core';

export type AuthStoreState = {
  tokenType: string;
  accessToken: string | null;
  refreshToken: string | null;
};

export class AuthStore extends SyncedExternalStore<AuthStoreState> {
  private tokenType = 'Bearer';
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  protected isEqual = equal;
  protected snapshot: AuthStoreState;

  constructor() {
    super();

    this.initialTokenType();
    this.initialAccessToken();
    this.initialRefreshToken();

    this.snapshot = this.makeSnapshot();
  }

  private initialTokenType() {
    this.accessToken = Cookie.get(TOKEN_TYPE) as string | null;

    return this;
  }

  private initialAccessToken() {
    this.accessToken = Cookie.get(ACCESS_TOKEN) as string | null;

    return this;
  }

  private initialRefreshToken() {
    this.refreshToken = Cookie.get(REFRESH_TOKEN) as string | null;

    return this;
  }

  private setTokenType(tokenType: string) {
    this.tokenType = tokenType;
    Cookie.set(TOKEN_TYPE, tokenType);

    return this;
  }

  private setAccessToken(accessToken: string, expiresInMilliseconds: number) {
    this.accessToken = accessToken;

    const expires = new Date(Date.now() + expiresInMilliseconds);
    Cookie.set(ACCESS_TOKEN, accessToken, {
      expires
    });

    return this;
  }

  private setRefreshToken(refreshToken: string, expiresInMilliseconds: number) {
    this.refreshToken = refreshToken;

    const expires = new Date(Date.now() + expiresInMilliseconds);
    Cookie.set(REFRESH_TOKEN, refreshToken, {
      expires
    });

    return this;
  }

  private clearTokens() {
    this.accessToken = null;
    this.refreshToken = null;
    this.tokenType = 'Bearer';
    Cookie.remove(TOKEN_TYPE);
    Cookie.remove(ACCESS_TOKEN);
    Cookie.remove(REFRESH_TOKEN);

    return this;
  }

  public logout() {
    this.clearTokens();

    this.publish();
    return this;
  }

  public login(res?: Token) {
    if (res?.tokenType) {
      this.setTokenType(String(res.tokenType));
    }
    if (res?.accessToken) {
      this.setAccessToken(res.accessToken, ms(res.accessExpireIn));
    }
    if (res?.refreshToken) {
      this.setRefreshToken(res.refreshToken, ms(res.refreshExpireIn));
    }

    this.publish();
    return this;
  }

  protected makeSnapshot(): AuthStoreState {
    return {
      tokenType: this.tokenType,
      accessToken: this.accessToken,
      refreshToken: this.refreshToken
    };
  }
}

export const authStore = new AuthStore();

export function useAuthStore() {
  const [snapshot] = useSyncedExternalStore<AuthStoreState>(authStore);
  return [snapshot, authStore as AuthStore] as const;
}
