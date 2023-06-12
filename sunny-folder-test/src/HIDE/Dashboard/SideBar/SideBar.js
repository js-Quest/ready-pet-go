import React from 'react';
import { styled } from "@mui/system";
import SideBarButton from './SideBarButton';

const MainContainer = styled('div')({
  width: '8%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFECB8',
  // minWidth: '50px'
});
export default function SideBar() {
  return (
    <MainContainer>
      <SideBarButton />
    </MainContainer>
  )
}
