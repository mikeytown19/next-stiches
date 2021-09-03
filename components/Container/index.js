import { styled } from '../../theme/stiches.config';

const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',

  variants: {
    size: {
      1: {
        maxWidth: '430px',
      },
      2: {
        maxWidth: '715px',
      },
      3: {
        maxWidth: '1145px',
      },
      4: {
        maxWidth: 'none',
      },
    },
  },
});

export default Container;