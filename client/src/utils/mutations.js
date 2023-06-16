import { gql } from '@apollo/client';

// login mutation
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

// add user mutation 
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
      mutation updateUser($username: String, $email: String, $phoneNumber: String, $bio: String, $city: String, $profilePicture: String) {
        updateUser(username: $username, email: $email, phoneNumber: $phoneNumber, bio: $bio, city: $city, profilePicture: $profilePicture) {
          _id
          username
          email
          phoneNumber
          city
          bio
          profilePicture
        }
      }
`;

// add pet mutation
export const ADD_PET = gql`
mutation addPet($profilePicture: String, $name: String, $age: String, $breed: String, $bio: String) {
  addPet(profilePicture: $profilePicture, name: $name, age: $age, breed: $breed, bio: $bio) {
    _id
    name
    age
    breed
    bio
    profilePicture
  }
}
`;

// update pet mutation
export const UPDATE_PET = gql`
mutation updatePet($updatePetId: ID!, $profilePicture: String, $name: String, $age: String, $breed: String, $bio: String) {
  updatePet(id: $updatePetId, profilePicture: $profilePicture, name: $name, age: $age, breed: $breed, bio: $bio) {
    _id
    name
    age
    breed
    bio
    profilePicture
  }
}
`;

// remove pet mutation
export const REMOVE_PET = gql`
mutation removePet($petId: ID!) {
  removePet(petId: $petId) {
    _id
    name
  }
}
`;


export const ADD_MEETUP = gql`
mutation addMeetUp($meetUpTitle: String!, $meetUpText: String) {
  addMeetUp(meetUpTitle: $meetUpTitle, meetUpText: $meetUpText) {
    _id
    meetUpText
    meetUpTitle
    meetUpAuthor
    createdAt
    comments {
      _id
      commentText
    }
  }
}
`;

export const ADD_COMMENT = gql`
mutation addComment($meetUpId: ID!, $commentText: String!) {
  addComment(meetUpId: $meetUpId, commentText: $commentText) {
    _id
    meetUpText
    meetUpAuthor
    meetUpTitle
    createdAt
    comments {
      _id
      commentText
      createdAt
    }
  }
}
`;


export const REMOVE_MEETUP = gql`
mutation removeMeetUp($meetUpId: ID!) {
  removeMeetUp(meetUpId: $meetUpId) {
    _id
  }
}
`;

export const REMOVE_COMMENT = gql`
mutation removeComment($meetUpId: ID!, $commentId: ID!) {
  removeComment(meetUpId: $meetUpId, commentId: $commentId) {
    _id
  }
}
`;