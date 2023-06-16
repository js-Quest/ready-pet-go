import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Logo from '../../images/logo.png';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
import { useLocation } from "react-router-dom";
import Link from '@mui/material/Link';
// import Kitten from '../../images/cat2-small.png';
import './style.css'

function Footer() {
  const { pathname } = useLocation();
  if (pathname === "/firebase") return null;

  return (
    <Container maxWidth='100'
      sx={{
        display: 'flex',
        backgroundColor: '#138086',
        marginTop: '2em',
      }}
    >
      <Grid container spacing={2} columns={14} sx={{
        width: '98%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '1.6em',
        paddingBottom: '1.6em',
      }}>

        <Grid item xs={2}>
          <img src={Logo} alt="pawprint" />
          <Typography>Ready. Pet. Go!</Typography>
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={3}>
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase',
              '@media (max-width: 960px)': {
                display: 'none', // Hide the h6 on medium+ screens
              },
            }}
          >
            About Ready. Pet. Go!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase',
              '@media (min-width: 961px)': {
                display: 'none', // Hide the h6 on xs and sm screens
              },
            }}
          >
            About
          </Typography>
          <Link
            className="footLink"
            variant="subtitle1"
            marginLeft={'8px'}
            href="/about"
            >
            Meet the Team
          </Link>
          <Typography variant="subtitle1" marginLeft={'8px'}>Contributions</Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase'
            }}
          >
            Contact
          </Typography>
          <Typography variant="subtitle1" marginLeft={'8px'}>Email</Typography>
          <Typography variant="subtitle1" marginLeft={'8px'}>Careers</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase'
            }}
          >
            Learn More
          </Typography>
          <Typography variant="subtitle1" marginLeft={'8px'}>GitHub</Typography>
          <Typography variant="subtitle1" marginLeft={'8px'}>Contributions</Typography>
        </Grid>

        <Grid item xs={3} sx={{
          justifyContent: 'center',
          alignItems: 'end'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '3px dashed #EEB462',
            borderRadius: '10px',
            padding: '0.6em',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Typography sx={{ fontSize: '28px', color: '#000', marginBottom: '0.4em' }}>Stay in touch!</Typography>
            <div>
              <GitHubIcon sx={{ fontSize: '32px', marginRight: '12px' }} />
              <EmailIcon sx={{ fontSize: '32px', marginRight: '12px' }} />
              <HelpIcon sx={{ fontSize: '32px' }} />
            </div>

          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer;