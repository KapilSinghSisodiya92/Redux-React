import { createStore, applyMiddleware } from "redux";
import rootRuducer from "./rootRuducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootRuducer, applyMiddleware(logger, thunk));

export default store;
