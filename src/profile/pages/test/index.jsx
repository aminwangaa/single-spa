import React from "react"
import { Link } from "react-router-dom"
import { mapQuery } from "../../../utils/common"

class Test extends React.Component {
  componentDidMount() {
    console.log(window)
    const query = mapQuery(window.location.href)
    console.log(query)
  }

  render() {
    return (
      <div>
        <h1>Hello from Community Test</h1>
        <Link to="/community">Community Home</Link>

        <Link to="/admin">To Admin Home</Link>
      </div>
    )
  }
}

export default Test
