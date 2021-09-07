import { styled } from '../../theme/stiches.config';
import {

  backgroundColorVariants,
} from '../../theme/variants';

export const Container = styled('div', {
  boxSizing: 'border-box',
  ml: 'auto',
  mr: 'auto',
  maxWidth: '1450px',
  px: '$6',
  py: '$10',

  '@bp1': {
    px: '$8',
    py: '$10',
  },
  '@bp2': {
    px: '$10',
    py: '$10',
  },
  '@bp3': {
    px: '$12',
    py: '$10',
  },

  variants: {
    size: {
      none: {
        maxWidth: 'none',
      },
      1: {
        maxWidth: '520px',
      },
      2: {
        maxWidth: '800px',
      },
      3: {
        maxWidth: '1200px',
      },

    },
  },
}, backgroundColorVariants);
