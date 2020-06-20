import React from 'react';

const EmpList = (props) => {
	return (
		<div>
			<li>{props.id}</li>
			<li>{props.name}</li>
			<li>{props.title}</li>
		</div>
	);
};

export default EmpList;
