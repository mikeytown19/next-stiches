import { css } from './stiches.config';

export const flexVariants = css({
  variants: {
    flex: {
      true: {
        display: 'flex',
        jc: 'center',
        ai: 'center',
        fd: 'column',
      },
    },
  },
});
