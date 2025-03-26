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
        path: '/',
        text: 'Home',
        Icon: House
      },
      {
        path: '/search',
        text: 'Search',
        Icon: Search
      },
      {
        path: '/activity',
        text: 'Activity',
        Icon: Bell
      },
      {
        path: '/profile',
        text: 'Profile',
        Icon: User
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
