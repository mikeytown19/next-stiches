import { styled } from '../../theme/stiches.config';
import { gridVariants } from '../../theme/variants';

export const Grid = styled('div', {
  display: 'grid',
  boxSizing: 'border-box',
  '>div': {
    pt: '$8',
  },

  '@bp2': {

    '>div': {
      pt: '0',

    },
  },

}, gridVariants);
