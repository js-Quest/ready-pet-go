import { gql } from '@apollo/client';

// query user by username
export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    phoneNumber
    city
    bio
    profilePicture
    pets {
      _id
      profilePicture
      name
      age
      breed
      bio
    }
    meetUp {
      _id
      meetUpText
      meetUpAuthor
      meetUpTitle
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt 
      }
    }
  }
}
`;

// query logged-in user 
export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
    phoneNumber
    city
    bio
    profilePicture
    pets {
      _id
      profilePicture
      name
      age
      breed
      bio
    }
    meetUp {
      _id
      meetUpText
      meetUpAuthor
      meetUpTitle
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
}
`;

// query all pets
export const QUERY_PETS = gql`
query allPets {
  pets {
    _id
    profilePicture
    name
    age
    breed
    bio
  }
}
`;

// export const QUERY_PRODUCTS = gql`
//   query getProducts($category: ID) {
//     products(category: $category) {
//       _id
//       name
//       description
//       price
//       quantity
//       image
//       category {
//         _id
//       }
//     }
//   }
// `;

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      slug
      category
      image
      price
      countInStock
      brand
      rating
      numReviews
      description
    }
  }
`;

export const QUERY_MEETUPS = gql`
query meetUps {
  meetUps {
    _id
    meetUpText
    meetUpTitle
    meetUpAuthor
    createdAt
  }
}
`;

export const QUERY_MEETUP = gql`
query meetUp($meetUpId: ID!) {
  meetUp(meetUpId: $meetUpId) {
    _id
    meetUpText
    meetUpTitle
    meetUpAuthor
    createdAt
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;