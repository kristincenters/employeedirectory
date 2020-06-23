import React, { Component } from 'react';
import './App.css';
import TableRow from './components/TableRow';
import Axios from 'axios';

class App extends Component {
	state = {
		employees: [],
		search: '',
		currentList: '',
	};
	// fetch employee list method also used for API request
	componentDidMount() {
		console.log(this.state.employees);

		Axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
			const employees = res.data;
			console.log(employees);
			this.setState({ employees: employees, currentList: employees });
			console.log(this.state);
		});

		this.compareBy.bind(this);
		this.sortBy.bind(this);
	}
	// sort functions
	compareBy(key) {
		return function (a, b) {
			if (a[key] < b[key]) return -1;
			if (a[key] > b[key]) return 1;
			return 0;
		};
	}

	sortBy(key) {
		let currentList = [...this.state.employees];
		currentList.sort(this.compareBy(key));
		this.setState({ employees: currentList });
	}

	// Grabbing input value and updating state
	handleInputChange = (event) => {
		this.setState({ search: event.target.value });
	};
	// render results of search value; second return renders page
	render() {
		let filteredEmployees = this.state.employees.filter((employee) => {
			return employee.name.toLowerCase().indexOf(this.state.search) !== -1;
		});
		return (
			<div className='App'>
				<form className='search'>
					<div className='form-group '>
						<div className='header'>
							Employee Directory
							<div>
								<p className='subhead'>Search for employee by name</p>
								<input
									className='form-control justify-content-center'
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
						<tr>
							<th onClick={() => this.sortBy('id')} scope='col'>
								ID
							</th>
							<th onClick={() => this.sortBy('name')} scope='col'>
								Name
							</th>
							<th onClick={() => this.sortBy('email')} scope='col'>
								Email
							</th>
							<th onClick={() => this.sortBy('phone')} scope='col'>
								Phone
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredEmployees.map((employee) => (
							<TableRow
								id={employee.id}
								name={employee.name}
								email={employee.email}
								phone={employee.phone}
							/>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
