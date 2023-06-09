// // Axios is a popular NPM package used for preforming API requests
// import axios from 'axios';
// const apiKey = process.env.REACT_APP_API_KEY;
// const searchId = 'b4a20db7c79a34d3f';


// // // Using axios, we create a search method that is specific to our use case and export it at the bottom
// // const APICall = (query) =>
// //   axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=zGTBO65XtIkTWFiBcgVCxJX7x8FveHfA&limit=5`);

// // custom search api
// const searchGoogle = async (searchTerm, apiKey, searchId) => {
//   try {
//     const response = await axios.get(
//       `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchId}&q=${searchTerm}`
//     );

//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//       throw new Error('lol nope not this api call');
//   }
// };



// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default searchGoogle;
