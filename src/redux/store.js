/*
    該文件專門用於暴露一個store對象，整個應用只有一個store對象
*/

//引入createStore,專門用於創建redux中最為核心的store對象
import { createStore,applyMiddleware,combineReducers} from "redux";
//引入為person組件服務的reducer
import personReducer from "./reducers/person";
//引入redux-thunk,用於支持異步action
import thunk from "redux-thunk";
//引入redux-persist將資料緩存到瀏覽器中
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//引入redux-devtools-extension
import {composeWithDevTools} from "redux-devtools-extension"
import loggingreducer from "./reducers/logging";

const persistConfig={
    key:'root',
    storage:storage,
}
const allreducer=combineReducers({
    rens:personReducer,
    login:loggingreducer
})
const myPersistReducer=persistReducer(persistConfig,allreducer)
const store=createStore(myPersistReducer,composeWithDevTools(applyMiddleware(thunk)))
export const persistor=persistStore(store)
// 暴露store
export default store