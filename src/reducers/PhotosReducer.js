import { PHOTOS } from "../const/ActionTypes";

const photos = {
	datas: [],
	progress: true,
	reload: false,
};

function remove(state, action) {
	console.log(action)
	return state.datas.filter((d) => d.id !== action.payload.id);
}

function add(state, action) {
	if(action.payload.type === 'ADD') {
		const newDatas = state.datas.slice();
		var uniqid = Date.now();
		newDatas.unshift({ id: uniqid, title: action.payload.title });
		return newDatas;
	} else {
		const newDatas = [];
		state.datas.forEach((c) => {
			if (c.id === action.payload.id) {
				const newItem = { ...c, title: action.payload.title };
				newDatas.push(newItem);
			} else {
				newDatas.push(c);
			}
		});
		return newDatas;
	}
}

export default function Photos(state = photos, action) {
	switch (action.type) {
	case PHOTOS.LOADING:
		return {
			...state,
			progress: true
		};
	case PHOTOS.DONE:
		return {
			...state,
			datas: action.response,
			progress: false
		};
	case PHOTOS.ERROR:
		return {
			...state,
			reload: true,
			error: "Error while fetching repositories"
		};
	case PHOTOS.DELETE:
		return {
			...state,
			datas: remove(state, action)
		};
	case PHOTOS.ADD:
		return {
			...state,
			datas: add(state, action),
		};
	default:
		return state;
	}
}

export function listPhotos(params) {
	return { type: PHOTOS.LOADING, params};
}
