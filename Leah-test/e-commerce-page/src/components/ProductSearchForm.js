import React from 'react';

const styles = {
  searchStyle: {
    display: 'flex',
    fontFamily: 'Times',
    justifyContent: 'flex-start',
    fontSize: '20px',
    padding: '10px'
  },
};

function SearchForm(props) {
  return (
    <form>
      <div className="form-group" style={styles.searchStyle}>
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="search for a product"
          id="search"
        />
        <br />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
