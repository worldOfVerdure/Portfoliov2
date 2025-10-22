import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link, Stack } from '@mui/material';

type ViewWorkBtnProps = {
  children: React.ReactNode;
  color: string;
  src: string;
};

const ViewWorkBtn = ({ children, color, src }: ViewWorkBtnProps ) => {
  return (
    <Link
      href={src}
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
    </Link>
  );
}

export default ViewWorkBtn;
