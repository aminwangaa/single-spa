import * as Types from "../action-types"
import { handleActions } from "redux-actions"

let initData = {
    storeNum: 0
}

let test = handleActions({
    [Types.ADD_NUM]:(state,action)=>{
        console.log(action)
        return {...state, storeNum: state.storeNum + 1}
    }
},initData)


export default test
