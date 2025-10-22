type ManualPaletteType = {
  light: string,
  dark: string
}

export interface ManualPaletteConfig {
  primaryMain: ManualPaletteType;
  secondaryMain: ManualPaletteType;
  backgroundDefault: ManualPaletteType;
  backgroundPaper: ManualPaletteType;
  textPrimary: ManualPaletteType;
  textSecondary: ManualPaletteType;
  successMain: ManualPaletteType;
  errorMain: ManualPaletteType;
  infoMain: ManualPaletteType;
  divider: ManualPaletteType;
}
//Palette where author choose colors
export const authorPalette: ManualPaletteConfig = {
  primaryMain: {
    light: '#1976d2',
    dark: '#90caf9',
  },
  secondaryMain: {
    light: '#2e244e',
    dark: '#7a509a',
  },
  backgroundDefault: {
    light: '#03e6db',
    dark: '#0a0a03',
  },
  backgroundPaper: {
    light: '#25ab8a',
    dark: '#01e689',
  },
  textPrimary: {
    light: '#021602',
    dark: '#e9fbfd',
  },
  textSecondary: {
    light: '#1a3c48',
    dark: '#00c1f9',
  },
  successMain: {
    light: '#096327',
    dark: '#3cd962',
  },
  errorMain: {
    light: '#f00a16',
    dark: '#f00a16',
  },
  infoMain: {
    light: '#00c1f9',
    dark: '#00c1f9',
  },
  divider: {
    light: '#46431e',
    dark: '#d7b637',
  },
};

/*
#03e6db
#01e689
#3cd962
#29dc89
#25ab8a
#375605
#096327
#01773d
#3d3f25
#021602

#e9fbfd
#7dc2c9
#00c1f9
#4cc9e5
#3b96a8
#1a3c48

#d7b637
#928035
#46431e

#f00a16

#c9378c

#7a509a
#2e244e
#272356
#4b4153
#0d2248

#0a0a03
 */

