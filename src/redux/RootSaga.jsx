import { all, takeEvery } from "redux-saga/effects";
import { SEND_CARDS_REQUEST, watcherCards } from "./modules/Cards";
import {
  SEND_FILTERED_CARDS_REQUEST,
  watcherFilteredCards,
} from "./modules/Cards";

export function* rootSaga() {
  yield all([
    yield takeEvery(SEND_CARDS_REQUEST, watcherCards),
    takeEvery(SEND_FILTERED_CARDS_REQUEST, watcherFilteredCards),
  ]);
}
