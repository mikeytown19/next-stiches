import { styled } from '../../theme/stiches.config';

export const Grid = styled('div', {
  display: 'grid',
  boxSizing: 'border-box',
  py: '$9',
  variants: {
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
  },
});
