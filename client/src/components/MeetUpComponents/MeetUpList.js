import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';

const MeetUpList = ({
  meetUps,
  title,
  showTitle = true,
  showUsername = true,
}) => {

  console.log(meetUps)
  if (!meetUps.length) {
    return <h3>No MeetUps Yet</h3>;
  }

  return (
    <div>



      {showTitle && <h4>{title}</h4>}


      <Box sx={{ marginTop: '2.8em', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>



        {meetUps &&
          meetUps.map((meetUp) => (

            <Link style={{ textDecoration: 'none' }} to={`/meetUp/${meetUp._id}`}>
              <Card key={meetUp._id} sx={{ backgroundColor: '#f5f5f5', borderStyle: 'outSet', borderColor: 'black', display: 'flex', marginBottom: '1.0em', height: '6em', alignItems: 'center' }}>

                {/* {console.log(meetUp.user[0].profilePicture)}

                <img
                  styles={{ height: { xs: 200, xl: 250 } }}
                  src={meetUp.user[0].profilePicture} /> */}


                <div style={{ fontSize: '1.5rem', width: '100%' }} >
                  <Link style={{paddingLeft:'.8em', color: 'black', textDecoration: 'none', fontFamily: 'Times New Roman, Times, serif' }} to={`/meetUp/${meetUp._id}`}> {meetUp.meetUpTitle} </Link>
                </div>
                <Typography variant="h5" component="div" sx={{ color: '#36393F', fontSize: '.9em', textAlign: 'center', marginLeft: '20px', marginRight: '20px' }}>

                  {showUsername ? (
                    <Link style={{ color: 'gray' }} to={`/profiles/${meetUp.meetUpAuthor}`}>
                      <span> {meetUp.meetUpAuthor} posted this meetUp on {meetUp.createdAt} </span>
                    </Link>
                  ) : (
                    <>
                      <span >
                        You posted this meetUp on {meetUp.createdAt}
                      </span>
                    </>
                  )}
                </Typography>

                <Divider orientation="vertical" flexItem />


                <Link
                  style={{ color: 'gray', marginLeft: '.5em', marginRight: '.5em', textAlign: 'center' }}
                  to={`/meetUp/${meetUp._id}`}
                >
                  Join discussion
                </Link>


              </Card>
            </Link>


          ))}

      </Box>
    </div>
  );
};

export default MeetUpList;
