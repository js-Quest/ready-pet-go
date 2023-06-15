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

// add pet mutation
export const ADD_PET = gql`
mutation addPet($photoURL: String, $name: String, $age: String, $breed: String, $bio: String) {
  addPet(photoURL: $photoURL, name: $name, age: $age, breed: $breed, bio: $bio) {
    _id
    name
    age
    breed
    bio
  }
}
`;

// update pet mutation
export const UPDATE_PET = gql`
mutation updatePet($updatePetId: ID!, $photoURL: String,$name: String, $age: String, $breed: String, $bio: String) {
  updatePet(id: $updatePetId, photoURL: $photoURL, name: $name, age: $age, breed: $breed, bio: $bio) {
    _id
    name
    age
    breed
    bio
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
