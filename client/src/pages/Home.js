import React from 'react'
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import HeroImg from '../components/Hero/Hero';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Guide from '../images/guide.png';
import Community from '../images/community.png';
import Support from '../images/support.png';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PetsIcon from '@mui/icons-material/Pets';
import Divider from '@mui/material/Divider';
import HealthPet from '../images/health.png';

export default function Home() {
  return (
    <Container maxWidth='100'>
      <HeroImg />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-1.8em',
        paddingBottom: '1em'
      }}>
        <Typography
          variant='h3'
          sx={{
            backgroundColor: '#ffffff9f',
            width: '14em', textAlign: 'center',
            color: '#36393F',
            fontSize: { xs: '38px', md: '48px', lg: '58px' },
            paddingTop: '5px',
            paddingBottom: '5px'
          }}
        >
          Welcome Fellow Pet People!
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '1em'
      }}
      >
        <Typography
          variant='h5'
          sx={{
            width: {xs: '100%', md: '70%'},
            textAlign: 'center',
            color: '#36393F',
            paddingTop: '5px',
            paddingBottom: '5px',
            fontSize: { xs: '20px', md: '23px', lg: '26px' },
          }}
        >
          At Ready, Pet, Go!, our mission is simple: <i>to be a trusted companion for pet owners</i>. <br></br>We provide comprehensive guidance and support to prospective, new, and long-time pet parents.
        </Typography>
      </Box>

      <Box sx={{
        flexGrow: 1,
        marginTop: '2.6em',
        maxWidth: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <Grid container spacing={1}
          justifyContent='space-evenly'
          alignItems='flex-start'>
          <Card sx={{ 
            maxWidth: { xs: '98%', md: '60%', lg: 360 } 
            }}
            >
            <CardMedia
              component="img"
              height="auto"
              image={Guide}
              alt="guidance"
              sx={{
                paddingLeft: '2em',
                paddingRight: '2em',
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  color: '#36393F',
                  fontSize: '24px',
                  textAlign: 'center'
                }}
              >
                Guidance
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We understand that welcoming a new pet into your family is an exciting and sometimes overwhelming experience. We’re here to give you the tools you need to navigate every aspect of your pet’s care:
                <br></br>
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Choosing the right pet
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Training techniques & resources
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Nutrition, grooming, & health care tips
                <br></br>
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ 
            maxWidth: { xs: '98%', md: '60%', lg: 360 } 
            }}
            >
            <CardMedia
              component="img"
              height="auto"
              image={Support}
              alt="support"
              sx={{
                paddingLeft: '2em',
                paddingRight: '2em',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#36393F', fontSize: '24px', textAlign: 'center' }}>
                Support
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Every pet has a unique personality and lifestyle, and how you train and care for one pet might not work for another. That’s why we offer innovative solutions:
                <br></br>
                <br></br>
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Individualized training methods
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Meetups & community support
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Health & lifestyle maintenance tips
                <br></br>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ 
            maxWidth: { xs: '98%', md: '60%', lg: 360 } 
            }}
            >
            <CardMedia
              component="img"
              height="auto"
              image={Community}
              alt="community"
              sx={{
                paddingLeft: '2em',
                paddingRight: '2em',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#36393F', fontSize: '24px', textAlign: 'center' }}>
                Community
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Community is the heart of what we do. We foster a safe space where pet owners can come together to enhance the well-being of our beloved animal companions:
                <br></br>
                <br></br>
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Share your stories
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Seek advice from other pet owners
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Learn about local events & resources
                <br></br>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Box>

      <Box sx={{ marginTop: '2.8em', width: {xs: '100%', md: '80%'}, marginLeft: 'auto', marginRight: 'auto' }}>
        <Card sx={{ display: 'flex', marginBottom: '0.5em' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>
              <FavoriteIcon sx={{ fontSize: '60px', color: '#CD7672', verticalAlign: 'middle' }} />
            </Typography>
            <Typography variant="h5" component="div" sx={{ color: '#36393F', fontSize: '24px', textAlign: 'center', marginLeft: '20px', marginRight: '20px' }}>
              Our Promise
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" color="text.secondary" sx={{ marginLeft: '28px', fontSize: '20px' }}>We encourage compassion & a pet-first mindset. We seek to ensure that our community is a safe, friendly space for all.</Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', marginBottom: '0.5em' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography><HealthAndSafetyIcon sx={{ fontSize: '60px', color: '#EEB462', verticalAlign: 'middle' }} /></Typography>
            <Typography variant="h5" component="div" sx={{ color: '#36393F', fontSize: '24px', textAlign: 'center', marginLeft: '20px', marginRight: '20px' }}>
              Health & Wellness
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" color="text.secondary" sx={{ marginLeft: '28px', fontSize: '20px' }}>Keeping your pet healthy is a crucial part of pet ownership. See our Pet Care Page for resources.</Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', marginBottom: '0.5em' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography><CardGiftcardIcon sx={{ fontSize: '60px', color: '#534666', verticalAlign: 'middle' }} /></Typography>
            <Typography variant="h5" component="div" sx={{ color: '#36393F', fontSize: '24px', textAlign: 'center', marginLeft: '20px', marginRight: '20px' }}>
              Recommended Products
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" color="text.secondary" sx={{ marginLeft: '28px', fontSize: '20px' }}>Not sure where to start? Check out our recommended products for any stage of pet parenthood.</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>

  )
}
