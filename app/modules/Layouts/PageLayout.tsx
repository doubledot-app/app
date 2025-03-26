import {Fragment} from 'react';
import {Outlet} from 'react-router';

import {BottomNavigation} from './components/BottomNavigation';

export default function PageLayout() {
  return (
    <Fragment>
      <Outlet />
      <BottomNavigation />
    </Fragment>
  );
}
