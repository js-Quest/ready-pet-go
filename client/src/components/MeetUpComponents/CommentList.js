import React from 'react';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h3 
        style={{ borderBottom: '1px solid #1a1a1a', marginBottom:'.3em' }}
      >
        Comments
      </h3>
      <div>
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} style={{marginBottom:'.8em'}}>
              <div>
                <h5 style={{paddingBottom:''}}>
                  {comment.commentAuthor} replied{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt} with:
                  </span>
                </h5>
                <p>{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
