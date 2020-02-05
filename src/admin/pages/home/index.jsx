import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button, message } from "antd"
import styles from "./index.less"
import bannerImg from "./img/banner.jpg"

const Home = () => {
  const [name, setName] = useState("amin")
  const btnClick = () => {
    setName(() => "zf")
    message.success("成功")
  }
  return (
    <div>
      <h1>Hello from Admin</h1>
      <Link to="/admin/test">Admin Test</Link>
      <Button type="primary" onClick={btnClick}>
        我
      </Button>
      {name}
      <img src={bannerImg} alt="" className={styles.img} />
    </div>
  )
}

export default Home
