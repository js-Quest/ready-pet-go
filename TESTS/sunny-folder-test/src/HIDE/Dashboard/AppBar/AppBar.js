import React from 'react'
import { styled } from "@mui/system";

const MainContainer = styled('div')({
  position: 'absolute',
  top: '0',
  right: '0',
  height: '48px',
  borderBottom: '1px solid black',
  backgroundColor: '#f7c297',
  width: '67%',
  marginLeft: '292px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0',
})
export default function AppBar() {
  return (
    <MainContainer>AppBar</MainContainer>
  )
}

