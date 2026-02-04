import avatarImg from '../../assets/avatar/Avatar.webp';
import Box from '@mui/material/Box';
import Image from 'next/image';

const Avatar = () => {
  return (
    <Box
      sx={{
        width: {
          xs: '225px',
          md: '300px',
          xl: '350px'
        }
      }}
    >
      <Image
        alt="Avatar photo of web author, Andrew Chupka"
        height={676}
        sizes="(max-width: 600px) 225px, (max-width: 900px) 300px, 350px"
        src={avatarImg.src}
        style={{
          borderRadius: '50%',
          height: 'auto',
          width: '100%',
        }}
        width={676}
      />
    </Box>
   );
    
}

export default Avatar;
