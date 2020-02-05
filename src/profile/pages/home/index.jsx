import React from "react"
import { Link } from "react-router-dom"
import { Button } from "antd"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "profile"
    }
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <h1>Hello from Community React</h1>
        <Link to={{
          pathname: "/profile/test"
        }}
        >
          Community Test
        </Link>
        <br />
        <span>{name}</span>
        <Button type="danger">按钮</Button>
      </div>
    )
  }
}


export default Home
