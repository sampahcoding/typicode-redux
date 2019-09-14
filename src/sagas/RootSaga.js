import { fork, all } from "redux-saga/effects";
import * as PhotosSagas from "./PhotosSagas";

export default function* rootSaga() {
	yield all([
		...Object.values(PhotosSagas),
	].map(fork));
}
