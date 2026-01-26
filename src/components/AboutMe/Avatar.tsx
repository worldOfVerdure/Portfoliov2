import avatarImg from '../../assets/avatar/Avatar.webp';
import { Box } from '@mui/material';

const Avatar = () => {
  return (
    <Box
      alt="Avatar photo of a silhouetted, pixelated man"
      component="img"
      src={avatarImg.src}
      sx={{
        height: 'auto',
        width: '25rem'
      }}
    />
  );
}

export default Avatar;
