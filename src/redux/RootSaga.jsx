import { all, takeEvery } from "redux-saga/effects";
import { SEND_CARDS_REQUEST, watcherCards } from "./modules/Cards";

export function* rootSaga() {
  yield all([yield takeEvery(SEND_CARDS_REQUEST, watcherCards)]);
}
