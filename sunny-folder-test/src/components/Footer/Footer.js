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
      <Grid container spacing={3} columns={13} sx={{
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '2em',
        paddingBottom: '2em',
      }}>
        <Grid item xs={4}>
          <img src={Logo} alt="pawprint" />
          <Typography>Ready. Pet. Go!</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase'
            }}
          >
            About Ready. Pet. Go!
          </Typography>
          <Typography variant="subtitle1" marginLeft={'3px'}>Meet the Team</Typography>
          <Typography variant="subtitle1" marginLeft={'3px'}>Contributions</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase'
            }}
          >
            Contact
          </Typography>
          <Typography variant="subtitle1" marginLeft={'3px'}>Email</Typography>
          <Typography variant="subtitle1" marginLeft={'3px'}>Careers</Typography>
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
          <Typography variant="subtitle1" marginLeft={'3px'}>GitHub</Typography>
          <Typography variant="subtitle1" marginLeft={'3px'}>Contributions</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer;