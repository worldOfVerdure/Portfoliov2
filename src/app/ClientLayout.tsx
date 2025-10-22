'use client';

import { CacheProvider, css, Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { emotionCache, getTheme } from '@/theme'; //getTheme only needed for only lightmode
import { ReactNode/*, useState */ } from 'react';//useState for light/dark mode
//import { useCachedTheme } from '@/theme/utils/useCachedTheme.ts'; //Needed for light/dark mode

export default function ClientLayout({ children }: { children: ReactNode }) {
  //const [mode, setMode] = useState<'light' | 'dark'>('light');
  //const theme = useCachedTheme(mode); //For light and dark mode
  const theme = getTheme('light');
  return (
    <CacheProvider value={emotionCache} >
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Global
          styles={ theme => css`
            body {
              background-color: ${theme.palette.background.default};
              font-size: 1.6rem;
            }
            html {
              font-size: 62.5%;
            }
          `}
        />
          {/* Optional: Add a toggle button or context provider here */}
          {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
