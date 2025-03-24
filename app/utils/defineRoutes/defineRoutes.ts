import type {FlattenedRoutes, RouteDefinition} from './types';

/**
 * Flattens a nested object of route definitions into a single-level object
 * where each key represents a unique route path and each value represents
 * the corresponding URL path.
 *
 */
export function flattenRoute<T extends RouteDefinition>(
  data: T,
  assign: boolean
): FlattenedRoutes<[T]> {
  const path = assign ? (data.path ?? '/') : data.path;
  const {children, ...rest} = data;

  const flatten = {path, props: rest};

  if (children) {
    for (const child of children) {
      if (assign) {
        Object.assign(child, {path: `${path}${child.path ?? ''}`.replace(/\/+/g, '/')});
      }

      Object.assign(flatten, {
        [child.key]: flattenRoute(child, assign)
      });
    }
  }

  return flatten as unknown as FlattenedRoutes<[T]>;
}

export function flattenRoutes<T extends readonly RouteDefinition[]>(
  data: T,
  assign: boolean
): FlattenedRoutes<T> {
  return Object.fromEntries(
    data.map((route) => {
      return [route.key, flattenRoute(route, assign)];
    })
  ) as FlattenedRoutes<T>;
}

export function defineRoutes<T extends readonly RouteDefinition[]>(
  data: T
): {readonly collection: T; readonly hierarchy: Readonly<FlattenedRoutes<T>>} {
  return {collection: data, hierarchy: Object.freeze(flattenRoutes<T>(data, true))};
}
