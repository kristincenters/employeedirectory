import React, { Component } from 'react';
import './App.css';
import TableRow from './components/TableRow';
import Axios from 'axios';

class App extends Component {
	state = {
		employees: [],
		search: '',
		currentList: [],
		name: 'ascending',
		error: '',
	};
	componentDidMount() {
		//normally API call for info from database
		console.log(this.state.employees);
		//console.log(employees);

		Axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
			const employees = res.data;
			console.log(employees);
			this.setState({ employees: employees, currentList: employees });
			console.log(this.state);
		});
	}
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
	// Grabbing input value and updating state
	handleInputChange = (event) => {
		console.log(Event);
		this.setState({ search: event.target.value });
	};
	// render results of search value; second return renders page
	render() {
		let filteredEmployees = this.state.employees.filter((employee) => {
			return employee.name.toLowerCase().indexOf(this.state.search) !== -1;
		});
		return (
			<div className='App'>
				{/* <Search /> */}
				<form className='search'>
					<div className='form-group'>
						<div
							className='header'
							style={{ backgroundColor: 'lightgrey', padding: '25px' }}
						>
							Employee Directory
							<div>
								<input
									className='form-control'
									type='text'
									name='search'
									placeholder='Search'
									value={this.state.search}
									onChange={this.handleInputChange.bind(this)}
								/>
							</div>
						</div>
					</div>
				</form>
				<table className='table'>
					<thead>
						<tr style={{ backgroundColor: 'lightgrey' }}>
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
						{filteredEmployees.map((employee) => (
							<TableRow
								id={employee.id}
								key={employee.id}
								name={employee.name}
								title={employee.title}
							/>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
