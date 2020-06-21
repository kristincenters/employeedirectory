import React from 'react';
function TableRow(props) {
	return (
		<tr key={props.id}>
			<th className='tblHeader' scope='row'>
				{props.id}
			</th>
			<td className='name'>{props.name}</td>
			<td className='title'>{props.title}</td>
		</tr>
	);
}
export default TableRow;
