import {hierarchy} from '@Router';
import {Tabbar} from '@telegram-apps/telegram-ui';
import {Bell, House, Search, User} from 'lucide-react';
import {memo, useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router';

const BottomNavigationComponent = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const tabs = useMemo(
    () => [
      {
        Icon: House,
        text: 'Home',
        path: hierarchy.home.path
      },
      {
        Icon: Search,
        text: 'Search',
        path: hierarchy.search.path
      },
      {
        Icon: Bell,
        text: 'Activity',
        path: hierarchy.activity.path
      },
      {
        Icon: User,
        text: 'Profile',
        path: hierarchy.profile.path
      }
    ],
    []
  );

  return (
    <Tabbar className="!pb-safe-bottom">
      {tabs.map(({path, text, Icon}) => (
        <Tabbar.Item
          key={path}
          text={text}
          selected={path === pathname}
          onClick={() => navigate(path)}
        >
          <Icon />
        </Tabbar.Item>
      ))}
    </Tabbar>
  );
};

export const BottomNavigation = memo(BottomNavigationComponent);
