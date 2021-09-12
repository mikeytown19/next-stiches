import { styled } from '../../theme/stiches.config';

export const Nav = styled('nav', {
  bg: 'inherit',
  p: '$4',
  display: 'flex',
  jc: 'space-between',
  ai: 'center',
  color: '$slate12',
  maxWidth: '1450px',
  ml: 'auto',
  mr: 'auto',
  '.dropdown': {
    position: 'relative',
    '&:hover': {
      position: 'relative',
      '.dropdown_hidden_container': {
        display: 'block',
        transform: 'translateY(0px)',
        transition: ' transform .2s, opacity .5s',
        width: '100%',
        opacity: '1',
      },
      '.dropdown_hidden': {
        '.link:first-of-type': {
          pt: '0',
        },
        opacity: '1',
        height: 'auto',
        '&::before': {
          content: '',
          right: '50%',
          size: '$6',
          bg: '$gray4',

          position: 'absolute',
          top: '-8px',
          transform: 'rotate(45deg)',
        },
        bg: '$gray4',
        py: '$5',
        px: '$5',
        maxWidth: '250px',
        width: 'auto',
        display: 'block',
        position: 'absolute',
        left: '-50px',
        // top: '$8',
        br: '$1',
      },

    },
    '.dropdown_hidden_container': {
      transform: 'translateY(240px)',
      width: '0',
      opacity: '0',
    },
    '.dropdown_hidden': {
      transition: ' opacity .2s',
      height: '0',
    },
    '.link': {

      mb: '$2',
      pb: '0',
      '&:hover': {
        color: '$gray10',
      },
    },
  },

  '.logo': {
    alignItems: 'center',
    display: 'flex',
    color: '$yellow9',
    svg: {
      color: '$yellow9',
      size: '$6',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  'span, a': {
    display: 'none',
    transition: 'background-color .2s, color .2s',
    '&:hover': {
      color: '$gray10',
    },
    py: '$4',
    '@bp1': {
      color: '$text',
      textDecoration: 'none',
      alignItems: 'center',
      display: 'flex',
    },

  },
  svg: {
    color: '$text',
  },

});
