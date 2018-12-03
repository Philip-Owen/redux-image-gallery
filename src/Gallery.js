import React from 'react';
import { connect } from 'react-redux';
import Image from './Image';
import styled from 'styled-components';

const GalleryContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Gallery = ({ images }) => (
	<div>
		<h1>Gallery</h1>
		<GalleryContainer>
			{images.map(url => (
				<Image key={url} url={url} />
			))}
		</GalleryContainer>
	</div>
);

const mapStateToProps = state => ({
	images: state.reducer.images,
});

export default connect(mapStateToProps)(Gallery);
