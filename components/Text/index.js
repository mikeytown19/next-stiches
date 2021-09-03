import { styled } from '../../theme/stiches.config';

export const Text = styled('p', {

  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  pb: '$4',

  variants: {
    heading: {
      true: {
        fontWeight: 800,
        fontSize: '$12',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
        mb: '$9',
        fontVariantNumeric: 'proportional-nums',
        lineHeight: '3rem',
        bp2: {
          lineHeight: '30px',
        },
      },
    },
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
      4: {
        fontSize: '$4',
      },
      5: {
        fontSize: '$5',
        letterSpacing: '-.015em',
      },
      6: {
        fontSize: '$6',
        letterSpacing: '-.016em',
      },
      7: {
        fontSize: '$7',
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      8: {
        fontSize: '$8',
        letterSpacing: '-.034em',
        textIndent: '-.018em',
        pb: '$6',
      },
      9: {
        fontSize: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
    },
    color: {
      red: {
        color: '$red9',
      },
      crimson: {
        color: '$crimson9',
      },
      pink: {
        color: '$pink9',
      },
      purple: {
        color: '$purple9',
      },
      violet: {
        color: '$violet7',
      },
      indigo: {
        color: '$indigo9',
      },
      blue: {
        color: '$blue9',
      },
      turquoise: {
        color: '$turquoise9',
      },
      teal: {
        color: '$teal9',
      },
      green: {
        color: '$green9',
      },
      lime: {
        color: '$lime9',
      },
      yellow: {
        color: '$yellow9',
      },
      orange: {
        color: '$orange9',
      },
      gold: {
        color: '$gold9',
      },
      bronze: {
        color: '$bronze9',
      },
      gray: {
        color: '$gray9',
      },
      contrast: {
        color: '$hiContrast',
      },
    },
  },
});
