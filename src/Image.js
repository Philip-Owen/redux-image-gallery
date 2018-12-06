import React from 'react';
import styled from 'styled-components';

const ImageCard = styled.div`
	background-color: black;
	padding: 10px;
  margin: 20px;
  width: 500px;
  height: 300px;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
  transition: 0.3s;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
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
