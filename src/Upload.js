import React from 'react';
import { connect } from 'react-redux';

const Upload = ({ imageUrlChange, addImage }) => {
	return (
		<div>
			<form onSubmit={addImage}>
				<input type="text" placeholder="Image URL" onChange={imageUrlChange} />
				<button>Add to Gallery</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	imageUrlChange: e => dispatch({ type: 'URL_CHANGE', payload: e.target.value }),
	addImage: e => {
		e.preventDefault();
		dispatch({ type: 'ADD_IMAGE' });
		e.target.reset();
	},
});

export default connect(
	null,
	mapDispatchToProps
)(Upload);
