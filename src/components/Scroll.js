import React from 'react';

const Scroll = (props) => {
	return(
		<div style ={{overflow: 'scroll', border: '1px solid #7FFFD4', height: '700px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;