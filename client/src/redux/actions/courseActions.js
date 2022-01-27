import axios from "axios";
import {
  COURSE_CREATE_ERROR,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_GET_ERROR,
  COURSE_GET_REQUEST,
  COURSE_GET_SUCCESS,
} from "../constants/courseConstants";
import { logout } from "./userActions";

export const courseList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: COURSE_GET_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/v1/api/courses", config);

    dispatch({
      type: COURSE_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    if (
      message === "Token Expired!" ||
      message === "Invalid Token!" ||
      message === "Unauthorized Access, No Token Provided!"
    ) {
      dispatch(logout());
    }

    dispatch({
      type: COURSE_GET_ERROR,
      payload: message,
    });
  }
};

export const createCourse =
  (courseName, courseDescription, courseLevel) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: COURSE_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "/v1/api/courses",
        { courseName, courseDescription, courseLevel },
        config
      );

      dispatch({
        type: COURSE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      if (
        message === "Token Expired!" ||
        message === "Invalid Token!" ||
        message === "Unauthorized Access, No Token Provided!"
      ) {
        dispatch(logout());
      }

      dispatch({
        type: COURSE_CREATE_ERROR,
        payload: message,
      });
    }
  };
