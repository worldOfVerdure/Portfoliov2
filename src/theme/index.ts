// Barrel file for theme exports
// Theme Factory
export { createPalette } from './base/palette.ts'; // Palette resolver
export { getTheme } from './base/base.ts'; // Theme factory
// Config
export { authorPalette, type ManualPaletteConfig } from './config/paletteConfig.ts'; // Manual override layer
// Typography & Breakpoints
export { default as breakpoints } from './base/breakpoints.ts'; // Breakpoints
export { resolvedFonts } from './config/fontsConfig.ts'; // Font resolver
export { default as typography } from './base/typography.ts'; // Typography factory
// Emotion Cache
export { emotionCache } from './emotionCache.ts';
