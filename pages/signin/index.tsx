import Box from '@mui/material/Box';
import SignInForm from '../../components/Forms/SignInForm';

const Index = () => {
  return (
    <Box bgcolor='primary.light'>
      <Box maxWidth={1100} width={1} mx='auto' py={4}>
        <SignInForm />
      </Box>
    </Box>
  );
};

export default Index;
