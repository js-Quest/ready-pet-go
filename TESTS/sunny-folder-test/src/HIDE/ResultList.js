import React from 'react';

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
  },
// image: {
//   position: 'relative',
// },
}

function ResultList(props) {
  return (
    <ul className="list-group" style={styles.grid}>
      {props.results.map((result) => (
        <li className="list-group-item" style={styles.image} key={result.id}>
          <img
            alt={result.title}
            className="img-fluid"
            src={result.images.original.url}
          />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
