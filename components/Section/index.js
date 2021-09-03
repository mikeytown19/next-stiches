import { styled } from '../../theme/stiches.config';

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
    size: {
      1: {
        py: '$3',
      },
      2: {
        py: '$7',
      },
      3: {
        py: '$9',
      },
    },
  },
});

export default Section;
