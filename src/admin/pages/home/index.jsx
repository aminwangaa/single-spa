import React from "react"
import { Link } from "react-router-dom"
import { Button } from "antd"
import bannerImg from "./img/banner.jpg"
import styles from "./index.less"

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "amin",
    }
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <h1>Hello from Admin</h1>
        <Link to="/admin/test">Admin Test</Link>
        <Button type="primary">
          点我
          {name}
        </Button>
        <img src={bannerImg} alt="" className={styles.img} />
      </div>
    )
  }
}


export default Home
