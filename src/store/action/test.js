import * as Types from "../action-types";

const addNum = (params)=>{
    console.log(params)
    return async (dispatch)=>{
        await dispatch({type:Types.ADD_NUM, data: params })
    }
}

export { addNum }
