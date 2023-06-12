import React, { useContext } from "react";
import Container from '@mui/material/Container';
import { ThemeContext } from '../../providers/ThemeProvider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Logo from '../../images/logo.png';
import './style.css'

function Footer() {
  const { colors } = useContext(ThemeContext);

  return (
    <Container maxWidth='100'
      sx={{
        display: 'flex',
        backgroundColor: colors.primary,
        width: '100vw',
        marginTop: '20px',
      }}
    >
      <Grid container spacing={2} columns={13} sx={{
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '2em',
        paddingBottom: '2em',
      }}>

        <Grid item xs={2}>
          <img src={Logo} alt="pawprint" />
          <Typography>Ready. Pet. Go!</Typography>
        </Grid>

        <Grid item xs={2}></Grid>

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
          <Typography variant="subtitle1" marginLeft={'8px'}>Meet the Team</Typography>
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
      </Grid>
    </Container>
  )
}

export default Footer;