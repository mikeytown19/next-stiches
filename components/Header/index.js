import { Component1Icon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import * as Styled from './Header.styles';
import Box from '../Box';

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
        css={{
          display: 'flex',
          ai: 'center',
          jc: 'center',
          mr: '$4',
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
        <span>Blog</span>
        <span>Github</span>
        <span>Discord</span>
        <SunIcon onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))} aria-label="toggle a light and dark color scheme" />
      </Box>

    </Styled.Header>
  );
};

export default Header;
