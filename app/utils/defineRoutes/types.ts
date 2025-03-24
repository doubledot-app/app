export type RouterMetadata = Record<string, unknown>;

export type RouteLayoutOptions = {
  bottomNavigation?: boolean;
};

export type RouteDefinition = {
  readonly key: string;
  readonly path?: string;
  readonly layout?: RouteLayoutOptions;
  readonly children?: readonly RouteDefinition[];
};

export type EnsureArray<T, R> = T extends R[] ? T : never;

type AssignPaths<
  Path1 extends string | undefined = '',
  Path2 extends string | undefined = '',
  Assigned extends `${Path1}/${Path2}` = `${Path1}/${Path2}`
> = Assigned extends `${infer Prefix}//${infer Suffix}` ? `${Prefix}/${Suffix}` : never;

export type FlattenedRoutes<
  Routes extends readonly RouteDefinition[],
  Data = Readonly<{}>,
  Path extends string | undefined = ''
> = Routes extends readonly [infer First, ...infer Rest]
  ? First extends RouteDefinition
    ? FlattenedRoutes<
        EnsureArray<Rest, RouteDefinition>,
        Readonly<
          Data & {
            [K in First['key']]: Readonly<{
              path: AssignPaths<Path, First['path']>;
              props: Omit<RouteDefinition, 'children' | 'path'>;
            }> &
              (First['children'] extends readonly RouteDefinition[]
                ? FlattenedRoutes<First['children'], Readonly<{}>, AssignPaths<Path, First['path']>>
                : {});
          }
        >,
        Path
      >
    : FlattenedRoutes<EnsureArray<Rest, RouteDefinition>, Data, Path>
  : Data;

export type FlattenRouteDefinition = {
  props: Omit<RouteDefinition, 'children' | 'path'>;
  path: string;
};
