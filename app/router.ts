import type {RouteDefinition} from '@Utils/defineRoutes/types';

import {defineRoutes} from '@Utils/defineRoutes';

const {hierarchy, collection} = defineRoutes([
  {
    key: 'home',
    path: '/'
  }
] as const satisfies RouteDefinition[]);

export {hierarchy, collection};
