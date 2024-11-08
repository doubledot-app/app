import { Placeholder } from '@telegram-apps/telegram-ui';

export const NotFound = () => {
  return (
    <Placeholder
      header='Oops'
      description='The page you are looking for does not exist.'
    >
      <img
        alt='oops'
        src='/stickers/oops.gif'
        style={{ display: 'block', width: '144px', height: '144px' }}
      />
    </Placeholder>
  );
};
