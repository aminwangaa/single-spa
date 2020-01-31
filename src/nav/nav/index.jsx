import React from "react"
import {BrowserRouter as Router} from 'react-router-dom'
import { navigateToUrl } from 'single-spa'
import styles from "./index.less"
import { connect } from "react-redux"
import { bindActionCreators, compose } from "redux"
import { addNum } from "../../store/action/test.js"

class Nav extends React.Component {

    render () {
        const { storeNum, addNum } = this.props
        console.log(location)
        return (
            <Router>
                <a onClick={() => navigateToUrl("/admin")} className={styles.tab}>Admin Home</a>
                <a onClick={() => navigateToUrl("/admin/test")} className={styles.tab}>Admin Test</a>
                <a onClick={() => navigateToUrl("/profile")} className={styles.tab}>Community Home</a>
                <a onClick={() => navigateToUrl("/profile/test")} className={styles.tab}>Community Test</a>
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    storeNum: state.test.storeNum
})

const mapDispatchToProps = (dispatch) => ({
    addNum: bindActionCreators(addNum, dispatch)
})


export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Nav)
