import React, { useState } from "react";
import { Modal, TextField, IconButton, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Logo from '../../images/logo.png';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import Kitten from '../../images/cat2-small.png';
import './style.css';
import CareersPop from "./Popper";
import ContribPop from "./ContribPop";

function Footer() {
  const [openModal, setOpenModal] = useState(false);
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [textInput3, setTextInput3] = useState("");

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleTextInput1Change = (event) => {
    setTextInput1(event.target.value);
  };

  const handleTextInput2Change = (event) => {
    setTextInput2(event.target.value);
  };

  const handleTextInput3Change = (event) => {
    setTextInput3(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission or any other logic here
    console.log("Input 1:", textInput1);
    console.log("Input 2:", textInput2);
  };

  const { pathname } = useLocation();
  if (pathname === "/firebase" || pathname === "/login" || pathname === "/register" || pathname === "/product/ready-kitty-go" || pathname === "/product/ready-combo-go" || pathname === "/product/ready-puppy-go") return null;

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <Container maxWidth='100'
        sx={{
          display: 'flex',
          backgroundColor: '#138086',
          marginTop: '2em',
        }}
      >
        <Grid container spacing={2} columns={14} className='sizeBrk' sx={{
          width: '98%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '1.6em',
          paddingBottom: '1.6em',
        }}>

          <Grid item xs={3} md={2} className='footLogo' sx={{ textAlign: 'center', marginRight: '2em' }}>
            <img src={Logo} alt="pawprint" className='footLogo' />
            <Typography
              variant="h6"
              className='footLogo'
              sx={{
                fontSize: { xs: '18px', md: '20px', lg: '22px', xl: '24px' },
              }}
            >
              Ready, Pet, Go!
            </Typography>
          </Grid>

          <Grid item xs={1.5} className="hideCol"></Grid>

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
              href="/about"
              marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
              sx={{
                fontSize: { xs: '14px', md: '15px', lg: '16px' },
              }}
            >
              <Link className='footLink' to='/about'>Meet the Team</Link>
            </Typography>
            <Typography>
              <ContribPop />
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
              onClick={() => handleRedirect('mailto:YourMom@email.com')}
              marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
              sx={{
                fontSize: { xs: '14px', md: '15px', lg: '16px' },
              }}
            >
              Email
            </Typography>
            <Typography>
              <CareersPop />
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
              <Link className='footLink' to='/healthcare'>Health & Wellness</Link>
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
              <Link className='footLink' to='/policy'>Privacy Policy</Link>
            </Typography>
          </Grid>

          <Grid item xs={1.5} className="hideCol"></Grid>

          <Grid item xs={3} md={2} sx={{
            justifyContent: 'center',
            alignItems: 'end'
          }}>
            <Box className='footBox'
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
                fontSize: { xs: '16px', md: '20px', lg: '24px' },
                color: '#000',
                marginBottom: '0.4em'
              }}
              >
                Stay in touch!
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '6px' }}>
                <a href='https://github.com/js-Quest/ready-pet-go'>
                  <GitHubIcon sx={{
                    fontSize: { xs: '18px', md: '24px', lg: '30px' },
                    color: 'black',
                    textDecoration: 'none'
                  }}
                  />
                </a>
                <Link onClick={() => handleRedirect('mailto:YourMom@email.com')}>
                  <EmailIcon sx={{
                    fontSize: { xs: '18px', md: '24px', lg: '30px' },
                    color: 'black',
                    textDecoration: 'none'
                  }}
                  />
                </Link>

                <Link>
                  <HelpIcon sx={{
                    fontSize: { xs: '18px', md: '24px', lg: '30px' },
                    color: 'black',
                    textDecoration: 'none'
                  }}
                    onClick={handleModalOpen}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: '5px',
        }}
      >
        <div
          className="modal-container"
          style={{
            backgroundColor: "#fff",
            paddingLeft: "2rem",
            paddingRight: '2rem',
            paddingBottom: '2rem',
            borderRadius: "4px",
            color: "#fff",
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '525px',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <IconButton
              className="paymentClose"
              variant="text"
              onClick={handleModalClose}
              sx={{
                display: 'flex',
                marginLeft: '98%',
                marginTop: '2%',
              }}
            >
              <CloseRoundedIcon className="paymentClose" sx={{ color: '#8180809e', fontSize: '32px' }} />
            </IconButton>
            <Typography sx={{
              color: "#0b4548",
              marginBottom: '0.4rem',
              marginTop: '-1rem',
              textAlign: 'center',
              fontFamily: 'roboto',
              fontSize: '1.5rem'
            }}
            >
              How Can We Help You?
            </Typography>
          </div>
          <p style={{
            color: "#0b4548",
            marginBottom: '1rem',
            textAlign: "center",
          }}
          >
            Please add your contact info and a message below.
          </p>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              value={textInput1}
              onChange={handleTextInput1Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#8180809e" },
              }}
              InputProps={{
                style: { color: "black" },
              }}
            />
            <TextField
              label="Email or Phone"
              value={textInput2}
              onChange={handleTextInput2Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#8180809e" },
              }}
              InputProps={{
                style: { color: "#black" },
              }}
            />
            <TextField
              label="Message"
              value={textInput3}
              onChange={handleTextInput3Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#8180809e" },
              }}
              InputProps={{
                style: { color: "#black" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              style={{
                marginLeft: 'calc(50% - 30px)'
              }}
            >
              Send
            </Button>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default Footer;