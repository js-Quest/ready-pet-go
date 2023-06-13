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

// add pet mutation
export const ADD_PET = gql`
mutation addPet($name: String, $age: Int, $breed: String, $bio: String) {
  addPet(name: $name, age: $age, breed: $breed, bio: $bio) {
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
mutation updatePet($updatePetId: ID!, $name: String, $age: Int, $breed: String, $bio: String) {
  updatePet(id: $updatePetId, name: $name, age: $age, breed: $breed, bio: $bio) {
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