import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { navigateToUrl } from "single-spa"
import styles from "./index.less"

function Nav() {
  return (
    <Router>
      <a
        onClick={() => navigateToUrl("/admin")}
        className={styles.tab}
      >
        Admin Home
      </a>
      <a
        onClick={() => navigateToUrl("/admin/test")}
        className={styles.tab}
      >
        Admin Test
      </a>
      <a
        onClick={() => navigateToUrl("/profile")}
        className={styles.tab}
      >
        Community Home
      </a>
      <a
        onClick={() => navigateToUrl("/profile/test")}
        className={styles.tab}
      >
        Community Test
      </a>
    </Router>
  )
}

export default Nav
