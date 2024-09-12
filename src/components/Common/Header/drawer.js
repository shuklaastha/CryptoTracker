import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';     
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
export default function AnchorTemporaryDrawer() {
  const [open, setOpen]= React.useState(false);
  return (
    <div>
          <IconButton onClick={() =>setOpen(true)}>
            <MenuOpenIcon className='link' />
          </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={() => setOpen(false)}
          >
            <div className='drawer-div'>
            <Link to='/'>
                <p className='link'>Home</p>
            </Link>
            <Link to='/watchlist'>
                <p className='link'>Watchlist</p>
            </Link>
            <Link to='/dashboard'>
                <p className='link'>Dashboard</p>
            </Link> 
            </div>
          </Drawer>
    </div>
  );
}


