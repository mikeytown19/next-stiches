import { styled } from '../../theme/stiches.config';
import { gridVariants } from '../../theme/variants';

export const Grid = styled('div', {
  display: 'grid',
  boxSizing: 'border-box',
  py: '$9',

}, gridVariants);
