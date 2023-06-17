import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client'; 
import { ADD_COMMENT } from '../../utils/mutations'; 
import Auth from '../../utils/auth';


import { Box, Container, Typography, TextField, Button} from '@mui/material';

const CommentForm = ({ meetUpId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          meetUpId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <Box sx={{ marginTop: '1.2em', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}> 

      {Auth.loggedIn() ? (
        <> 
            
          <form
            style= {{display:'flex', flexDirection:'column', justifyContent:'center'}}
            onSubmit={handleFormSubmit}
          >
            <div>
            <h4>
                         Reply to this MeetUp: <span style={{fontSize:'.8em', float:'right'}}> Character Count: {characterCount}/280</span>
                        </h4>
            {error && <span>{error.message}</span>} 
            </div>
            <div>
              <TextField
                name="commentText"
                placeholder="Add your comment..."
                value={commentText} 
                style={{marginBottom:'.8em', width:'100%'}}
                onChange={handleChange}
              ></TextField>
            </div>

            <div > 
              <Button variant='contained' type="submit" sx={{ backgroundColor: '#36393F', width: '9rem', marginLeft: 'auto' }}>Add Comment</Button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to reply to meetUps. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </Box>
  );
};

export default CommentForm;
