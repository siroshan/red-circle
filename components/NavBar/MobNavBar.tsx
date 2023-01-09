import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import SearchButton from './SearchButton';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import CartIcon from '../Icons/Cart';
import IconButton from '@mui/material/IconButton';
import CustomDrawer from './Drawer';

const MobNavBar = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  
  return (
    <Box width={1} bgcolor='primary.main' position='sticky' top={0} zIndex={100}>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        mx='auto'
      >
        <Logo width={100}/>
        <CustomDrawer/>
      </Stack>
    </Box>
  );
};

export default MobNavBar;
