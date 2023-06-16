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
        <Typography variant='h3' sx={{ backgroundColor: '#ffffff9f', width: '14em', textAlign: 'center', color: '#36393F', fontSize: '58px', paddingTop: '5px', paddingBottom: '5px' }}>Welcome Fellow Pet People! </Typography>
      </Box>

        <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', justifyContent: 'center', alignItems: 'center', paddingBottom: '1em' }}>
        <Typography variant='h5' sx={{ width: '70%', textAlign: 'center', color: '#36393F', paddingTop: '5px', paddingBottom: '5px', fontSize: '26px' }}>At Ready, Pet, Go!, our mission is simple: <i>to be a trusted companion for pet owners</i>. <br></br>We provide comprehensive guidance and support to prospective, new, and long-time pet parents.</Typography>
        </div>

      <Box sx={{
        flexGrow: 1,
        marginTop: '2.6em',
        maxWidth: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <Grid container spacing={2.5}
          justifyContent='space-evenly'
          alignItems='center'>

          <Grid item xs={3.2} textAlign='center'
            sx={{
              border: '1px #36393F62 solid',
              borderRadius: '12px',
              paddingLeft: '0px !important',
            }}>
            <Typography variant='h5' sx={{ marginBottom: '0.4em' }}>
              <img src={Guide} alt='Guide' style={{ textAlign: 'center' }} />
            </Typography>
            <Typography variant='h5' sx={{ color: '#36393F', fontSize: '30px' }}>Guidance</Typography>
            <Typography sx={{ color: '#36393F', fontSize: '22px', paddingTop: '14px', marginBottom: '1.5em', paddingLeft: '12px', paddingRight: '12px', }}>We understand that welcoming a new pet into your life is an exciting and sometimes overwhelming experience. <br></br>
              • <br></br>
              • <br></br>
              • <br></br>
              </Typography>
          </Grid>

          <Grid item xs={3.2} textAlign='center'
            sx={{
              border: '1px #36393F62 solid',
              borderRadius: '12px',
              paddingLeft: '0px !important',
            }}>
            <Typography variant='h5' sx={{ marginBottom: '0.4em' }}>
              <img src={Support} alt='Support' />
            </Typography>
            <Typography variant='h5' sx={{ color: '#36393F', fontSize: '30px' }}>Support</Typography>
            <Typography sx={{ color: '#36393F', fontSize: '22px', paddingTop: '14px', marginBottom: '1.5em', paddingLeft: '12px', paddingRight: '12px', }}>Even the most experienced pet owners face challenges along their journey. <br></br>
              • <br></br>
              • <br></br>
              • <br></br>
              • <br></br>
            </Typography>
          </Grid>

          <Grid item xs={3.2} textAlign='center'
            sx={{
              border: '1px #36393F62 solid',
              borderRadius: '12px',
              paddingLeft: '0px !important',
            }}>
            <Typography variant='h5' sx={{ marginBottom: '0.4em' }}>
              <img src={Community} alt='Community' />
            </Typography>
            <Typography variant='h5' sx={{ color: '#36393F', fontSize: '30px' }}>Community</Typography>
            <Typography sx={{ color: '#36393F', fontSize: '22px', paddingTop: '14px', marginBottom: '1.5em', paddingLeft: '12px', paddingRight: '12px', }}>We foster connections and provide a safe space where pet owners can come together to share their stories, seek advice, and celebrate the unconditional love that pets bring to our lives. <br></br>
              • <br></br>
              </Typography>
          </Grid>
        </Grid>
      </Box>

<Box sx={{ marginTop: '2.8em', width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
  <Typography><FavoriteIcon sx={{fontSize: '60px'}}/></Typography>
  <br></br>
        <Typography><HealthAndSafetyIcon sx={{ fontSize: '60px' }} /></Typography>
  <br></br>
        <Typography><CardGiftcardIcon sx={{ fontSize: '60px' }} /></Typography>
  <br></br>
  
</Box>
      <div class="col-9 container-fluid mt-5 border border-5 rounded">
        <p>
          We are dedicated to fostering a harmonious relationship between pets and their human companions by offering a wealth of reliable information, resources, and a vibrant community.
        </p>


        <h3>Guiding New Pet Owners:</h3>
        <p>
          Our goal is to empower new pet owners with the knowledge they need to confidently navigate every aspect of pet care. Through our user-friendly platform, we provide expert advice on choosing the right pet, training techniques, nutrition, grooming, and healthcare. We strive to be the go-to source that new pet owners can rely on, ensuring they have all the tools to create a loving and enriching environment for their furry friends.
        </p>

        <h3>Supporting Experienced Pet Owners:</h3>
        <p> Even the most experienced pet owners face challenges along their journey. We believe in continuously nurturing the bond between pets and their devoted owners. Our platform serves as a trusted companion for seasoned pet enthusiasts, offering advanced insights, innovative training methods, and the latest trends in pet care. We go beyond the basics, providing a hub where experienced pet owners can find solutions to complex issues, share their experiences, and connect with like-minded individuals who truly understand the joys and trials of pet ownership.</p>

        <h3>Building a Community:</h3>
        <p>
          At the heart of Ready-Pet-Go!, we cultivate a vibrant community of passionate pet lovers. We foster connections and provide a safe space where pet owners can come together to share their stories, seek advice, and celebrate the unconditional love that pets bring to our lives. Our community-driven platform encourages engagement, knowledge sharing, and a sense of belonging. We believe that by connecting pet owners across the globe, we can collectively enhance the well-being of our beloved animal companions.</p>

        <h3>Empathy, Expertise, and Excellence:</h3>
        <p>In everything we do, we prioritize empathy, expertise, and excellence. We understand the deep emotional connection between pets and their owners, and we approach every interaction and piece of content with compassion and understanding. Our team of dedicated experts ensures the accuracy and relevance of the information we provide, staying at the forefront of advancements in pet care. We strive for excellence in all aspects of our platform, delivering an exceptional user experience and valuable resources that inspire pet owners to continually grow and learn.

          With Ready-Pet-Go!, you and your pet are never alone on this incredible journey. Together, let's build a stronger bond, provide the best care, and create a world where pets thrive and owners flourish.
        </p>
      </div>
      <br />
      <br />
      <div >
        <h1>HealthCare</h1>
        <p>pet healthcare is crucial for maintaining pets' overall well-being, preventing diseases, detecting health issues early, controlling parasites, promoting longevity, and addressing behavioral concerns. It allows pet owners to provide their furry companions with a happy, healthy, and fulfilling life.</p>
        <p>
          <Link
            className="text-light"
            to={`/healthcare`}
          > <br />
            <span style={{ fontSize: '1rem' }}>
              Please see our additional information here!
            </span>
          </Link>
        </p>
      </div>
      <br />
      <br />

      <div>
        <h1>Recommend Starting Accessories</h1>
        <p>pet accessories contribute to the well-being, safety, and enjoyment of pets. They provide comfort, promote health and hygiene, facilitate identification, offer enrichment and exercise opportunities, assist with travel, and allow for personalization. By investing in appropriate and quality pet accessories, owners can enhance their pets' lives and strengthen the bond between humans and animals.</p>
        <p>
          <Link
            className="text-light"
            to={`/productOnHome`}
          > <br />
            <span style={{ fontSize: '1rem' }}>
              Check out our recommdations!
            </span>
          </Link>
        </p>
      </div>

    </Container>

  )
}
