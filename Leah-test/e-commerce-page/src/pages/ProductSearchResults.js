import { useState, useEffect } from 'react';
import ResultList from '../components/ResultList';
import Header from '../components/Header';
import SearchForm from '../components/ProductSearchForm';

// Import our search method
import search from '../utils/API';

const ProductSearch = () => {
  const [results, setResults] = useState([]);

  const searchGiphy = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
  };

  useEffect(() => {
    searchGiphy('kitten');
  }, []);

  return (
    <div>
      <Header />
      <SearchForm />
      <ResultList results={results} />
    </div>
  );
};

export default ProductSearch;