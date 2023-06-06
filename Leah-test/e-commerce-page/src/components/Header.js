import React from "react";

const styles = {
  heading: {
    background: '#aed8e6',
    fontFamily: "Lucinda",
    lineHeight: 1.0,
    fontSize: '1.2rem',
    color: '#656565',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'flex-start',
  }
}

function Header() {
  return (
    <header className="app-header" style={styles.heading}>
      <h1>Ready, Pet, Go!</h1>
      <nav>
        <a href>why is my link here</a>
      </nav>
    </header>

  )
}

export default Header