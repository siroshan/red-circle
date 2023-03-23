import React, { useState, FC } from 'react';
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
import { axiosErrorHandler } from '../../../utils/axiosErrorHandler';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '../TabPanel';

function a11yProps(index: number) {
  return {
    id: `drawer-tab-${index}`,
    'aria-controls': `drawer-tabpanel-${index}`,
  };
}

const CustomDrawer = () => {
  const router = useRouter();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [tabValue, setTabValue] = useState<number>(0);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleLogOut = () => {
    axios
      .post('/auth/signout')
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
        <MenuIcon color='secondary' fontSize='large'/>
      </IconButton>
      <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer}>
        <Box bgcolor='primary.light' height={1}>
          <Tabs
            value={tabValue}
            onChange={onTabChange}
            aria-label='drawer tabs example'
          >
            <Tab label='Menu' {...a11yProps(0)} />
            <Tab label='Profile' {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            <List>
              <ListItem>
                <TextField
                  className='search'
                  size='small'
                  placeholder='Search Wines'
                  color='secondary'
                />
              </ListItem>
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
                      <AutoStoriesIcon
                        className='color-black'
                        fontSize='large'
                      />
                    </ListItemIcon>
                    <ListItemText primary='Our Story' />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <List>
              <Link href='/profile'>
                <ListItem>
                  <ListItemButton onClick={toggleDrawer}>
                    <ListItemIcon>
                      <AccountCircleTwoToneIcon
                        className='color-black'
                        fontSize='large'
                      />
                    </ListItemIcon>
                    <ListItemText primary='Profile' />
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
                    <ListItemText primary='Orders' />
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
          </TabPanel>
        </Box>
        <Box className='primary.light' height={1}></Box>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
