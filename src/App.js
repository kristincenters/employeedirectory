import React, { Component } from 'react';
import './App.css';
import EmpList from './EmpList';
import workers from './employees.json';

class App extends Component {
	state = {
		employees: workers,
		search: '',
		currentList: [],
		name: 'ascending',
		error: '',
	};
	componentDidMount() {
		//normally API call for info from database
		console.log(this.state.employees);
		//console.log(workers);
		this.setState({ currentList: this.state.employees });
	}
	//logic here
	onSort = (value) => {
		console.log('clicked');
		console.log(value);

		if (value === 'name') {
			console.log('name sort');
			let reversed = this.state.currentList.reverse();
			//setState fires your render()
			this.setState({ currentList: reversed });
		} else if (value === 'title') {
			console.log('title sort');
		}
	};

	render() {
		return (
			<div className='App'>
				<table class='table'>
					<thead>
						<tr>
							<th scope='col'>ID</th>
							<th onClick={() => this.onSort('name')} scope='col'>
								Name
							</th>
							<th onClick={() => this.onSort('title')} scope='col'>
								Title
							</th>
						</tr>
					</thead>
					<tbody>
						{this.state.currentList.map((employee) => (
							<tr>
								<th className='empid' scope='row' key={employee.id}>
									{employee.id}
								</th>
								<td className='name'>{employee.name}</td>
								<td className='title'>{employee.title}</td>
							</tr>
						))}
					</tbody>
				</table>

				<input
					value={this.state.name}
					type='text'
					name='name'
					onChange={this.handleChange}
					placeholder='Search...'
				/>
				<ul>...</ul>
			</div>
		);
	}
}

export default App;
