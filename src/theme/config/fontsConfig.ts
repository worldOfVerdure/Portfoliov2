export type FontConfig = {
  body: string;
  heading: string;
  mono?: string;
};

//Add your fonts here, before the fontstack
const fonts: FontConfig = {
  body: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  heading: [
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ].join(','),
  // mono: [
  //   'Menlo',
  //   'Monaco',
  //   '"Courier New"',
  //   'Courier',
  //   'monospace',
  // ].join(','),
};

export const resolvedFonts: FontConfig = {
  body: fonts.body,
  heading: fonts.heading
  // mono: buildFontStack(clientFonts.mono, defaultFonts.mono),
};
