 

const onClick = (e) => {
    console.log(e)
}

const Header = (props) => {

  return (
    <header className = 'header'>
    <h1 style = {headingStyle}>{props.title}</h1>
    <button onClick={onClick} className= 'btn'>Submit</button>
    </header>
  )
}



Header.defaultProps = {
    title: 'DEFAULT METHOD'
} 

const headingStyle = {

    color: 'red', backgroundColor: "black" 

}

export default Header