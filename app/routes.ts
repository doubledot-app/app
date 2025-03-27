import type {RouteConfig} from '@react-router/dev/routes';

import {index, layout, route} from '@react-router/dev/routes';

export default [
  layout('modules/Layouts/PageLayout.tsx', [
    index('modules/Home/Page.tsx'),
    route('activity', 'modules/Activity/Page.tsx'),
    route('profile', 'modules/Profile/Page.tsx'),
    route('search', 'modules/Search/Page.tsx')
  ])
] satisfies RouteConfig;
