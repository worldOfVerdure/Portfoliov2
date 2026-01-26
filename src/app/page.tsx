'use client';

import { Box, Container, Stack } from '@mui/material';
import Header from '../components/Header';
import NavBar from '../components/navBar/NavBar.tsx';
import AboutMe from '@/components/AboutMe';

export default function HomePage() {
  return (
    <Container maxWidth="xxxl" disableGutters>
      <Stack> 
        <Header />
        <NavBar />
        <Box component="main">
          <AboutMe />
        </Box>
      </Stack>
    </Container>
  );
}
