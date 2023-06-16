import React from 'react'
import { Box, Container } from '@mui/material'
import jess from '../images/jsportrait.png'
import Leah from '../images/LeahProfilePic.png'

const styles = {
  img: {
    width: '190px',
    height: 'auto',
  }
}

export default function AboutUs() {
  return (
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
              Passionate editor venturing into software development.
            </h3>
            <a className='card-link' href="https://github.com/lkrum"><i class="fa-brands fa-square-github"></i></a>
          </Box>
        </Box>
      </Container>
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
            <a className='card-link' href="https://github.com/js-Quest"><i class="fa-brands fa-square-github"></i></a>
          </Box>
        </Box>
      </Container>
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
            <a className='card-link' href="https://github.com/js-Quest"><i class="fa-brands fa-square-github"></i></a>
          </Box>
        </Box>
      </Container>
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
            <a className='card-link' href="https://github.com/js-Quest"><i class="fa-brands fa-square-github"></i></a>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}
