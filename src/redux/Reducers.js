import { combineReducers } from "redux";
import { cardsReducer } from "./modules/Cards";

export const rootReducer = combineReducers({
  cardsReducer,
});
