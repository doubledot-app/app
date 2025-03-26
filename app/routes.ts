import type {RouteConfig} from '@react-router/dev/routes';

import {index, layout} from '@react-router/dev/routes';

export default [
  layout('modules/Layouts/PageLayout.tsx', [index('modules/Home/Page.tsx')])
] satisfies RouteConfig;
