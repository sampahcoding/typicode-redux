import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/RootReducer";
import rootSaga from "../sagas/RootSaga";

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	return {
		...createStore(rootReducer,
			applyMiddleware(sagaMiddleware)),
		runSaga: sagaMiddleware.run(rootSaga)
	};
};

export default configureStore;
