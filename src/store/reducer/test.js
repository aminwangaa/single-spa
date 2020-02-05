import { handleActions } from "redux-actions"
import * as Types from "../action-types"

const initData = {
  storeNum: 0
}

const test = handleActions({
  [Types.ADD_NUM]: (state) => ({ ...state, storeNum: state.storeNum + 1 })
}, initData)


export default test
