import { createStore } from "redux";
import rootReducer from "./reducer/index";

const initialState= {};

export const store = createStore(
    rootReducer,
    initialState
);
