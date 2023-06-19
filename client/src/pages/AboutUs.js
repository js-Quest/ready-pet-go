import React from 'react'
import { Box, Container } from '@mui/material'
import jess from '../images/jsportrait.png'
import Leah from '../images/LeahProfilePic.png'
import Sunny from '../images/Sunny.png'
import Emma from '../images/Emma.png'
import ki from '../images/kiProfilePic2.JPEG'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import ScrollToTop from '../components/ScrollTop';
import CatNap from '../images/catNap.png';
import { Grid, Card, CardActions, CardContent, CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';


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
                <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#ee9f80' }}>
                  Jessica Saddington
                </CardContent>
              <CardActionArea 
                onClick={() => window.location.href = '/profiles/Jess'}
                sx={{ paddingTop: '2em', paddingBottom: '1em' }}>
                <Box className='card-box'>
                  <img style={styles.img} className='portrait-box' src={jess}></img>
                </Box>
                <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px' }}>
                  Restaurateur turned Web Dev. <br></br> Make results happen.
                </CardContent>
              </CardActionArea>
              <Divider variant="middle" sx={{ marginBottom: '12px', marginTop: '-8px'}}/>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-1.2em' }}>
                  <IconButton size='large' href='https://github.com/js-Quest'>
                    <GitHubIcon sx={{ height: 38, width: 38 }} />
                  </IconButton>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ marginX: 'auto' }}>
            <Card sx={{ width: '350px', height: '475px', marginX: 'auto' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#EEB462' }}>
                Leah Krumholz
              </CardContent>
              <CardActionArea onClick={() => window.location.href = '/profiles/Leah'}
                sx={{ paddingTop: '2em', paddingBottom: '1em' }}>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={Leah}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px' }}>
                Passionate editor venturing into software development!
              </CardContent>
              </CardActionArea>
              <Divider variant="middle" sx={{ marginBottom: '-8px', marginTop: '8px' }} />
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-0.2em' }}>
                <IconButton size='large' href='https://github.com/lkrum'>
                  <GitHubIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ marginX: 'auto' }}>
            <Card sx={{ width: '350px', height: '475px', marginX: 'auto' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#534666' }}>
                Sunny Ovson
              </CardContent>
              <CardActionArea onClick={() => window.location.href = '/profiles/Sunny'}
                sx={{ paddingTop: '2em', paddingBottom: '1em' }}>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={Sunny}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px' }}>
                Biz industry survivor & closet-crafter <br></br>➔ UX/UI Dev Nerd
              </CardContent>
              </CardActionArea>
              <Divider variant="middle" sx={{ marginBottom: '3px', marginTop: '0px' }} />
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-0.8em' }}>
                <IconButton size='large' href='https://github.com/SunnyOhK'>
                  <GitHubIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ marginX: 'auto' }}>
            <Card sx={{ width: '350px', height: '475px', marginX: 'auto' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#CD7672' }}>
                Emma Carr
              </CardContent>
              <CardActionArea onClick={() => window.location.href = '/profiles/Emma'}
                sx={{ paddingTop: '2em', paddingBottom: '1em' }}>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={Emma}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px' }}>
                Canva, <br></br> please hire me.
              </CardContent>
              </CardActionArea>
              <Divider variant="middle" sx={{ marginBottom: '-9px', marginTop: '9px' }} />
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'flex-end', marginTop: '-0.2em' }}>
                <IconButton size='large' href='https://github.com/emcarr99'>
                  <GitHubIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} xl={3.5} sx={{ marginX: 'auto' }}>
            <Card sx={{ width: '350px', height: '475px', marginX: 'auto' }}>
              <CardContent component='h2' sx={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em', backgroundColor: '#138086' }}>
                Ki Sar
              </CardContent>
              <CardActionArea onClick={() => window.location.href = '/profiles/Ki'}
                sx={{ paddingTop: '2em', paddingBottom: '1em' }}>
              <Box className='card-box'>
                <img style={styles.img} className='portrait-box' src={ki}></img>
              </Box>
              <CardContent sx={{ fontSize: '19px', textAlign: 'center', lineHeight: '28px' }}>
                All-time Hero. <br></br> Full-time Legend.<br></br>
              </CardContent>
              </CardActionArea>
              <Divider variant="middle" sx={{ marginBottom: '-24px', marginTop: '27px' }} />
              <CardActions sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '1em' }}>
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
