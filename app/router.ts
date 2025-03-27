import type {RouteDefinition} from '@Utils/defineRoutes/types';

import {defineRoutes} from '@Utils/defineRoutes';

const {hierarchy, collection} = defineRoutes([
  {
    key: 'home',
    path: '/'
  },
  {
    key: 'search',
    path: '/search'
  },
  {
    key: 'activity',
    path: '/activity'
  },
  {
    key: 'profile',
    path: '/profile'
  }
] as const satisfies RouteDefinition[]);

export {hierarchy, collection};
