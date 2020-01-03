import React from "react"
import { Link } from "react-router-dom"
import styles from "./index.less"

class Test extends React.Component {

    render () {
        return (
           <div>
               <h1>Hello from Admin Test</h1>
               <Link to={"/admin"}>Admin Home</Link>
               <div className={styles.testDiv}>asdfasdf</div>
           </div>
        )
    }
}


export default Test
