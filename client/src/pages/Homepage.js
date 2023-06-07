import Header from "../components/Header";

function Homepage() {
  return (
    <div>
      <Header />
      {/* need to import user name here */}
      <h1>Welcome back `name`!</h1>
    </div>
  )
}

export default Homepage;