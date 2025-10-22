// Tell TS we’re extending MUI’s breakpoint keys
import { type CSSProperties } from '@mui/material/styles/createTypography';
import '@mui/material/styles';

declare module '@mui/material/styles' {
  // ✅ Extend Breakpoints
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;   // your custom
    xxxl: true;  // your custom
  }
  // ✅ Extend Typography variants inside the theme
  interface TypographyVariants {
    cardDescription: CSSProperties;
    cardPrice: CSSProperties;
    cardTitle: CSSProperties;
    btnContained: CSSProperties;
    btnOutline: CSSProperties;
    navItem: CSSProperties;
    navItemCard: CSSProperties;
    navTitle: CSSProperties;
  }

  interface TypographyVariantsOptions {
    cardDescription?: CSSProperties;
    cardPrice?: CSSProperties;
    cardTitle?: CSSProperties;
    btnContained?: CSSProperties;
    btnOutline?: CSSProperties;
    navItem?: CSSProperties;
    navItemCard?: CSSProperties;
    navTitle?: CSSProperties;
  }
}

// ✅ Allow usage of `variant="navItem"` in <Typography>
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    cardDescription: true;
    cardPrice: true;
    cardTitle: true;
    btnContained: true;
    btnOutline: true;
    navItem: true;
    navItemCard: true;
    navTitle: true;
  }
}
