import { createStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";

let store = createStore(Reducer);

export default store;