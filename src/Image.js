import React from 'react';
import styled from 'styled-components';

const ImageCard = styled.div`
  margin: 20px;
  width: 500px;
  height: 300px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const Image = ({url}) => (
	<ImageCard>
		<img
			src={url}
			alt=""
			className="image"
		/>
	</ImageCard>
);

export default Image;
