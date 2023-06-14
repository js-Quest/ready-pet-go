import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
          token
          user {
            _id
            username
            email
          }
        }
    }
`;

export const UPDATE_USER = gql`
      mutation updateUser($username: String, $email: String, $phoneNumber: String, $bio: String, $city: String) {
        updateUser(username: $username, email: $email, phoneNumber: $phoneNumber, bio: $bio, city: $city) {
          _id
          username
          email
          phoneNumber
          city
          bio
        }
      }
`;
