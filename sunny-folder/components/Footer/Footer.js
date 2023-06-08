import React, { useContext } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeContext } from "../../ThemeProvider";
import './style.css';

function Footer() {
  const { colors } = useContext(ThemeContext);
  return (
    <Container maxWidth='100vw' sx={{
      backgroundColor: "#E4E5E7",
    }}>
      <div className="footIcons">
        <GitHubIcon fontSize="large" className="icon" sx={{
          color: colors.quaternary
        }}/>
        <EmailIcon fontSize="large" className="icon" sx={{
          color: colors.quaternary
        }} />
        <PhoneInTalkIcon fontSize="large" className="icon" sx={{
          color: colors.quaternary
        }} />
        <LinkedInIcon fontSize="large" className="icon" sx={{
          color: colors.quaternary
        }} />
      </div>
      <Typography className="footText" sx={{
        color: "#000000"
      }}>
        🐾  © 2023  Ready. Pet. Go!  🐾 
      </Typography>
    </Container>
  )
};

export default Footer;