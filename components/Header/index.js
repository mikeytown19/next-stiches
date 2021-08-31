import React from 'react'
import * as Styled from './Header.styles'
import { StitchesLogoIcon ,SunIcon } from '@radix-ui/react-icons';
import Box from '../Box'
import { useTheme } from 'next-themes';

const Header = ({children}) => {
  const { theme, setTheme } = useTheme();
  console.log("🚀 ~ file: index.js ~ line 9 ~ Header ~ theme", theme)
  return (
    <Styled.Header>

      <div className="logo">
        <StitchesLogoIcon />
      </div>

      <Box
        css={{
          display: 'flex',
          ai: 'center',
          jc: 'center',
          mr: '$4',
          svg: {
            size: '$4',
            '&:hover': {
              'cursor': 'pointer'
            }
          }
        }}
      >
        <span>Docs</span>
        <span>Blog</span>
        <span>Github</span>
        <span>Discord</span>
        <SunIcon onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))} aria-label="toggle a light and dark color scheme" />
      </Box>

    </Styled.Header>
  )
}

export default Header
