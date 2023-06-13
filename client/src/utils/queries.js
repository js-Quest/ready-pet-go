import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
      _id
      username
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username 
      email
    }
  }
`;