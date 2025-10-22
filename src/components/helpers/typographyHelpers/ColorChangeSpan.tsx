import { Typography } from '@mui/material';

type ColorChangeSpanProps = {
  color: string;
  children: React.ReactNode;
};

const ColorChangeSpan = ( {color, children}: ColorChangeSpanProps ) => {
  return (
    <Typography
      component="span"
      sx={{
        color: color
      }}
      variant="h1"
    >
      {children}
    </Typography>
  );
}

export default ColorChangeSpan;
