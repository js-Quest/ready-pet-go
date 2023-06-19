import React from 'react'
import { Box, Container } from '@mui/material'
import jess from '../images/jsportrait.png'
import Leah from '../images/LeahProfilePic.png'
import Sunny from '../images/Sunny.png'
import Emma from '../images/Emma.png'
import ki from '../images/kiProfilePic2.JPEG'
import placeholderImg from '../images/placeholderProfile.png';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import ScrollToTop from '../components/ScrollTop';
import CatNap from '../images/catNap.png';
import { Grid, Card, CardActions, CardContent } from '@mui/material';
import Button from '@mui/material/Button';


const styles = {
  img: {
    width: '190px',
    height: 'auto',
  }
}

export default function AboutUs() {
  return (
    <ScrollToTop>
      <Container maxWidth='100vw' sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '20px',
      }}
        >
        <Grid container spacing={2} sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '2em',
          marginBottom: '2em',
          width: {xs:'100%', xl:'86%'}
        }}>
          <Grid item xs={12} md={6} xl={3.5} sx={{ justifyContent: 'center' }}>
            <Card sx={{ width: '350px', height: '485px' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#ee9f80', marginBottom: '1em' }}>
              Jessica Saddington
              </CardContent>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={jess}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px', paddingBottom: '0' }}>
                Restaurateur turned Web Dev. <br></br> Make results happen.
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                <IconButton size='large' href='https://github.com/js-Quest'>
                  <GitHubIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ justifyContent: 'center' }}>
            <Card sx={{ width: '350px', height: '485px' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#EEB462', marginBottom: '1em' }}>
              Leah Krumholz
              </CardContent>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={Leah}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px', paddingBottom: '0' }}>
                Passionate editor venturing into software development! 
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                <IconButton size='large' href='https://github.com/lkrum'>
                  <GitHubIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ justifyContent: 'center' }}>
            <Card sx={{ width: '350px', height: '485px' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#534666', marginBottom: '1em' }}>
              Sunny Ovson
              </CardContent>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={Sunny}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px', paddingBottom: '0' }}>
                Biz industry survivor & closet-crafter <br></br>🡫<br></br> UX/UI Dev Nerd.
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                <IconButton size='large' href='https://github.com/SunnyOhK'>
                  <GitHubIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ justifyContent: 'center' }}>
            <Card sx={{ width: '350px', height: '485px' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#CD7672', marginBottom: '1em' }}>
              Emma Carr
              </CardContent>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={Emma}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px', paddingBottom: '0' }}>
                ~ ~ ~
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                <IconButton size='large' href='https://github.com/emcarr99'>
                  <GitHubIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ justifyContent: 'center' }}>
            <Card sx={{ width: '350px', height: '485px' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#138086', marginBottom: '1em' }}>
              Ki Sar
              </CardContent>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={ki}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px', paddingBottom: '0' }}>
                All-time Hero. <br></br> Full-time Legend.
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                <IconButton size='large' href='https://github.com/rxs291'>
                  <GitHubIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      
      <div className='catNap'>
        <img
          src={CatNap}
          alt='nap'
          className='catImgNap'
        />
      </div>
    </ScrollToTop>
  )
}
