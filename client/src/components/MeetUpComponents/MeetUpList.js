import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';

const MeetUpList = ({
  meetUps,
  title,
  showTitle = true,
  showUsername = true,
}) => {
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
              <Card key={meetUp._id} sx={{ backgroundColor: '#534666', borderStyle: 'outSet', borderColor: 'black', display: 'flex', marginBottom: '1.0em', height:'6em', alignItems:'center'}}>


                <div style={{ fontSize: '2rem', width: '100%' }} >
                  <Link style={{paddingLeft:'.8em', color: 'white', textDecoration: 'none', fontFamily: 'Times New Roman, Times, serif' }} to={`/meetUp/${meetUp._id}`}> {meetUp.meetUpTitle} </Link>
                </div>
                <Typography variant="h5" component="div" sx={{ color: '#36393F', fontSize: '.9em', textAlign: 'center', marginLeft: '20px', marginRight: '20px' }}>

                  {showUsername ? (
                    <Link style={{ color: '#c4bfca' }} to={`/profiles/${meetUp.meetUpAuthor}`}>
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
                  style={{ color: '#c4bfca', marginLeft: '.5em', marginRight: '.5em', textAlign: 'center' }}
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
