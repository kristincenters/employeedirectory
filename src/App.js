import React, { Component } from 'react';
import './App.css';
import EmpList from './EmpList';
// import Search from './components/Search';
import employees from './employees.json';

class App extends Component {
	state = {
		employees: employees,
		search: '',
		currentList: [],
		name: 'ascending',
		error: '',
	};
	componentDidMount() {
		//normally API call for info from database
		console.log(this.state.employees);
		//console.log(employees);
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
	handleInputChange = (event) => {
		console.log(Event);
		// Getting the value and name of the input which triggered the change

		// Updating the input's state
		this.setState({ search: event.target.value });
	};

	render() {
		let filteredEmployees = this.state.employees.filter((employee) => {
			return employee.name.toLowerCase().indexOf(this.state.search) !== -1;
		});
		return (
			<div className='App'>
				{/* <Search /> */}
				<table className='table'>
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
						{filteredEmployees.map((employee) => (
							<tr key={employee.id}>
								<th className='tblHeader' scope='row'>
									{employee.id}
								</th>
								<td className='name'>{employee.name}</td>
								<td className='title'>{employee.title}</td>
							</tr>
						))}
					</tbody>
				</table>
				<form className='search'>
					<div className='form-group'>
						<div className='header'>
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
			</div>
		);
	}
}

export default App;
