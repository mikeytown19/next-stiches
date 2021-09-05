import { styled } from '../../theme/stiches.config';

const Container = styled('div', {
  boxSizing: 'border-box',
  ml: 'auto',
  mr: 'auto',
  px: '$5',
  maxWidth: '1450px',

  variants: {
    size: {
      none: {
        maxWidth: '0',
      },
      1: {
        maxWidth: '430px',
      },
      2: {
        maxWidth: '715px',
      },
      3: {
        maxWidth: '1145px',
      },

    },
  },
});

export default Container;
