import { createPalette } from './palette.ts';
import { createTheme } from '@mui/material/styles';
import customBreakpoints from './breakpoints.ts';
import customTypography from './typography.ts';
import { resolvedFonts as fonts } from '../config/fontsConfig.ts';

export const getTheme = (mode: 'light' | 'dark') => {
  const theme = createTheme({
    breakpoints: { values: customBreakpoints },
    palette: createPalette(mode),
    // other slices
  });
  theme.typography = {
    ...theme.typography,
    ...customTypography(fonts, customBreakpoints),
  };
  return theme;
}
