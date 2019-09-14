import { PHOTOS } from "../const/ActionTypes";

const photos = {
	datas: [],
	progress: false,
	reload: false,
	no_result: false
};

function result(state, action) {
	if (action.infinite === true) {
		return state.datas.concat(action.response);
	}
	return action.response;
}

export default function Photos(state = photos, action) {
	if (action.infinite !== true) {
		state = {...state, ...photos};
	}
	switch (action.type) {
	case PHOTOS.LOADING:
		return { ...state, progress: true };
	case PHOTOS.DONE:
		return { ...state, datas: result(state, action), progress: false };
	case PHOTOS.NOT_FOUND:
		return { ...state, datas: result(state, action), no_result: true};
	case PHOTOS.ERROR:
		return {
			...state,
			reload: true,
			error: "Error while fetching repositories"
		};
	default:
		return state;
	}
}

export function listPhotos(params) {
	return { type: PHOTOS.LOADING, params};
}
