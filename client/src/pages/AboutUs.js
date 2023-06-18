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



const styles = {
  img: {
    width: '190px',
    height: 'auto',
  }
}

export default function AboutUs() {
  return (
    <ScrollToTop> 
    <Container sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <Container className='card-container'>
        <h2 className='card-head'>Jessica Saddington</h2>
        <Box className='card-box'>
          <Box>
            <img style={styles.img} className='portrait-box' src={jess}></img>
          </Box>
          <Box className='text-box'>
            <h3 className='card-text'>
              Restaurateur turned Web Dev.  Make results happen. 
            </h3>
            <GitHubIcon sx={{
              fontSize: { xs: '18px', md: '24px', lg: '30px' }
            }}
            />
            <a className='card-link' href="https://github.com/js-Quest"><i class="fa-brands fa-square-github"></i></a>
          </Box>
        </Box>
      </Container>
      <Container className='card-container'>
        <h2 className='card-head'>Leah Krumholz</h2>
        <Box className='card-box'>
          <Box>
            <img style={styles.img} className='portrait-box' src={Leah}></img>

          </Box>
          <Box className='text-box'>
            <h3 className='card-text'>
              Passionate editor venturing into software development!
            </h3>
            <a className='card-link' href="https://github.com/lkrum"><i class="fa-brands fa-square-github"></i></a>
          </Box>
        </Box>
      </Container>
      <Container className='card-container'>
        <h2 className='card-head'>Sunny Ovson</h2>
        <Box className='card-box'>
          <Box>
            <img style={styles.img} className='portrait-box' src={Sunny}></img>

          </Box>
          <Box className='text-box'>
            <h3 className='card-text'>
              I'll think of something creative...
            </h3>
            <a className='card-link' href="https://github.com/js-Quest"><i class="fa-brands fa-square-github"></i></a>
          </Box>
        </Box>
      </Container>
 
      <Container className='card-container'>
        <h2 className='card-head'>Emma Carr</h2>
        <Box className='card-box'>
          <Box>
            <img style={styles.img} className='portrait-box' src={Emma}></img>

          </Box>
          <Box className='text-box'>
            <h3 className='card-text'>
              PLEASE COMPLETE FOR YOURSELF! 
            </h3>
            <a className='card-link' href="https://github.com/emcarr99"><i class="fa-brands fa-square-github"></i></a>
          </Box>
        </Box>
      </Container>
      <Container className='card-container'>
        <h2 className='card-head'>Ki Sar</h2>
        <Box className='card-box'>
          <Box>
            <img style={styles.img} className='portrait-box' src={ki}></img>

          </Box>
          <Box className='text-box'>
            <h3 className='card-text'>
            All-time Hero. Full-time Legend.
            </h3>
            <a className='card-link' href="https://github.com/rxs291"><i class="fa-brands fa-square-github"></i></a>
          </Box>
        </Box>
      </Container>
    </Container>
    </ScrollToTop>
  )
}
