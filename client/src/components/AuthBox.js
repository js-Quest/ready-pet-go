import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  //styling box here
  width: "100%",
  height: 'auto',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: '4em'
  // background: "#1f98b4",
});

export default function AuthBox(props) {
  return (
    <BoxWrapper>
      <Box
        className='authBox'
        sx={{
          width: [400, 700],
          height: ['auto', 'auto'],
          background: "#36393f", //dark grey
          borderRadius: "10px",
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
}
