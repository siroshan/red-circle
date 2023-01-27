import { Controller, FieldValues, useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { FC, useState } from 'react';
import { AxiosResponse } from 'axios';
import { axiosErrorHandler } from '../../utils/axiosErrorHandler';
import axios from '../../utils/axios';
import { Typography } from '@mui/material';

const SignInForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSingIn = async (data: FieldValues) => {
    console.log('clicked');

    setIsLoading(true);
    try {
      const res: AxiosResponse = await axios.post('auth/signin', {
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      axiosErrorHandler(err);
    }
    setIsLoading(false);
  };

  return (
    <Box className='signin-wrap'>
      <form onSubmit={handleSubmit(handleSingIn)}>
        <Typography
          variant='h1'
          color='secondary'
          marginBottom={6}
          textAlign='center'
          mt={8}
          mb={4}
        >
          Welcome Back
        </Typography>
        <Box mb={2}>
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'Please enter E-mail.',
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                size='small'
                label='E-mail'
                variant='outlined'
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : null}
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <Controller
            name='password'
            control={control}
            defaultValue=''
            rules={{
              required: 'Please password.',
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                autoComplete={false}
                label='Password'
                type={!showPwd && 'password'}
                size='small'
                variant='outlined'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={() => setShowPwd((s) => !s)}
                      >
                        {showPwd ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(errors.password)}
                helperText={errors.password && errors.password.message}
              />
            )}
          />
        </Box>
        <Box width={1} textAlign='center' mb={8} mt={4}>
          <Button type='submit' variant='contained'>
            Sign In
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignInForm;
