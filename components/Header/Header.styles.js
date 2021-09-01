import { styled } from '../../stiches.config';

export const Header = styled('nav', {
  bg: 'inherit',
  p: '$4',
  display: 'flex',
  jc: 'space-between',
  ai: 'center',
  color: '$slate11',
  '.logo': {
    svg: {
      fill: 'inherit',
      size: '$6',
    },
  },
  span: {
    px: '$2',
    mx: '$2',
    color: 'inherit',
  },
  svg: {
    color: 'inherit',
  },

});
