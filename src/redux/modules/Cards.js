import { put } from "redux-saga/effects";
import MyFetch from "../../utils/MyFetch";

export const SEND_CARDS_REQUEST = "SEND_CARDS_REQUEST";
export const RECEIVE_CARDS_RESPONSE = "RECEIVE_CARDS_RESPONSE";
export const RECEIVE_CARDS_ERROR = "RECEIVE_CARDS_ERROR";

export const SEND_FILTERED_CARDS_REQUEST = "SEND_FILTERED_CARDS_REQUEST";
export const RECEIVE_FILTERED_CARDS_RESPONSE =
  "RECEIVE_FILTERED_CARDS_RESPONSE";
export const RECEIVE_FILTERED_CARDS_ERROR = "RECEIVE_FILTERED_CARDS_ERROR";

const init = {
  loading: false,
  data: [],
  error: "",
};

export const cardsReducer = (state = init, action) => {
  switch (action.type) {
    case SEND_CARDS_REQUEST:
    case SEND_FILTERED_CARDS_REQUEST:
      return { ...state, loading: true };

    case RECEIVE_CARDS_RESPONSE:
    case RECEIVE_FILTERED_CARDS_RESPONSE:
      return { loading: false, data: action.payload, error: "" };

    case RECEIVE_CARDS_ERROR:
    case RECEIVE_FILTERED_CARDS_ERROR:
      return { loading: false, data: [], error: action.payload };

    default:
      return state;
  }
};

export const sendCardsRequest = () => {
  return {
    type: SEND_CARDS_REQUEST,
  };
};

export const receiveCardsResponse = (data) => {
  return {
    type: RECEIVE_CARDS_RESPONSE,
    payload: data,
  };
};

export const receiveCardsError = (error) => {
  return {
    type: RECEIVE_CARDS_ERROR,
    payload: error,
  };
};

export const sendFilteredCardsRequest = (value) => {
  return {
    type: SEND_FILTERED_CARDS_REQUEST,
    payload: value,
  };
};

export const receiveFilteredCardsResponse = (data) => {
  return {
    type: RECEIVE_FILTERED_CARDS_RESPONSE,
    payload: data,
  };
};

export const receiveFilteredCardsError = (error) => {
  return {
    type: RECEIVE_FILTERED_CARDS_ERROR,
    payload: error,
  };
};

export function* watcherCards() {
  try {
    const res = yield MyFetch("get", "products");
    yield put(receiveCardsResponse(res));
  } catch (error) {
    yield put(receiveCardsError(error.message));
  }
}

export function* watcherFilteredCards(action) {
  try {
    const res = yield MyFetch("get", `products/category/${action.payload}`);
    yield put(receiveFilteredCardsResponse(res));
  } catch (error) {
    yield put(receiveFilteredCardsError(error.message));
  }
}
