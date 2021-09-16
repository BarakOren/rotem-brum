import {calligraphyDATA, alcohol, music, others} from "./categories.data";

const INITIAL_STATE = {
    calligraphyData: calligraphyDATA,
    alcoholData: alcohol,
    musicData: music,
    othersData: others
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}