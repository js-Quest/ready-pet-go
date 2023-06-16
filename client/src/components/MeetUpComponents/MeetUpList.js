import React from 'react';
import { Link } from 'react-router-dom';

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
      {showTitle && <h3>{title}</h3>}
      {meetUps &&
        meetUps.map((meetUp) => (
          <div key={meetUp._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${meetUp.meetUpAuthor}`}
                >
                  {meetUp.meetUpAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this meetUp on {meetUp.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this meetUp on {meetUp.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{meetUp.meetUpText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/meetUp/${meetUp._id}`}
            >
              Join the discussion on this meetUp.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MeetUpList;
