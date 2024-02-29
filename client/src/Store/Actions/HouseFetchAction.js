import { api } from "../../utils/api";
import {
  FETCH_HOUSE_FAIL,
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
} from "./ActionTypes";
export const houseOnSaleFetch = () => async (dispatch) => {
  dispatch({ type: FETCH_HOUSE_REQUEST });
  try {
    const url = "/api/house-sale";
    const { data } = await api.get(url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};

export const houseOnRentFetch = () => async (dispatch) => {
  dispatch({ type: FETCH_HOUSE_REQUEST });
  try {
    const url = "/api/house-rent";
    const { data } = await api.get(url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};
