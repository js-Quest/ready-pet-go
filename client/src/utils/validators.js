// const validateRegisterForm = ({ email, password, username }) => {
//   return (
//     validateEmail(email) && validatePassword(password) && validateUsername(username)
//   );
// };

// const validateLoginForm = ({ email, password }) => {
//   const isEmailValid = validateEmail(email);
//   const isPasswordValid = validatePassword(password);

//   return isEmailValid && isPasswordValid;
// };


// const validatePassword = (password) => {
//   return password.length > 5 && password.length < 13;
// };

// const validateEmail = (email) => {
//   const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   return regex.test(email);
// };

// const validateUsername = (username) => {
//   return username.length >2 && username.length < 13;
// };

// export {validateRegisterForm, validateLoginForm}