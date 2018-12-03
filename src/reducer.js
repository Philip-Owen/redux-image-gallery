const initialState = {
	imageUrl: '',
	images: [],
};

export default function(state = initialState, action) {
	const { type } = action;
	switch (type) {
		case 'URL_CHANGE':
			return { ...state, imageUrl: action.payload };
		case 'ADD_IMAGE':
			return { ...state, images: [...state.images, state.imageUrl], imageUrl: '' };
		default:
			return state;
	}
}
