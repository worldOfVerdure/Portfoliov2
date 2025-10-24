'use client';

import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Box, Stack, Typography, TypographyProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ColorChangeSpan from '../helpers/typographyHelpers/ColorChangeSpan.tsx';
import ViewWorkBtn from '../reuseables/buttons/viewWorkBtn/ViewWorkBtn.tsx';

// Typed animated wrapper around MUI Typography that forwards the ref
const AnimatedTypography = animated(
  React.forwardRef<HTMLElement, TypographyProps>(function AnimatedTypography(props, ref) {
    return <Typography ref={ref} {...props} />;
  })
);

const Header = () => {
  const theme = useTheme();

  // create springs in their initial (hidden/offscreen) state and get APIs
  const [leftSpring, leftApi] = useSpring(() => ({
    transform: 'translateX(-100%)',
    opacity: 0,
    config: { tension: 80, friction: 60 },
  }));

  const [rightSpring, rightApi] = useSpring(() => ({
    transform: 'translateX(100%)',
    opacity: 0,
    config: { tension: 80, friction: 60 },
  }));

  // start animations on client mount to avoid SSR / hydration mismatches
  React.useEffect(() => {
    leftApi.start({ transform: 'translateX(0%)', opacity: 1 });
    rightApi.start({ transform: 'translateX(0%)', opacity: 1 });
  }, [leftApi, rightApi]);

  return (
    <Box
      component="header"
      sx={{
        height: '100vh',
        position: 'relative',
        width: '100%',
      }}
    >
      <Stack
        spacing={3}
        sx={{
          alignItems: 'center',
          left: '50%',
          position: 'absolute',
          textAlign: 'center',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          width: '100%',
        }}
        useFlexGap
      >
        {/* Each heading line is an AnimatedTypography rendered as the semantic tag */}
        <AnimatedTypography
          component="h1"
          variant="h1"
          style={leftSpring}
          sx={{ display: 'block' }}
        >
          Hello, I&apos;m <ColorChangeSpan color={theme.palette.background.paper}>Andrew</ColorChangeSpan>.
        </AnimatedTypography>

        <AnimatedTypography
          component="h2"
          variant="h2"
          style={rightSpring}
          sx={{ display: 'block' }}
        >
          I&apos;m a Fullstack developer.
        </AnimatedTypography>

        <ViewWorkBtn color={theme.palette.background.paper} src="#">
          View My Work
        </ViewWorkBtn>
      </Stack>
    </Box>
  );
};

export default Header;
