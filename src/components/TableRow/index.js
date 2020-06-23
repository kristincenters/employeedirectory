import React from 'react';
function TableRow(props) {
	return (
		<tr key={props.id}>
			<th className='tblHeader' scope='row'>
				{props.id}
			</th>
			<td className='name'>{props.name}</td>
			<td className='email'>{props.email}</td>
			<td className='phone'>{props.phone}</td>
		</tr>
	);
}
export default TableRow;
