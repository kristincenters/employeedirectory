import React, { Component } from 'react';
import './App.css';
import EmpList from './EmpList';
import Search from './components/Search';
import employees from './employees.json';

class App extends Component {
	state = {
		employees: employees,
		search: '',
		currentList: [],
		name: '',
		fullName: '',
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

	render() {
		return (
			<div className='App'>
				<Search />
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
						{this.state.currentList.map((employee) => (
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
			</div>
		);
	}
}

export default App;
