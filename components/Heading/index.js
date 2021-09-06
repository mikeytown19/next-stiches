import { styled } from '../../theme/stiches.config';
import { Text } from '../Text';
import {
  fontVariants, colorVariants, widthVariants, marginVariants, paddingVariants,
} from '../../theme/variants';

export const Heading = styled(Text, {
  mb: '$10',
  variants: {

    size: {
      sm: {
        fontSize: '$10',
        lineHeight: '$10',

      },
      md: {
        fontSize: '$11',
        lineHeight: '$11',
      },
      lg: {
        fontSize: '$12',
        lineHeight: '$12',
      },
    },
  },
},
colorVariants,
fontVariants,
widthVariants,
marginVariants,
paddingVariants);
