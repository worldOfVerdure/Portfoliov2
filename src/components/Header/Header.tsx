'use client';

import { Box, Stack, Typography } from '@mui/material';
import ColorChangeSpan from '../helpers/typographyHelpers/ColorChangeSpan.tsx';
import { useTheme } from '@mui/material/styles';
import ViewWorkBtn from '../reuseables/buttons/viewWorkBtn/ViewWorkBtn.tsx';

const Header = () => {
  const theme = useTheme();
  return (
    <Box
      component="header"
      sx={{
        height: '100vh',
        position: 'relative',
        width: '100%'
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
          width: '100%'
        }}
        useFlexGap
      >
        <Typography variant="h1">
          <Typography component="span" variant="inherit">
            Hello, I&apos;m
            <ColorChangeSpan color={theme.palette.background.paper}> Andrew</ColorChangeSpan>.
          </Typography>
          <br/>
          <Typography component="span" variant="inherit">I&apos;m a Fullstack developer.</Typography>
        </Typography>
        <ViewWorkBtn color={theme.palette.background.paper} src="#">View My Work</ViewWorkBtn>
      </Stack>
    </Box>
  );
}

export default Header;
