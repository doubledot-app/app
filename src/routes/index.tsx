import { createFileRoute } from '@tanstack/react-router';
import { Cell, List, Section } from '@telegram-apps/telegram-ui';

import { Link } from '@/components/Link';

export const Route = createFileRoute('/')({
  component: Home
});

function Home() {
  return (
    <List>
      <Section
        header='Application Launch Data'
        footer='These pages help developer to learn more about current launch information'
      >
        <Link to='/'>
          <Cell subtitle='User data, chat information, technical data'>Init Data</Cell>
        </Link>
        <Link to='/'>
          <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
        </Link>
        <Link to='/'>
          <Cell subtitle='Telegram application palette information'>Theme Parameters</Cell>
        </Link>
      </Section>
    </List>
  );
}
