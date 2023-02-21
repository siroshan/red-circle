import React, { useState } from 'react';
import Box from '@mui/system/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import WineBarIcon from '@mui/icons-material/WineBarTwoTone';
import AutoStoriesIcon from '@mui/icons-material/AutoStoriesTwoTone';
import ViewListTwoToneIcon from '@mui/icons-material/ViewListTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import axios from 'axios';
import { useRouter } from 'next/router';

const CustomDrawer = () => {
  const router = useRouter();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleLogOut = () => {
    axios
      .post('/signout')
      .then((res) => {
        router.replace('/');
        toggleDrawer();
      })
      .catch((err) => {
        axiosErrorHandler(err);
      });
  };

  return (
    <>
      <IconButton
        aria-controls='account-menu'
        aria-haspopup='true'
        aria-label='account menu'
        onClick={toggleDrawer}
      >
        <MenuIcon color='secondary' />
      </IconButton>
      <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer}>
        <Box className='primary.light' height={1}>
          <List>
            <ListItem>
              <TextField
                className='search'
                size='small'
                placeholder='Search Wines'
                color='secondary'
              />
            </ListItem>
            <Link href='/cart'>
              <ListItem>
                <ListItemButton onClick={toggleDrawer}>
                  <ListItemIcon>
                    <ShoppingBagTwoToneIcon
                      className='color-black'
                      fontSize='large'
                    />
                  </ListItemIcon>
                  <ListItemText primary='Cart' />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href='/wines'>
              <ListItem>
                <ListItemButton onClick={toggleDrawer}>
                  <ListItemIcon>
                    <WineBarIcon className='color-black' fontSize='large' />
                  </ListItemIcon>
                  <ListItemText primary='Wines' />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href='/our-story'>
              <ListItem>
                <ListItemButton onClick={toggleDrawer}>
                  <ListItemIcon>
                    <AutoStoriesIcon className='color-black' fontSize='large' />
                  </ListItemIcon>
                  <ListItemText primary='Our Story' />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <Link href='/profile'>
              <ListItem>
                <ListItemButton onClick={toggleDrawer}>
                  <ListItemIcon>
                    <AccountCircleTwoToneIcon
                      className='color-black'
                      fontSize='large'
                    />
                  </ListItemIcon>
                  <ListItemText primary='Our Story' />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href='/orders'>
              <ListItem>
                <ListItemButton onClick={toggleDrawer}>
                  <ListItemIcon>
                    <ViewListTwoToneIcon
                      className='color-black'
                      fontSize='large'
                    />
                  </ListItemIcon>
                  <ListItemText primary='Our Story' />
                </ListItemButton>
              </ListItem>
            </Link>
            <ListItem>
              <ListItemButton onClick={handleLogOut}>
                <ListItemIcon>
                  <LogoutTwoToneIcon className='color-black' />
                </ListItemIcon>
                Logout
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
