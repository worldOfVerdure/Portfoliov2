import { Breakpoints } from '@mui/material/styles';
import { type FontConfig } from '../config/fontsConfig.ts';

const customTypography = (
  fonts: FontConfig,
  breakpoints: Breakpoints['values']
) => ({
  h1: {
    fontFamily: fonts.heading,
    fontWeight: 400,
    fontSize: '2.8rem', // xs
    lineHeight: 1.6,
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '3.25rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '3.75rem',
    },
    [`@media (min-width:${breakpoints.lg}px)`]: {
      fontSize: '4rem',
    },
    [`@media (min-width:${breakpoints.xl}px)`]: {
      fontSize: '4.25rem',
    },
    [`@media (min-width:${breakpoints.xxl}px)`]: {
      fontSize: '4.5rem',
    },
    [`@media (min-width:${breakpoints.xxxl}px)`]: {
      fontSize: '4.75rem',
    },
  },
  h2: {
    fontFamily: fonts.heading,
    fontWeight: 400,
    fontSize: '3rem', // xs
    lineHeight: 1.3,
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '3.3rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '3.6rem',
    },
    [`@media (min-width:${breakpoints.lg}px)`]: {
      fontSize: '3.8rem',
    },
    [`@media (min-width:${breakpoints.xl}px)`]: {
      fontSize: '3.95rem',
    },
    [`@media (min-width:${breakpoints.xxl}px)`]: {
      fontSize: '4.2rem',
    },
    [`@media (min-width:${breakpoints.xxxl}px)`]: {
      fontSize: '4.45rem',
    },
  },
  h3: {
    fontFamily: fonts.heading,
    fontWeight: 400,
    fontSize: '2.3rem', // xs
    lineHeight: 1.3,
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '2.75rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '3.25rem',
    },
    [`@media (min-width:${breakpoints.lg}px)`]: {
      fontSize: '3.5rem',
    },
    [`@media (min-width:${breakpoints.xl}px)`]: {
      fontSize: '3.75rem',
    },
    [`@media (min-width:${breakpoints.xxl}px)`]: {
      fontSize: '4rem',
    },
    [`@media (min-width:${breakpoints.xxxl}px)`]: {
      fontSize: '4.25rem',
    },
  },
  body1: {
    fontFamily: fonts.body,
    fontSize: '1.6rem', // xs
    lineHeight: 1.6,
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '1.8rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '2.2rem',
    },
    [`@media (min-width:${breakpoints.lg}px)`]: {
      fontSize: '2.5rem',
    },
    [`@media (min-width:${breakpoints.xl}px)`]: {
      fontSize: '2.8rem',
    },
    [`@media (min-width:${breakpoints.xxl}px)`]: {
      fontSize: '3.1rem',
    },
    [`@media (min-width:${breakpoints.xxxl}px)`]: {
      fontSize: '3.4rem',
    },
  },
  body2: {
    fontFamily: fonts.body,
    fontSize: '1.6rem', // xs
    lineHeight: 1.5,
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '1.7rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '2rem',
    },
    [`@media (min-width:${breakpoints.lg}px)`]: {
      fontSize: '2.2rem',
    },
    [`@media (min-width:${breakpoints.xl}px)`]: {
      fontSize: '2.3rem',
    }
  },
  /* Custom variants go here */
  cardDescription: {
    fontFamily: fonts.body,
    fontWeight: 400,
    fontSize: '1.6rem', // xs
    letterSpacing: '0.01em',
    lineHeight: 1.3,
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '1.7rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '1.8rem',
    },
    [`@media (min-width:${breakpoints.lg}px)`]: {
      fontSize: '1.9rem',
    },
    [`@media (min-width:${breakpoints.xl}px)`]: {
      fontSize: '2rem',
    },
    [`@media (min-width:${breakpoints.xxl}px)`]: {
      fontSize: '2.1rem',
    },
    [`@media (min-width:${breakpoints.xxxl}px)`]: {
      fontSize: '2.2rem',
    },
  },
  cardPrice: {
    fontFamily: fonts.heading,
    fontWeight: 600,
    fontSize: '2.3rem', // xs
    lineHeight: 1.5,
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '2.4rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '2.55rem',
    },
    [`@media (min-width:${breakpoints.lg}px)`]: {
      fontSize: '2.6rem',
    },
    [`@media (min-width:${breakpoints.xl}px)`]: {
      fontSize: '2.7rem',
    },
    [`@media (min-width:${breakpoints.xxl}px)`]: {
      fontSize: '3.05rem',
    },
    [`@media (min-width:${breakpoints.xxxl}px)`]: {
      fontSize: '3.15rem',
    },
  },
  cardTitle: {
    fontFamily: fonts.heading,
    fontWeight: 400,
    fontSize: '2.2rem', // xs
    lineHeight: 1.5,
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '2.3rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '2.45rem',
    },
    [`@media (min-width:${breakpoints.lg}px)`]: {
      fontSize: '2.5rem',
    },
    [`@media (min-width:${breakpoints.xl}px)`]: {
      fontSize: '2.6rem',
    },
    [`@media (min-width:${breakpoints.xxl}px)`]: {
      fontSize: '2.95rem',
    },
    [`@media (min-width:${breakpoints.xxxl}px)`]: {
      fontSize: '3.05rem',
    },
  },
  btnContained: {
    fontFamily: fonts.body,
    fontSize: '1.6rem', // xs
    fontWeight: 400,
    textTransform: 'uppercase',
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '1.7rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '1.8rem',
    },
  },
  btnOutline: {
    fontFamily: fonts.body,
    fontSize: '1.8rem', // xs
    fontWeight: 600,
    textTransform: 'uppercase',
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '2rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '2.2rem',
    },
  },
  navItem: {
    fontFamily: fonts.body,
    fontSize: '2.1rem', // xs
    fontWeight: 400,
    textTransform: 'uppercase',
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '2.3rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '2.6rem',
    },
    [`@media (min-width:${breakpoints.lg}px)`]: {
      fontSize: '2.9rem',
    }
  },
  navItemCard: {
    fontFamily: fonts.body,
    fontSize: '1.6rem', // xs
    fontWeight: 400,
    lineHeight: 1,
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '1.7rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '1.8rem',
    },
    [`@media (min-width:${breakpoints.lg}px)`]: {
      fontSize: '1.9rem',
    }
  },
  navTitle: {
    fontFamily: fonts.heading,
    fontSize: '2.3rem', // xs
    fontWeight: 600,
    textTransform: 'uppercase',
    textDecoration: 'underline',
    [`@media (min-width:${breakpoints.sm}px)`]: {
      fontSize: '2.6rem',
    },
    [`@media (min-width:${breakpoints.md}px)`]: {
      fontSize: '2.9rem',
    },
    [`@media (min-width:${breakpoints.lg}px)`]: {
      fontSize: '3.3rem',
    }
  },
});
  
export default customTypography;
