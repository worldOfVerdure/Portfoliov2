import { animated, SpringValues } from '@react-spring/web';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link, Stack } from '@mui/material';
import React from 'react';

const AnimatedLink = animated(
  React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof Link>>(function AnimatedLink(props, ref) {
    return <Link ref={ref} {...props} />;
  })
);

type ViewWorkBtnProps = {
  children: React.ReactNode;
  color: string;
  src: string;
  style: SpringValues<React.CSSProperties>;
};

const ViewWorkBtn = ({ children, color, src, style }: ViewWorkBtnProps ) => {
  return (
    <AnimatedLink
      href={src}
      style={style}
      sx={{
        border: `.2rem solid ${color}`,
        color: color,
        p: '.8rem 3rem',
        textDecoration: 'none'
      }}
      variant="body1"
    >
      <Stack flexDirection="row" spacing={2} sx={{alignItems: 'center'}} useFlexGap>
        {children}
        <ArrowDownwardIcon fontSize="inherit"/>
      </Stack>
    </AnimatedLink>
  );
}

export default ViewWorkBtn;
