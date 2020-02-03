import React from "react"
import { Link } from "react-router-dom"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "profile",
    }
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <h1>Hello from Community React</h1>
        <Link to={{
          pathname: "/profile/test",
        }}
        >
          Community Test
        </Link>
        <br />
        <span>{name}</span>
      </div>
    )
  }
}


export default Home
