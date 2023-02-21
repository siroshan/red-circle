import Box from '@mui/material/Box';
import SignUpForm from '../../components/Forms/SignUpForm';

const Index = () => {
  return (
    <Box bgcolor='primary.light'>
      <Box maxWidth={1100} width={1} mx='auto' py={4}>
        <SignUpForm />
      </Box>
    </Box>
  );
};

export default Index;
