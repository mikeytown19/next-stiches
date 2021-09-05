import { styled, css } from '../../theme/stiches.config';
import { backgroundColorVariants, marginVariants, colorVariants } from '../../theme/variants';

export const focusableVariants = css({
  variants: {
    focusVisible: {
      true: {
        bg: 'background',
        px: '$3',
        py: '$3',
      },
    },
  },
});

export const Button = styled('button', {
  border: 0,
  borderRadius: '$2',
  fontSize: '$3',
  p: '$3',
  transition: 'background-color .2s, box-shadow .2s',
  mx: '$3',
  '&:hover': {
    cursor: 'pointer',
    boxShadow: '$1',

  },
  variants: {
    wide: {
      true: {
        px: '$9',
      },
    },
    size: {
      small: {
        py: '$2',
      },
      large: {
        py: '$4',
        px: '$6',
        my: '$2',
      },
    },
    outline: {
      true: {
        bg: 'blak2',
      },
    },
    icon: {
      true: {
        pr: '$3',
        display: 'inline-flex',
        jc: 'center',
        ai: 'center',
        '.iconContainer': {
          pr: '$1',
          display: 'inline-flex',
        },
      },
    },
    iconRight: {
      true: {
        pl: '$4',
        fd: 'row-reverse',
        '.iconContainer': {
          pl: '$1',
        },
      },
    },
    border: {
      none: {
        br: '0',
      },
    },
  },

}, backgroundColorVariants, marginVariants, colorVariants);

export default Button;
