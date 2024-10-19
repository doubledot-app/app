/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Double core
 * The Double API documentation
 * OpenAPI spec version: 1.0
 */
import {
  useMutation,
  useQuery,
  useSuspenseQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult
} from '@tanstack/react-query'
import type {
  RefreshTokenDto,
  TelegramDto,
  Token,
  User
} from '../models'
import { coreMutator } from '../mutator';
import type { ErrorType } from '../mutator';



type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


export const coreControllerGetHello = (
    
 options?: SecondParameter<typeof coreMutator>,signal?: AbortSignal
) => {
      
      
      return coreMutator<string>(
      {url: `/api/v1`, method: 'GET', signal
    },
      options);
    }
  

export const getCoreControllerGetHelloQueryKey = () => {
    return [`/api/v1`] as const;
    }

    
export const getCoreControllerGetHelloQueryOptions = <TData = Awaited<ReturnType<typeof coreControllerGetHello>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getCoreControllerGetHelloQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof coreControllerGetHello>>> = ({ signal }) => coreControllerGetHello(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData> & { queryKey: QueryKey }
}

export type CoreControllerGetHelloQueryResult = NonNullable<Awaited<ReturnType<typeof coreControllerGetHello>>>
export type CoreControllerGetHelloQueryError = ErrorType<unknown>


export function useCoreControllerGetHello<TData = Awaited<ReturnType<typeof coreControllerGetHello>>, TError = ErrorType<unknown>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof coreControllerGetHello>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof coreMutator>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useCoreControllerGetHello<TData = Awaited<ReturnType<typeof coreControllerGetHello>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof coreControllerGetHello>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof coreMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useCoreControllerGetHello<TData = Awaited<ReturnType<typeof coreControllerGetHello>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useCoreControllerGetHello<TData = Awaited<ReturnType<typeof coreControllerGetHello>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getCoreControllerGetHelloQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getCoreControllerGetHelloSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof coreControllerGetHello>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getCoreControllerGetHelloQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof coreControllerGetHello>>> = ({ signal }) => coreControllerGetHello(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData> & { queryKey: QueryKey }
}

export type CoreControllerGetHelloSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof coreControllerGetHello>>>
export type CoreControllerGetHelloSuspenseQueryError = ErrorType<unknown>


export function useCoreControllerGetHelloSuspense<TData = Awaited<ReturnType<typeof coreControllerGetHello>>, TError = ErrorType<unknown>>(
  options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useCoreControllerGetHelloSuspense<TData = Awaited<ReturnType<typeof coreControllerGetHello>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useCoreControllerGetHelloSuspense<TData = Awaited<ReturnType<typeof coreControllerGetHello>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useCoreControllerGetHelloSuspense<TData = Awaited<ReturnType<typeof coreControllerGetHello>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof coreControllerGetHello>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getCoreControllerGetHelloSuspenseQueryOptions(options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const authControllerTelegram = (
    telegramDto: TelegramDto,
 options?: SecondParameter<typeof coreMutator>,) => {
      
      
      return coreMutator<Token>(
      {url: `/api/v1/auth/telegram`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: telegramDto
    },
      options);
    }
  


export const getAuthControllerTelegramMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerTelegram>>, TError,{data: TelegramDto}, TContext>, request?: SecondParameter<typeof coreMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof authControllerTelegram>>, TError,{data: TelegramDto}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authControllerTelegram>>, {data: TelegramDto}> = (props) => {
          const {data} = props ?? {};

          return  authControllerTelegram(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthControllerTelegramMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerTelegram>>>
    export type AuthControllerTelegramMutationBody = TelegramDto
    export type AuthControllerTelegramMutationError = ErrorType<unknown>

    export const useAuthControllerTelegram = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerTelegram>>, TError,{data: TelegramDto}, TContext>, request?: SecondParameter<typeof coreMutator>}
): UseMutationResult<
        Awaited<ReturnType<typeof authControllerTelegram>>,
        TError,
        {data: TelegramDto},
        TContext
      > => {

      const mutationOptions = getAuthControllerTelegramMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const authControllerRefreshToken = (
    refreshTokenDto: RefreshTokenDto,
 options?: SecondParameter<typeof coreMutator>,) => {
      
      
      return coreMutator<Token>(
      {url: `/api/v1/auth/refresh-token`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: refreshTokenDto
    },
      options);
    }
  


export const getAuthControllerRefreshTokenMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerRefreshToken>>, TError,{data: RefreshTokenDto}, TContext>, request?: SecondParameter<typeof coreMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof authControllerRefreshToken>>, TError,{data: RefreshTokenDto}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authControllerRefreshToken>>, {data: RefreshTokenDto}> = (props) => {
          const {data} = props ?? {};

          return  authControllerRefreshToken(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthControllerRefreshTokenMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerRefreshToken>>>
    export type AuthControllerRefreshTokenMutationBody = RefreshTokenDto
    export type AuthControllerRefreshTokenMutationError = ErrorType<unknown>

    export const useAuthControllerRefreshToken = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerRefreshToken>>, TError,{data: RefreshTokenDto}, TContext>, request?: SecondParameter<typeof coreMutator>}
): UseMutationResult<
        Awaited<ReturnType<typeof authControllerRefreshToken>>,
        TError,
        {data: RefreshTokenDto},
        TContext
      > => {

      const mutationOptions = getAuthControllerRefreshTokenMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const userControllerFindMe = (
    
 options?: SecondParameter<typeof coreMutator>,signal?: AbortSignal
) => {
      
      
      return coreMutator<User>(
      {url: `/api/v1/user/me`, method: 'GET', signal
    },
      options);
    }
  

export const getUserControllerFindMeQueryKey = () => {
    return [`/api/v1/user/me`] as const;
    }

    
export const getUserControllerFindMeQueryOptions = <TData = Awaited<ReturnType<typeof userControllerFindMe>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getUserControllerFindMeQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userControllerFindMe>>> = ({ signal }) => userControllerFindMe(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData> & { queryKey: QueryKey }
}

export type UserControllerFindMeQueryResult = NonNullable<Awaited<ReturnType<typeof userControllerFindMe>>>
export type UserControllerFindMeQueryError = ErrorType<unknown>


export function useUserControllerFindMe<TData = Awaited<ReturnType<typeof userControllerFindMe>>, TError = ErrorType<unknown>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof userControllerFindMe>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof coreMutator>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useUserControllerFindMe<TData = Awaited<ReturnType<typeof userControllerFindMe>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof userControllerFindMe>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof coreMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useUserControllerFindMe<TData = Awaited<ReturnType<typeof userControllerFindMe>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useUserControllerFindMe<TData = Awaited<ReturnType<typeof userControllerFindMe>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getUserControllerFindMeQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getUserControllerFindMeSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof userControllerFindMe>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getUserControllerFindMeQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userControllerFindMe>>> = ({ signal }) => userControllerFindMe(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData> & { queryKey: QueryKey }
}

export type UserControllerFindMeSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof userControllerFindMe>>>
export type UserControllerFindMeSuspenseQueryError = ErrorType<unknown>


export function useUserControllerFindMeSuspense<TData = Awaited<ReturnType<typeof userControllerFindMe>>, TError = ErrorType<unknown>>(
  options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useUserControllerFindMeSuspense<TData = Awaited<ReturnType<typeof userControllerFindMe>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useUserControllerFindMeSuspense<TData = Awaited<ReturnType<typeof userControllerFindMe>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useUserControllerFindMeSuspense<TData = Awaited<ReturnType<typeof userControllerFindMe>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof userControllerFindMe>>, TError, TData>>, request?: SecondParameter<typeof coreMutator>}

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getUserControllerFindMeSuspenseQueryOptions(options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




