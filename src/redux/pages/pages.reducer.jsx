export const INITIAL_STATE = {
    homepage: true,
}

export const pagesReducer = (state = INITIAL_STATE, action) => {
        switch(action.type){
            case "HOME_TRUE":
                return{
                    ...state,
                    homepage: true
                }
            case "HOME_FALSE":
                return{
                    ...state,
                    homepage: false
                }
            default:
                return state;
        }
    }
