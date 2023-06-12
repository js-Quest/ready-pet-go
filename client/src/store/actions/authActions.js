// import * as api from '../../api';
// // import {useNavigate} from 'react-router-dom'
// const authActions = { 
//   //action type
//   SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS'
// };

// const getActions = (dispatch) => {
//   // const navigate = useNavigate();
//   const login = async (userDetails) => {
//     const response = await api.login(userDetails);
//     console.log(response);
//     if (response.error) {
//       // handle error
//     } else {
//       const { userDetails } = response?.data;
//       localStorage.setItem('user', JSON.stringify(userDetails));

//       dispatch(setUserDetails(userDetails));
//       window.location.replace('/dashboard');
//     }
//   };

//   const register = async (userDetails) => {
//     const response = await api.register(userDetails);
//     console.log(response);
//     if (response.error) {
//       // handle error
//     } else {
//       const { userDetails } = response?.data;
//       localStorage.setItem('user', JSON.stringify(userDetails));

//       dispatch(setUserDetails(userDetails));
//       window.location.replace('/dashboard');
//     }
//   };

//   return {
//     login,
//     register
//   };
// };

// const setUserDetails = (userDetails) => {
//   return {
//     type: authActions.SET_USER_DETAILS,
//     userDetails
//   };
// };

// export { authActions, getActions };
