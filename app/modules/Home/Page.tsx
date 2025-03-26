import {Placeholder} from '@telegram-apps/telegram-ui';

export default function HomePage() {
  return (
    <Placeholder header={'Welcome'} description={'We not ready yet, pls wait.'}>
      <img
        alt="error"
        src="/stickers/oops.gif"
        style={{display: 'block', width: '144px', height: '144px'}}
      />
    </Placeholder>
  );
}
