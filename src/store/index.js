import { createStore } from "redux";
import { usersReducer } from "./reducer/productsReducer";

export const store = createStore(usersReducer);
