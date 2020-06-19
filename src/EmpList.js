import React from 'react';

const EmpList = (props) => {
	return (
		<div>
			<p>{props.id}</p>
			<p>{props.name}</p>
			<p>{props.title}</p>
		</div>
	);
};

export default EmpList;
