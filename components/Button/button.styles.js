import { styled, css } from '../../theme/stiches.config';

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
  transition: 'background-color .2s',
  mx: '$3',
  '&:hover': {
    cursor: 'pointer',

  },
  variants: {
    primary: {
      true: {
        bg: '$primary',
        '&:hover': {
          bg: '$primaryHover',
        },
      },
    },
    secondary: {
      true: {
        bg: '$secondary',
        '&:hover': {
          bg: '$secondaryHover',
        },
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
    icon: {
      true: {
        pr: '$4',

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

});

export default Button;
