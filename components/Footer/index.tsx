import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Logo from '../Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box width={1} bgcolor='primary.main' px={2} py={6}>
      <Box width={1} maxWidth={1280} mx='auto'>
        <Grid
          container
          direction={{ md: 'row', xs: 'column' }}
          alignItems={{ md: 'flex-start', xs: 'center' }}
          justifyContent='space-between'
          spacing={2}
        >
          <Grid item md={4} xs={12}>
            <Logo width={200} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Stack
              width={1}
              direction='column'
              alignItems={{ xs: 'center', md: 'flex-start' }}
              spacing={3}
            >
              <Typography variant='h6' color='common.black'>
                Links
              </Typography>
              <Stack
                direction='column'
                alignItems={{ xs: 'center', md: 'flex-start' }}
                spacing={1}
              >
                <Link href='/home'>
                  <Typography>Home</Typography>
                </Link>
                <Link href='/wines'>
                  <Typography>Wines</Typography>
                </Link>
                <Link href='/our-story'>
                  <Typography>Our Story</Typography>
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={3} xs={12}>
            <Stack
              direction='column'
              spacing={3}
              alignItems={{ xs: 'center', md: 'flex-start' }}
            >
              <Typography variant='h6' color='common.black'>
                Contact Us
              </Typography>
              <Stack
                direction='column'
                spacing={1}
                alignItems={{ xs: 'center', md: 'flex-start' }}
              >
                <Link href='/home'>
                  <Typography>Home</Typography>
                </Link>
                <Link href='/wines'>
                  <Typography>Wines</Typography>
                </Link>
                <Link href='/our-story'>
                  <Typography>Our Story</Typography>
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
