import { styled } from '../../theme/stiches.config';

export const Header = styled('nav', {
  bg: 'inherit',
  p: '$4',
  display: 'flex',
  jc: 'space-between',
  ai: 'center',
  color: '$slate12',

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
