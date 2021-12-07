import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import PeopleReducer from "./PeopleReducer";
import EditReducer from "./EditReducer";

export default combineReducers({
    AuthReducer,
    PeopleReducer,
    EditReducer
})