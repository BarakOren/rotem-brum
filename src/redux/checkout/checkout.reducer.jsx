const INITIAL_STATE = {
    status: null
}   

export const checkoutReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "GET_STATUS":
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}