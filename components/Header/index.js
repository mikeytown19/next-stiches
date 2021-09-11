/* eslint-disable jsx-a11y/anchor-is-valid */
import { Half2Icon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import * as Styled from './Header.styles';
import { Flex, Text } from '..';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Styled.Header>
      <Flex jc="center" ai="center" p="1">
        <Link href="/">
          <p className="logo">
            <Half2Icon />
            <Text fw="bold" as="h4" mx="2" py="0">Kich</Text>
          </p>
        </Link>
      </Flex>

      <Flex
        flex
        jc="center"
        ai="center"
        css={{
          a: { mr: '$3' },
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
        <Link href="/heros">
          <a>Discord</a>
        </Link>
        <SunIcon onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))} aria-label="toggle a light and dark color scheme" />
      </Flex>
    </Styled.Header>
  );
};
