import { getTheme } from '../base/base.ts';
import type { Theme } from '@mui/material/styles';
import { useMemo, useRef } from 'react';

export function useCachedTheme(mode: 'light' | 'dark'): Theme {
  /* We ultimately want a Record that has two keys, light and dark. Each key has a theme that
    differs in its palette: light mode colors and dark mode colors. The Partial Record allows light
    or dark to be undefined so that we only create the other theme when needed. */
  const themeCache = useRef<Partial<Record<'light' | 'dark', Theme>>>({});

  return useMemo(() => {
    if (!themeCache.current[mode]) {
      themeCache.current[mode] = getTheme(mode);
    }
    return themeCache.current[mode];
  }, [mode]);
}
