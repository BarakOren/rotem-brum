import {run} from "./width.actions";
const INITIAL_STATE = {
    width: window.innerWidth
}

export const widthReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "GET_WIDTH":
            var width = run();
            return {
                ...state,
                width: width
            }
    default:
        return state;
    }
}