import React from "react";
import Button from '@mui/material/Button'
export default function PrimaryButton({
  label,
  additionalStyles,
  disabled,
  onClick,
}) {
  return <Button
    variant='contained'
    sx={{
      background: 'grey',
      color: 'white',
      textTransform: 'none',
      fontSize: '16px',
      fontWeight: 500,
      width: '100%',
      height: '40px',
    }}
    //if additional styles from props, use them, else pass empty.
    style={additionalStyles ? additionalStyles : {}}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </Button>;
}
