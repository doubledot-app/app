import { Placeholder } from '@telegram-apps/telegram-ui';

export const ErrorFallback = () => {
  return (
    <Placeholder
      header='Oops'
      description='An error has occurred.'
    >
      <img
        alt='error'
        src='/stickers/error.gif'
        style={{ display: 'block', width: '144px', height: '144px' }}
      />
    </Placeholder>
  );
};
