import { styled } from '../../stiches.config';

export const Header = styled('nav', {
  bg: 'inherit',
  p: '$4',
  display: 'flex',
  jc: 'space-between',
  ai: 'center',
  color: '$gray400',
  '.logo': {
    svg: {
      fill: '$gray400',
      size: '$6',
    },
  },
  span: {
    px: '$3',
    color: '$gray400'
  },
  svg: {
    color: '$gray400'
  }



});


