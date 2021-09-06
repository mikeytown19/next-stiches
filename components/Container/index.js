import { styled } from '../../theme/stiches.config';

export const Container = styled('div', {
  boxSizing: 'border-box',
  ml: 'auto',
  mr: 'auto',
  px: '$5',
  maxWidth: '1450px',

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
});
