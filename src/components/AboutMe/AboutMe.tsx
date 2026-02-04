import Avatar from './Avatar.tsx';
import { Box, Stack, Typography } from '@mui/material';
import TechStack from './TechStack.tsx';

const AboutMe = () => {
  return (
    <Box component="section" sx={{pb: '500px'}}> {/* Outer most container, contains h2, avatar&text, tech used */}
      <Typography variant="h2" sx={{ color: 'background.paper', my: 5, textAlign: 'center' }}>
        About Me
      </Typography>
      <Stack
        alignItems="center"
        flexDirection={{ lg: 'column', xl: 'row' }}
        justifyContent="space-around"
        spacing={4}
      > {/* Container for avatar&text and tech */}
        <Stack
          alignItems="center"
          spacing={{ xs: 3, md: 6 }}
          sx={{
            width: { xs: '90%', md: '75%' }
          }}
        > {/* Container for avatar and text */}
          <Avatar/>
          <Typography
            variant="body1"
            sx={{ width: '90%', textAlign: "start" }}
          >
            &emsp; My passion for web development stemmed from my love of math and programming. I
            love learning about technologies in the React ecosytem with TypeScript being my go-to
            language. I am excited to be exploring backend with Node.js, Express.js and relational
            databses. When I am away from my code editor, I could be weightlifting, playing a
            tabletop game with dice, or growing gourmet mushrooms.
          </Typography>
        </Stack>
        <TechStack />
      </Stack>
    </Box>
  );
}

export default AboutMe;
