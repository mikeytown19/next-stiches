import { styled } from '../../theme/stiches.config';
import { gridVariants } from '../../theme/variants';
import { Box } from '../Box';

export const Item = styled(Box, {
  boxSizing: 'border-box',

}, gridVariants);
