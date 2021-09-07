import { globalCss } from './stiches.config';

export const globalStyles = globalCss({
  html: { m: 0, p: 0 },
  body: { m: 0, p: 0, fontFamily: '$body' },
  '*': { margin: 0, padding: 0 },

  h1: {
    fontSize: '$8',
    lineHeight: '$8',
    fontWeight: '900',
    '@bp1': {
      fontSize: '$9',
      lineHeight: '$9',
      fontWeight: '900',
    },
  },
  h2: {
    fontSize: '$7',
    lineHeight: '$7',
    fontWeight: '800',
    '@bp1': {
      fontSize: '$8',
      lineHeight: '$8',

    },
  },
  h3: {
    fontSize: '$6',
    lineHeight: '$6',
    fontWeight: '700',
    '@bp1': {
      fontSize: '$7',
      lineHeight: '$7',

    },
  },
  h4: {
    fontSize: '$5',
    lineHeight: '$5',
    fontWeight: '$bold',
    '@bp1': {
      fontSize: '$6',
      lineHeight: '$6',
    },
  },
  h5: {
    fontSize: '$5',
    lineHeight: '$5',
    fontWeight: '$bold',
  },
  'i,p': {
    fontSize: '$4',
    lineHeight: '$4',
    fontWeight: '$normal',
  },
});
