import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { menuReducer } from "./menu/menu.reducer";
import { pagesReducer } from "./pages/pages.reducer";
import { shopReducer } from "./shop/shop.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { checkoutReducer } from "./checkout/checkout.reducer";
import {widthReducer} from "./width/width.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cartReducer"]
}

const rootReducer = combineReducers({
    menuReducer,
    pagesReducer,
    shopReducer,
    categoriesReducer,
    cartReducer,
    checkoutReducer,
    widthReducer
})

export default persistReducer(persistConfig, rootReducer);


