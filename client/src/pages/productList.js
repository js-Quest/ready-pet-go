import React from 'react';
import { Link } from "react-router-dom";
import data from '../data';
import Auth from '../utils/auth'
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import { useQuery } from "@apollo/client";
import './style.css'
import { Container, Box, Button } from '@mui/material';

function ProductList() {
  const {loading, data} = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];
  
  const handleChange = () => {
    window.location.replace('/login');
  }
  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    return (
      <Container className='errorContainer'>
        <h1 className='errorHead'>Hold Up!</h1>
        <Box className='errorBox'>
          <h2 className='errorText'
          >Please <Link to="/login" className='errorLink'>LOGIN</Link> to view Products!
          </h2>
          <Button sx={{
            background: '#B6B3B2',
            color: '#36393F',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 700,
            height: '40px',
            width: '50%',
            marginTop: '50px',
            border: '1px solid black',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
            onClick={handleChange}
          >
            LOGIN
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (<div>loading</div>) : (products.map((product) => (
          <div className="product" key={product.slug}>
            <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <div className="product-info">
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </a>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}


export default ProductList
