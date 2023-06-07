import React from "react";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa"

const styles = {
  heading: {
    background: '#aed8e6',
    lineHeight: 1.0,
    color: '#656565',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: "Lucinda",
    fontSize: '2.0rem',
  },
  nav: {
    fontFamily: 'times',
    margin: '20px',
    fontSize: '20px',
    padding: '10px'
  },
}

function Header() {
  return (
    <header className="app-header" style={styles.heading}>
      <h1 style={styles.title}>Ready, Pet, Go!</h1>
      <nav>
        <a href="#" style={styles.nav}>Home</a>
        <a href="#" style={styles.nav}>Profile</a>
        <a href="#" style={styles.nav}>Products</a>
        <a href="#" style={styles.nav}><BsFillChatTextFill /></a>
        <a href="#" style={styles.nav}><FaShoppingCart /></a>
      </nav>
    </header>

  )
}

export default Header