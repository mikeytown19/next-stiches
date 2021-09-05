import { css } from '../stiches.config';

export const flexVariants = css({
  variants: {
    flex: {
      true: {
        display: 'flex',
      },
    },
    fd: {
      column: {
        fd: 'column',
      },
    },
    jc: {
      center: {
        jc: 'center',
      },
    },
    ai: {
      center: {
        ai: 'center',
      },
    },
  },
});
