import React, { Component } from 'react';
import './style.css';

class Search extends Component {
	// Setting the component's initial state
	state = {
		name: '',
	};

	handleInputChange = (event) => {
		console.log(Event);
		// Getting the value and name of the input which triggered the change
		const { name, value } = event.target;

		// Updating the input's state
		this.setState({
			[name]: value,
		});
	};

	render() {
		// Notice how each input has a `value`, `name`, and `onChange` prop
		return (
			<form className='search'>
				<div className='form-group'>
					<div className='header'>
						Employee Directory
						<div>
							<input
								className='form-control'
								type='text'
								name='name'
								placeholder='Search'
								value={this.state.name}
								onChange={this.handleInputChange}
							/>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

export default Search;

// </div>
// 	  <div>
// 	  {names.filter(name => name.includes('J')).map(filteredName => (
// 		<li>
// 		  {filteredName}
// 		</li>
// 	  ))}
// 	</div>
//   );
// }
