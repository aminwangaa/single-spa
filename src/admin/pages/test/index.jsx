import React from "react"
import { Link } from "react-router-dom"
import { Button } from "antd"
import styles from "./index.less"

class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "amin"
    }
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <h1>Hello from Admin Test</h1>
        <Link to="/admin">Admin Home</Link>
        <div className={styles.testDiv}>{name}</div>
        <Button type="primary">点一点</Button>
      </div>
    )
  }
}

export default Test
