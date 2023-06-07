import { useState, useEffect } from 'react';
import ResultList from '../components/ResultList';
import Header from '../components/Header';
import SearchForm from '../components/ProductSearchForm';
import APICall from '../utils/API';

const ProductSearch = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const searchGiphy = async (query) => {
    const response = await APICall(query);
    setResults(response.data.data);
  };

  useEffect(() => {
    searchGiphy('');
  }, []);

  const handleInputChange = (e) => setSearch(e.target.value);


  const handleSearchBar = (e) => {
    e.preventDefault();
    searchGiphy(search);
  };

  return (
    <div>
      <Header />
      <SearchForm 
      value={search}
        handleInputChange={handleInputChange}
        handleSearchBarSubmit={handleSearchBar} />
      <ResultList results={results} />
    </div>
  );
};

export default ProductSearch;