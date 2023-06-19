import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

function ContribPop() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Typography
        aria-describedby={id}
        variant="subtitle1"
        className='footLink'
        onClick={handleClick}
        marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
        sx={{
          fontSize: { xs: '14px', md: '15px', lg: '16px' },
        }}
      >
        Contributing
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>If you really want to contribute, offer us jobs. 👍</Typography>
      </Popover>
    </div>
  );
}

export default ContribPop;