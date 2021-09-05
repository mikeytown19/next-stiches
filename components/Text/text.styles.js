import { styled } from '../../theme/stiches.config';
import {
  fontVariants, colorVariants, widthVariants, marginVariants,
} from '../../theme/variants';

export const Text = styled('p', {
  lineHeight: '1',

  fontWeight: 400,
  pb: '$5',

  variants: {
    heading: {
      true: {
        fontWeight: 800,
        fontSize: '$10',
        lineHeight: '4rem',
        letterSpacing: '-.005em',
        textIndent: '-.0025em',
        mb: '$9',

        '@bp1': {
          lineHeight: '6rem',
          fontSize: '$11',
        },
        '@bp2': {
          lineHeight: '7rem',
          fontSize: '$12',
        },
      },
    },
  },
}, colorVariants, fontVariants, widthVariants, marginVariants);
