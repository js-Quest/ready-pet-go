import { useState } from "react";
import ResultList from "../components/ResultList";
import SearchForm from "../components/ProductSearchForm";
import searchGoogle from "../utils/API";

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

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchId = "b4a20db7c79a34d3f";

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // call the API function with the user input search term
    searchGoogle(searchTerm, apiKey, searchId)
      .then((data) => {
        console.log(data);
        setResults(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {" "}
      <SearchForm
        value={searchTerm}
        handleInputChange={handleInputChange}
        handleSearchBarSubmit={handleSearch}
      />
      <ResultList results={results} />
      <div className="gcse-searchresults-only"></div>
    </div>
  );
}

export default ProductSearch;
