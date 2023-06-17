import React from 'react';
import { Container, Box, ScopedCssBaseline } from '@mui/material';
import ScrollToTop from '../components/ScrollTop';
import './style.css'


export default function PrivacyPolicy() {
  return (
    <ScrollToTop>
      <Container className='policyContainer'>
        <h1 className='errorHead'>Privacy Policy</h1>
        <Box className='policyBox'>
          <p>
            Thank you for visiting our website. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you access and interact with our website. Please read this policy carefully to understand our practices regarding your personal data. By accessing and using this website, you acknowledge that you have read and understood this Privacy Policy.<br></br><br></br>
            1. Information Collection and Use:
            <br></br><br></br>
            We do not collect any personally identifiable information (PII) from visitors of this website.
            We may collect non-personal information, such as your IP address, browser type, operating system, and the pages you visit on our website. This information is used for statistical purposes and to improve the functionaulty and user experience of the website.
            <br></br><br></br>
            2. Cookies and Tracking Technologies:
            <br></br><br></br>
            We may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and provide customized content.
            You can control the use of cookies at the individual browser level. However, disabling cookies may limit certain functionalities of the website.
            <br></br><br></br>
            3. Third-Party Links:
            <br></br><br></br>
            Our website may contain links to third-party websites that are not operated or controlled by us. We are not responsible for the privacy practices or the content of these third-party websites. We encourage you to review the privacy policies of any website you visit.
            <br></br><br></br>
            4. Security:
            <br></br><br></br>
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            <br></br><br></br>
            5. Children's Privacy:
            <br></br><br></br>
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected personal information from a child, please contact us immediately.
            <br></br><br></br>
            6. Not a Real Company:
            <br></br><br></br>
            Please note that this website is a MERN stack web development project and is not associated with any real company or organization. Any references to products, services, or company names are for demonstration purposes only.
            <br></br><br></br>
            7. Changes to this Privacy Policy:
            <br></br><br></br>
            We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on this website. Your continued use of the website after the changes have been made will signify your acceptance of the revised policy.
            <br></br><br></br>
            If you have any questions or concerns about this Privacy Policy, please contact us using the information provided on our website.
            <br></br><br></br>
            Last updated: 06/20/2023
            <br></br><br></br><br></br>
          </p>
        </Box>
      </Container>
    </ScrollToTop>
  )
}
