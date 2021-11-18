import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from './avatar';
import Link from '@mui/material/Link';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function ButtonAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
            <Button style = {{margin: '10px'}}variant="contained" {...bindTrigger(popupState)}>
            Royalty Free Music 
            </Button>
          <Button variant="contained" {...bindTrigger(popupState)}>
          Sound Effects
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
          <Button  color="inherit">FAQs</Button>
          
          <Link href="/contact" underline="none" color="inherit" >
          <Button color="inherit">Contact</Button>
          </Link>
          </Typography>
          <Button  {...bindTrigger(popupState)} >
            <Avatar></Avatar>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Royalty Free Music</MenuItem>
            <MenuItem onClick={popupState.close}>Sound Effects</MenuItem>
            <MenuItem onClick={popupState.close}>Login</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
          
         
           
        </Toolbar>
      </AppBar>
    </Box>

    </>
  );
}