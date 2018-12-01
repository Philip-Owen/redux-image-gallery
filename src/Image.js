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
const Image = () => (
	<ImageCard>
		<img
			src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/03173132/Australian-Shepherd.1.jpg"
			alt=""
			className="image"
		/>
	</ImageCard>
);

export default Image;
