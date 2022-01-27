import {
  COURSE_GET_ERROR,
  COURSE_GET_REQUEST,
  COURSE_GET_SUCCESS,
} from "../constants/courseConstants";

export const courseListReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case COURSE_GET_REQUEST:
      return { loading: true, courses: [] };
    case COURSE_GET_SUCCESS:
      return {
        loading: false,
        courses: action.payload,
      };
    case COURSE_GET_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
