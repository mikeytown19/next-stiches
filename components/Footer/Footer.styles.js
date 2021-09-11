import { styled } from '../../theme/stiches.config';
import {
  flexVariants, paddingVariants, marginVariants, backgroundColorVariants,
} from '../../theme/variants';

export const Footer = styled('footer', {
  boxSizing: 'border-box',
  svg: {
    color: '$gray9',
    size: '$7',
  },
},
flexVariants,
paddingVariants,
marginVariants,
backgroundColorVariants);
