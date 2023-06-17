import React, { useState } from "react";
import data from "../components/Cart/combobox";
import { Button, Modal, TextField } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton, Typography } from "@mui/material";
import './style.css';

function ItemDetails() {
  const [openModal, setOpenModal] = useState(false);
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [textInput3, setTextInput3] = useState("");

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleTextInput1Change = (event) => {
    setTextInput1(event.target.value);
  };

  const handleTextInput2Change = (event) => {
    setTextInput2(event.target.value);
  };

  const handleTextInput3Change = (event) => {
    setTextInput3(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission or any other logic here
    console.log("Input 1:", textInput1);
    console.log("Input 2:", textInput2);
    console.log("Input 3:", textInput3);
  };

  return (
    <div className="products">
      {data.item.map((item) => (
        <div className="product" key={item.slug}>
          <a href={`${item.slug}`}>
            <img src={item.image} alt={item.name} />
          </a>
          <div className="product-info">
            <a href={`/item/${item.slug}`}>
              <p>{item.name}</p>
            </a>
            <p>
              <strong>${item.price}</strong>
            </p>
            <Button variant="contained" onClick={handleModalOpen}>
              Add to Cart
            </Button>
          </div>
        </div>
      ))}

      <Modal
        open={openModal}
        onClose={handleModalClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: '5px',
        }}
      >
        <div
          className="modal-container"
          style={{
            backgroundColor: "#fff",
            paddingLeft: "2rem",
            paddingRight: '2rem',
            paddingBottom: '2rem',
            borderRadius: "4px",
            color: "#fff",
            // textAlign: "center",
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '525px',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <IconButton
              className="paymentClose"
              variant="text"
              onClick={handleModalClose}
              sx={{
                display: 'flex',
                marginLeft: '98%',
                marginTop: '2%',
              }}
            >
              <CloseRoundedIcon className="paymentClose"  sx={{ color: '#8180809e', fontSize: '32px' }} />
            </IconButton>
            <Typography sx={{
              color: "#0b4548",
              marginBottom: '0.4rem',
              marginTop: '-1rem',
              textAlign: 'center',
              fontFamily: 'roboto',
              fontSize: '1.5rem'
            }}
            >
              Successfully added!
            </Typography>
          </div>
          <p style={{
            color: "#0b4548",
            marginBottom: '1rem',
            textAlign: "center",
          }}
          >
            Your Total is $20.99
          </p>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Name On Card"
              value={textInput1}
              onChange={handleTextInput1Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#8180809e" },
              }}
              InputProps={{
                style: { color: "black" },
              }}
            />
            <TextField
              label="Card Number"
              value={textInput2}
              onChange={handleTextInput2Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#8180809e" },
              }}
              InputProps={{
                style: { color: "#black" },
              }}
            />
            <TextField
              label="CCV"
              value={textInput3}
              onChange={handleTextInput3Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#8180809e" },
              }}
              InputProps={{
                style: { color: "#black" },
              }}
            />
            <Button 
            type="submit" 
            variant="contained"
            style={{
              marginLeft: 'calc(50% - 30px)'
            }}
            >
              Pay
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default ItemDetails;
