const initialState = {
	images: [],
};

export default function(state = initialState, action) {
	const { type } = action;
	switch (type) {
		case 'ADD_IMAGE':
			console.log('From ADD_IMAGE reducer');
			break;
		default:
			return state;
	}
};
