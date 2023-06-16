import React, { useState } from "react";
import data from "../components/Cart/combobox";
import { Button, Modal, TextField } from "@mui/material";

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
        }}
      >
        <div
          className="modal-container"
          style={{
            backgroundColor: "#000",
            padding: "2rem",
            borderRadius: "4px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h2>Successfully added!</h2>
          <p style={{ color: "#fff" }}>Your Total is $20.99</p>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name On Card"
              value={textInput1}
              onChange={handleTextInput1Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
            />
            <TextField
              label="Card Number"
              value={textInput2}
              onChange={handleTextInput2Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
            />
            <TextField
              label="CCV"
              value={textInput3}
              onChange={handleTextInput3Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
            />
            <Button type="submit" variant="contained">
              Pay
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default ItemDetails;
