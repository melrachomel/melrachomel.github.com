import React from 'react'
import {getFunName} from '../helpers'

class Storepicker extends React.Component {
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this)
	// }
	goToStore(event) {
		event.preventDefault()
		console.log('You changed the URL')
		// first grab text from box
		const storeId = this.storeInput.value
		console.log(`Going to ${storeId}`)
		// second transition to / to /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`)

	}

	render(){
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
			{/* comment */}
			<h2>Please Enter A Store</h2>
			<input 
			type="text" 
			required 
			placeholder="Store Name" 
			defaultValue={ getFunName()} 
			ref={(input) => {this.storeInput = input}} 
			/>
			<button type="Submit">Visit Store</button>
			</form>
		)
	}
}

Storepicker.contextTypes = {
	router: React.PropTypes.object
}

export default Storepicker