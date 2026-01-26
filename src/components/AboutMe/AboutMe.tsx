import Avatar from './Avatar.tsx';
import { Box, Stack, Typography } from '@mui/material';
import TechStack from './TechStack.tsx';

const AboutMe = () => {
  return (
    <Box component="section"> {/* Outer most container, contains h2, avatar&text, tech used */}
      <Typography variant="h2" sx={{ color: 'background.paper', my: 8, textAlign: 'center' }}>
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
          spacing={2}
          sx={{
            width: '40vw',
          }}
        > {/* Container for avatar and text */}
          <Avatar/>
          <Typography
            variant="body1"
            sx={{ width: '75%', textAlign: "center" }}
          >
            Full Stack web development stemmed from my love of math and programming. I love learning
            about technologies in the React ecosytem with TypeScript being my go-to language. I am
            always amazed that information and technology can be provided with a browser and
            internet connection. When I am away from my code editor, I could be weightlifting,
            playing a tabletop game with dice, or growing gourmet mushrooms.
          </Typography>
        </Stack>
        <TechStack />
      </Stack>
    </Box>
  );
}

export default AboutMe;
