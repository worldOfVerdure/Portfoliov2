import Avatar from './Avatar.tsx';
import { Box, Stack, Typography } from '@mui/material';
import TechStack from './TechStack.tsx';

const AboutMe = () => {
  return (
    <Box component="section" id="about" sx={{ height: '90vh', pb: '100px'}}> {/* Outer most container, contains h2, avatar&text, tech used */}
      <Typography
        sx={{
          color: 'background.paper',
          mb: { xs: 4, md: 6 },
          mt: { xs: 4, md: 6 },
          textAlign: 'center' 
        }}
        variant="h2"
      >
        About Me
      </Typography>
      <Stack
        alignItems="center"
        flexDirection={{ lg: 'column', xl: 'row' }}
        justifyContent="space-evenly"
      > {/* Container for avatar&text and techstack */}
        <Stack
          alignItems="center"
          spacing={{ xs: 3, md: 6 }}
          sx={{
            maxWidth: '480px',
            width: { xs: '90%', md: 'fit-content' }
          }}
        > {/* Container for avatar and text */}
          <Avatar />
          <Typography
            variant="body1"
            sx={{ width: { xs: '100%', md: '95%' }, textAlign: "center" }}
          >
            My passion for web development stemmed from my love of math and programming. I
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
