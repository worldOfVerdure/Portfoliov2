import createCache from '@emotion/cache';

export const emotionCache = createCache({
  key: 'mui',       // ensures class names start with 'mui-'
  prepend: true,    // injects styles at the top of <head> for override safety
});
