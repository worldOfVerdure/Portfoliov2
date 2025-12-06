import { animated, SpringValues } from '@react-spring/web';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, Link, Stack } from '@mui/material';
import { keyframes } from '@emotion/react';
import React from 'react';

const brokenFlash = keyframes`
  0% {
    opacity: .1; 
  }
  2% {
    opacity: .1; 
  }
  4% {
    opacity: .5; 
  }
  20% {
    opacity: .4; 
  }
  22% {
    opacity: .2; 
  }
  23% {
    opacity: 1; 
  }
  80% {
    opacity: .6; 
  }
  85% {
    opacity: .5; 
  }
  90% {
    opacity: 1; 
  }
`;

const textFlash = keyframes`
  0% {
    opacity: .1; 
  }
  2% {
    opacity: .8; 
  }
  8% {
    opacity: .3; 
  }
  10% {
    opacity: 1; 
  }
  12% {
    opacity: .1; 
  }
  20% {
    opacity: .7; 
  }
  25% {
    opacity: .5; 
  }
  30% {
    opacity: 1; 
  }
  70% {
    opacity: .6; 
  }
  72% {
    opacity: .4; 
  }
  75% {
    opacity: .9; 
  }
  100% {
    opacity: 1; 
  }
`;

const borderFlash = keyframes`
  0% {
    opacity: .1; 
  }
  2% {
    opacity: .7; 
  }
  4% {
    opacity: .3; 
  }
  8% {
    opacity: 1; 
  }
  70% {
    opacity: .9; 
  }
  100% {
    opacity: 1; 
  }
`;

const AnimatedLink = animated(
  React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof Link>>(function AnimatedLink(props, ref) {
    return <Link ref={ref} {...props} />;
  })
);

type ViewWorkBtnProps = {
  color: string;
  src: string;
  style: SpringValues<React.CSSProperties>;
};

const ViewWorkBtn = ({ color, src, style }: ViewWorkBtnProps ) => {
  const flashingLetterStyle = {
    animation: `${brokenFlash} 3.6s linear infinite`,
    opacity: '.5rem'
  };
  return (
    <AnimatedLink // class = glow-btn
      href={src}
      style={style}
      sx={{
        animation: `${borderFlash} 1.5s linear infinite`,
        border: `.2rem solid ${color}`,
        borderRadius: '.5rem',
        boxShadow: `inset 0 0 .75rem 0 ${color}, 0 0 .75rem 0 ${color}`,
        color: color,
        letterSpacing: '.5rem',
        p: '.8rem 3rem',
        perspective: '5rem',
        textDecoration: 'none',
        '&::before': {
          background: `${color}`,
          bottom: 0,
          content: '""',
          filter: 'blur(2.5rem)',
          left: 0,
          pointerEvents: 'none', // ensures pseudo-element doesn't block button interactions
          position: 'absolute',
          opacity: '.7',
          right: 0,
          top: 0,
          transform: 'translateY(120%) rotateX(95deg) scale(1, .35)',
        },
        '&::after': {
          backgroundColor: `${color}`,
          bottom: 0,
          boxShadow: `0 0 4rem .5rem ${color}`,
          content: '""',
          left: 0,
          position: 'absolute',
          opacity: '0',
          right: 0,
          transition: 'opacity .2s linear',
          top: 0,
          zIndex: '-1'
        },
        '&:hover': {
          animation: 'none',
          color: '#000',
          textShadow: 'none',
        },
        '&:hover .glow-text': {
          animation: 'none',
        },
        '&:hover .flashing-letter': {
          animation: 'none',
          opacity: '1',
          textShadow: 'none'
        },
        '&:hover::before': {
          filter: 'blur(3rem)',
          opacity: '1',
        },
        '&:hover::after': {
          opacity: '1'
        }
      }}
      variant="body1"
    >
      <Stack flexDirection="row" spacing={2} sx={{alignItems: 'center'}} useFlexGap>
        <Box
          className="glow-text"
          component="span"
          sx={{
            animation: `${textFlash} 3.6s linear infinite`,
            textShadow: `0 0 .25rem hsl(50, 0%, 100% / .5), 0 0 .5rem ${color}`
          }}
        > 
          View M
          <Box className="flashing-letter" component="span" sx={flashingLetterStyle}>y</Box>{' '}
          Wo
          <Box className="flashing-letter" component="span" sx={flashingLetterStyle}>r</Box>k
        </Box>
        <ArrowDownwardIcon fontSize="inherit"/>
      </Stack>
    </AnimatedLink>
  );
}

export default ViewWorkBtn;
