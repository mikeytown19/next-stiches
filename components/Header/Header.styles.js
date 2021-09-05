import { styled } from '../../theme/stiches.config';

export const Header = styled('nav', {
  bg: 'inherit',
  p: '$4',
  display: 'flex',
  jc: 'space-between',
  ai: 'center',
  color: '$slate12',

  '.logo': {
    svg: {
      fill: 'inherit',
      size: '$7',
    },
  },
  'span, a': {
    color: '$text',
    textDecoration: 'none',
  },
  svg: {
    color: '$text',
  },

});
