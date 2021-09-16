const INITIAL_STATE = {
    toggle: false
}

export const menuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "TOGGLE_MENU":
            return {
            ...state,
                toggle: !state.toggle
            }
        case "CLOSE_MENU":
            return {
                ...state,
                toggle: false
            }
            default:
                return state;
    }
}
