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

        <Grid item xs={2} sx={{ textAlign: 'center', marginRight: '2em' }}>
          <img src={Logo} alt="pawprint" />
          <Typography variant="h6">Ready, Pet, Go!</Typography>
        </Grid>

        <Grid item xs={1.5}></Grid>

        <Grid item xs={2}>
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase',
              fontSize: { xs: '1rem', md: '1.1rem', lg: '1.25rem' },
            }}
          >
            About
          </Typography>
          <Typography
            variant="subtitle1"
            className="footLink"
            href="/about"
            marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
            sx={{
              fontSize: { xs: '14px', md: '15px', lg: '16px' },
            }}
          >
            Meet the Team
          </Typography>
          <Typography
            variant="subtitle1"
            className="footLink"
            href="/"
            marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
            sx={{
              fontSize: { xs: '14px', md: '15px', lg: '16px' },
            }}
          >
            Contributions
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase',
              fontSize: { xs: '1rem', md: '1.1rem', lg: '1.25rem' },
            }}
          >
            Contact
          </Typography>
          <Typography
            variant="subtitle1"
            className="footLink"
            href="/"
            marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
            sx={{
              fontSize: { xs: '14px', md: '15px', lg: '16px' },
            }}
          >
            Email
          </Typography>
          <Typography
            variant="subtitle1"
            className="footLink"
            href="/"
            marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
            sx={{
              fontSize: { xs: '14px', md: '15px', lg: '16px' },
            }}
          >
            Careers</Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase',
              fontSize: { xs: '1rem', md: '1.1rem', lg: '1.25rem' },
            }}
          >
            Learn More
          </Typography>
          <Typography
            variant="subtitle1"
            className="footLink"
            href="/"
            marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
            sx={{
              fontSize: { xs: '14px', md: '15px', lg: '16px' },
            }}
          >
            GitHub
          </Typography>
          <Typography
            variant="subtitle1"
            className="footLink"
            href="/"
            marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
            sx={{
              fontSize: { xs: '14px', md: '15px', lg: '16px' },
            }}
          >
            Privacy Policy
          </Typography>
        </Grid>

        <Grid item xs={1.5}></Grid>

        <Grid item xs={2} sx={{
          justifyContent: 'center',
          alignItems: 'end'
        }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              border: '3px dashed #EEB462',
              borderRadius: '10px',
              padding: '0.6em',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              width: { xs: '100%' }
            }}>
            <Typography sx={{ 
              fontSize: { xs: '16px', md: '20px', lg: '24px'}, 
              color: '#000', 
              marginBottom: '0.4em' 
              }}
              >
                Stay in touch!
                </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '6px' }}>
              <GitHubIcon sx={{ 
                fontSize: { xs: '18px', md: '24px', lg: '30px' } 
                }} 
                />
              <EmailIcon sx={{ 
                fontSize: { xs: '18px', md: '24px', lg: '30px' }
                }} 
                />
              <HelpIcon sx={{ 
                fontSize: { xs: '18px', md: '24px', lg: '30px' }
                }} 
                />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer;