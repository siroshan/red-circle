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
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import TextField from '@mui/material/TextField';
import CartIcon from '../Icons/Cart';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';

const CustomDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const navLink = (href: string, label: string) => (
    <Link href={href}>{label}</Link>
  );
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
        <Box className='bg-color-cream' height={1}>
          <List>
            <ListItem>
              <TextField
                className='search'
                size='small'
                placeholder='Search Wines'
                color='secondary'
              />
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingBagTwoToneIcon
                    className='color-black'
                    fontSize='large'
                  />
                </ListItemIcon>
                <ListItemText primary={navLink('/cart', 'Cart')} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <WineBarIcon className='color-black' fontSize='large' />
                </ListItemIcon>
                <ListItemText primary={navLink('/wines', 'Wines')} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <AutoStoriesIcon className='color-black' fontSize='large' />
                </ListItemIcon>
                <ListItemText primary={navLink('/our-story', 'Our Story')} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
