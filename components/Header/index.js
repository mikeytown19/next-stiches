import { Component1Icon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import * as Styled from './Header.styles';
import Box from '../Box';
import { Logo } from '../../images/logo';

const Header = ({ }) => {
  const { theme, setTheme } = useTheme();

  return (
    <Styled.Header>
      <Link href="/">
        <a className="logo">
          <Component1Icon />

        </a>
      </Link>

      <Box
        flex
        jc="center"
        ai="center"
        css={{
          gap: '$3',
          svg: {
            size: '$4',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        }}
      >
        <Link href="/buttons">
          <a>Buttons</a>
        </Link>
        <Link href="/boxes">
          <a>Boxes</a>
        </Link>
        <Link href="/heros">
          <a>Heros</a>
        </Link>
        <span>Discord</span>
        <SunIcon onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))} aria-label="toggle a light and dark color scheme" />
      </Box>

    </Styled.Header>
  );
};

export default Header;
