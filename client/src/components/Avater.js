import React from 'react'
import styled from '@emotion/styled'

const AvaterPreview=styled('div')({
  height: '42px',
  width: '42px',
  backgroundColor: '#E8A016',
  borderRadius: '42px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  fontWeight: '700',
  marginLeft: '5px',
  color: 'white',
})

export default function Avater({username, large}) {
  return (
    <AvaterPreview style={large ? {height: '80px', width: '80px'} : {}}>
      {username.substring(0, 2)}
    </AvaterPreview>
  )
};

