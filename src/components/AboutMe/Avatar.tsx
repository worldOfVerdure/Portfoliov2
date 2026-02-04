import avatarImg from '../../assets/avatar/Avatar.webp';
import Image from 'next/image';

const Avatar = () => {
  return (
    <Image
      alt="Avatar photo of web author, Andrew Chupka"
      height={1912}
      src={avatarImg.src}
      style={{
        height: 'auto',
        borderRadius: '50%',
        width: '25rem'
      }}
      width={1912}
    />
  );
}

export default Avatar;
