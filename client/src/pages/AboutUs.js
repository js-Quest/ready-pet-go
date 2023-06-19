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
import { Grid, Card, CardActions, CardContent, CardActionArea } from '@mui/material';
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
      <Container maxWidth='100%' sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <Grid container spacing={2} sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2em',
          marginBottom: '2em',
          width: { xs: '100%', lg: '80%' }
        }}>
          <Grid item xs={12} md={6} xl={3.5} sx={{ marginX: 'auto' }}>
            <Card sx={{ width: '350px', height: '475px', marginX: 'auto' }}>
                <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#ee9f80', marginBottom: '1em' }}>
                  Jessica Saddington
                </CardContent>
              <CardActionArea onClick={() => window.location.href = '/profiles/Jess'}>
                <Box className='card-box'>
                  <img style={styles.img} className='portrait-box' src={jess}></img>
                </Box>
                <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px', paddingBottom: '0' }}>
                  Restaurateur turned Web Dev. <br></br> Make results happen.
                </CardContent>
              </CardActionArea>
                <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                  <IconButton size='large' href='https://github.com/js-Quest'>
                    <GitHubIcon sx={{ height: 38, width: 38 }} />
                  </IconButton>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ marginX: 'auto' }}>
            <Card sx={{ width: '350px', height: '475px', marginX: 'auto' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#EEB462', marginBottom: '1em' }}>
                Leah Krumholz
              </CardContent>
              <CardActionArea onClick={() => window.location.href = '/profiles/Leah'}>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={Leah}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px', paddingBottom: '0' }}>
                Passionate editor venturing into software development!
              </CardContent>
              </CardActionArea>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '0.9em' }}>
                <IconButton size='large' href='https://github.com/lkrum'>
                  <GitHubIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ marginX: 'auto' }}>
            <Card sx={{ width: '350px', height: '475px', marginX: 'auto' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#534666', marginBottom: '1em' }}>
                Sunny Ovson
              </CardContent>
              <CardActionArea onClick={() => window.location.href = '/profiles/Sunny'}>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={Sunny}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px', paddingBottom: '0' }}>
                Biz industry survivor & closet-crafter <br></br>➔ UX/UI Dev Nerd
              </CardContent>
              </CardActionArea>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '0.4em' }}>
                <IconButton size='large' href='https://github.com/SunnyOhK'>
                  <GitHubIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ marginX: 'auto' }}>
            <Card sx={{ width: '350px', height: '475px', marginX: 'auto' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#CD7672', marginBottom: '1em' }}>
                Emma Carr
              </CardContent>
              <CardActionArea onClick={() => window.location.href = '/profiles/Emma'}>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={Emma}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px', paddingBottom: '0' }}>
                Canva, <br></br> please hire me.
              </CardContent>
              </CardActionArea>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'flex-end', marginTop: '0.9em' }}>
                <IconButton size='large' href='https://github.com/emcarr99'>
                  <GitHubIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ marginX: 'auto' }}>
            <Card sx={{ width: '350px', height: '475px', marginX: 'auto' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#138086', marginBottom: '1em' }}>
                Ki Sar
              </CardContent>
              <CardActionArea onClick={() => window.location.href = '/profiles/Ki'}>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={ki}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px', paddingBottom: '0' }}>
                All-time Hero. <br></br> Full-time Legend.<br></br>
              </CardContent>
              </CardActionArea>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '2em', height: '3em' }}>
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
