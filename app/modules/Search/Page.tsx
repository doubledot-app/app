import {Placeholder} from '@telegram-apps/telegram-ui';

export default function HomePage() {
  return (
    <Placeholder
      className="h-full"
      header={'Search'}
      description={'We are not ready yet, please wait.'}
    >
      <img
        alt="error"
        src="/stickers/search.gif"
        style={{display: 'block', width: '144px', height: '144px'}}
      />
    </Placeholder>
  );
}
