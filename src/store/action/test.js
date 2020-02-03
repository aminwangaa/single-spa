import * as Types from "../action-types"

const addNum = (params) => async (dispatch) => {
  await dispatch({ type: Types.ADD_NUM, data: params })
}

export default { addNum }
