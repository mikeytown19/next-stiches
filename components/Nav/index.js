/* eslint-disable jsx-a11y/anchor-is-valid */
import { Half2Icon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import * as Styled from './Nav.styles';
import { Flex, Text, Box } from '..';
import { navData } from './navData';

export const Nav = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Styled.Nav>
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
          a: { mr: '$5' },
          svg: {
            size: '$4',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        }}
      >
        {navData.map((item) => {
          if (item.dropdown) {
            return (
              <Box
                className="dropdown"
                as="ul"
                onMouseEnter={() => { console.log('mouse entered'); }}
              >
                <Link className="dropdown_main" href={item.url}>
                  <a>{item.text}</a>
                </Link>
                <Box className="dropdown_hidden_container">
                  <Box className="dropdown_hidden">
                    {item.dropdown.map((dropDownItem) => (
                      <Link href={dropDownItem.url}>
                        <a className="link"> {dropDownItem.text}</a>
                      </Link>
                    ))}
                  </Box>

                </Box>

              </Box>
            );
          }
          return (
            <Link href={item.url}>
              <a>{item.text}</a>
            </Link>
          );
        })}
        <SunIcon onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))} aria-label="toggle a light and dark color scheme" />
      </Flex>
    </Styled.Nav>
  );
};
