import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import AnimatedBox from '../components/animated-box';

const Profile = () => {
  const path = useRouter().pathname;

  return (
    <AnimatedBox
      key={path}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, rotateX: 1080 }}
      exit={{ y: -20, opacity: 0, rotateX: -1080 }}
      transition={{ duration: 2 }}
      type='easeInOut'
      borderRadius='full'
      borderColor='red'
      borderWidth='thick'
      maxW='300px'
      maxH='300px'
    >
      <Image
        alt='Profile'
        src='https://avatars.githubusercontent.com/u/55247343?v=4'
        borderRadius='full'
        width='100%'
      />
    </AnimatedBox>
  );
};

export default Profile;
