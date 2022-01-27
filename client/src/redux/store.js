import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import {
  courseListReducer,
  courseCreateReducer,
  teacherCourseReducer,
  courseDeleteReducer,
} from "./reducers/courseReducers";

// Combine all reducers
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  courseList: courseListReducer,
  courseCreate: courseCreateReducer,
  courseDelete: courseDeleteReducer,
  teacherCourseList: teacherCourseReducer,
});

// Initial state of the user
const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  userLogin: { userInfo: userFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
