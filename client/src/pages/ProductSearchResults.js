import { useState, useEffect } from 'react';
import ResultList from '../components/ResultList';
import Header from '../components/Header';
import SearchForm from '../components/ProductSearchForm';
import APICall from '../utils/API';

// const ProductSearch = () => {
//   const [results, setResults] = useState([]);
//   const [search, setSearch] = useState('');

//   const searchGiphy = async (query) => {
//     const response = await APICall(query);
//     setResults(response.data.data);
//   };

//   useEffect(() => {
//     searchGiphy('');
//   }, []);

//   const handleInputChange = (e) => setSearch(e.target.value);


//   const handleSearchBar = (e) => {
//     e.preventDefault();
//     searchGiphy(search);
//   };

//   return (
//     <div>
//       <Header />
//       <SearchForm 
//       value={search}
//         handleInputChange={handleInputChange}
//         handleSearchBarSubmit={handleSearchBar} />
//       <ResultList results={results} />
//     </div>
//   );
// };

const searchResult = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchEngineId = process.env.REACT_APP_SEARCH_ENGINE_ID;

  const handleSearch = () => {
    // call the API function with the user-inputted search term
    searchGoogle(searchTerm, apiKey, searchEngineId)
      .then(data => {
        // Handle the API response
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default ProductSearch;