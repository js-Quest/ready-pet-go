import React from 'react'
import { styled } from "@mui/system";

const MainContainer = styled('div')({
  flexGrow: 1,
  backgroundColor: '#f7c297',
  marginTop: '48px',
  display: 'flex',
})

export default function Messenger() {
  return (
    <MainContainer>Messenger</MainContainer>
  )
}
