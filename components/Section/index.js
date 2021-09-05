import { styled } from '../../theme/stiches.config';
import { fontVariants, backgroundColorVariants } from '../../theme/variants';

const Section = styled('section', {
  boxSizing: 'border-box',

  flexShrink: 0,
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  variants: {
    bg: {
      primaryGradient: {
        linearGradient: '19deg, $tomato6 0%, $violet6 100%',

      },
    },
  },
}, fontVariants, backgroundColorVariants);

export default Section;
