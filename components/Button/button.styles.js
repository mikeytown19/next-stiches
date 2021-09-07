import { styled } from '../../theme/stiches.config';
import { marginVariants, colorVariants } from '../../theme/variants';

export const Button = styled('button', {
  border: 0,
  borderRadius: '$2',
  fontSize: '$3',
  p: '$3',
  color: '$loContrast',

  transition: 'background-color .2s, box-shadow .2s',

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
    bg: {
      primary: {
        bg: '$yellow9',
        '&:hover': {
          bg: '$yellow10',
        },
      },
      red: {
        bg: '$red9',
        '&:hover': {
          bg: '$red10',
        },
      },
      crimson: {
        bg: '$crimson9',
        '&:hover': {
          bg: '$crimson10',
        },
      },
      pink: {
        bg: '$pink9',
        '&:hover': {
          bg: '$pink10',
        },
      },
      purple: {
        bg: '$purple9',
        '&:hover': {
          bg: '$purple10',
        },
      },
      violet: {
        bg: '$violet9',
        '&:hover': {
          bg: '$violet10',
        },
      },
      indigo: {
        bg: '$indigo9',
        '&:hover': {
          bg: '$indigo10',
        },
      },
      blue: {
        bg: '$blue9',
        '&:hover': {
          bg: '$blue10',
        },
      },
      tomato: {
        bg: '$tomato9',
        '&:hover': {
          bg: '$tomato10',
        },
      },
      teal: {
        bg: '$teal9',
        '&:hover': {
          bg: '$teal10',
        },
      },
      green: {
        bg: '$green9',
        '&:hover': {
          bg: '$green10',
        },
      },
      lime: {
        bg: '$lime9',
        '&:hover': {
          bg: '$lime10',
        },
      },
      yellow: {
        bg: '$yellow7',
        '&:hover': {
          bg: '$yellow8',
        },
      },
      orange: {
        bg: '$orange9',
        '&:hover': {
          bg: '$orange10',
        },
      },
      gold: {
        bg: '$gold9',
        '&:hover': {
          bg: '$gold10',
        },
      },
      bronze: {
        bg: '$bronze9',
        '&:hover': {
          bg: '$bronze10',
        },
      },
      gray: {
        bg: '$gray2',
        '&:hover': {
          bg: '$gray10',
        },
      },
      contrast: {
        bg: '$hiContrast',
        '&:hover': {
          bg: '$hiContras10',
        },
      },
    },
  },

}, marginVariants, colorVariants);

export default Button;
