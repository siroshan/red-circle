import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ViewListTwoToneIcon from '@mui/icons-material/ViewListTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useState } from 'react';
import axios from '../../../utils/axios';
import { axiosErrorHandler } from '../../../utils/axiosErrorHandler';
import { useRouter } from 'next/router';

const ProfileMenu = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    axios
      .post('auth/signout')
      .then((res) => {
        router.replace('/');
      })
      .catch((err) => {
        axiosErrorHandler(err);
      });
  };

  return (
    <div>
      <Box borderRadius='50%' border={2} borderColor='primary.light'>
        <IconButton
          aria-label='more'
          id='profile-button'
          aria-controls={open ? 'profile-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          onClick={handleClick}
        >
          <Person2TwoToneIcon className='color-black' fontSize='large' />
        </IconButton>
      </Box>
      <Menu
        id='profile-menu'
        MenuListProps={{
          'aria-labelledby': 'profile-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className='profile-menu'
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircleTwoToneIcon className='color-black' />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ViewListTwoToneIcon className='color-black' />
          </ListItemIcon>
          Orders
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <LogoutTwoToneIcon className='color-black' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
