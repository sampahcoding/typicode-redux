import { put , takeLatest, call } from "redux-saga/effects";
import { delay } from 'redux-saga/effects';
import { PHOTOS } from "../const/ActionTypes";
import API from "../const/Api";
import axios from "axios";

// Worker sagas//
function* getPhotos(action) {
	try {
		const response = yield call(axios.get, `${API.PHOTOS}?_limit=10`);
		yield delay(500);
		yield put({type: PHOTOS.DONE, response: response.data});
	} catch(e) {
		yield delay(500);
		yield put({type:PHOTOS.ERROR});
	}
}

// Watcher sagas//
export function* wacthGetPhotos() {
	console.log("Redux saga is watching LOAD_PHOTOS action listener...");
	yield takeLatest(PHOTOS.LOADING, getPhotos);
}
