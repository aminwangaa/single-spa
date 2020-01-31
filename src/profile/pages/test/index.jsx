import React from "react"
import { Link } from "react-router-dom"
import { bindActionCreators, compose } from "redux"
import { connect } from "react-redux"
import { addNum } from "../../../store/action/test"
import { mapQuery } from "../../../utils/common"

class Test extends React.Component {

    componentDidMount() {
        const query = mapQuery(location.href)
        console.log(query)
    }

    render () {
        const { addNum, storeNum } = this.props
        return (
           <div>
               <h1>Hello from Community Test</h1>
               <Link to={"/community"}>Community Home</Link>
               <span>{storeNum}</span>
               <button onClick={addNum}>+++++++</button>

               <Link to={"/admin"}>To Admin Home</Link>
           </div>
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
)(Test)
