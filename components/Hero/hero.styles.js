import { styled } from '../../theme/stiches.config';

import {
  marginVariants,
  flexVariants,
  fontVariants,
  colorVariants,
  containerVariants,
  backgroundColorVariants,
} from '../../theme/variants';

export const Hero = styled('article', {
  height: '100%',
},
colorVariants,
flexVariants,
fontVariants,
containerVariants,
backgroundColorVariants,
marginVariants);
