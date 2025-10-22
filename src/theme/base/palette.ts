import { authorPalette } from '../config/paletteConfig.ts';
import { PaletteOptions } from '@mui/material/styles';

export type Mode = 'light' | 'dark';

export const createPalette = (
  mode: Mode,
): PaletteOptions => {
  return {
    mode,
    primary: {
      main: authorPalette['primaryMain'][mode],
      contrastText: '#fff',
    },
    secondary: {
      main: authorPalette['secondaryMain'][mode],
    },
    error: {
      main: authorPalette['errorMain'][mode],
    },
    info: {
      main: authorPalette['infoMain'][mode],
    },
    background: {
      default: authorPalette['backgroundDefault'][mode],
      paper: authorPalette['backgroundPaper'][mode],
    },
    text: {
      primary: authorPalette['textPrimary'][mode],
      secondary: authorPalette['textSecondary'][mode],
    },
    divider: authorPalette['divider'][mode]
  };
};
