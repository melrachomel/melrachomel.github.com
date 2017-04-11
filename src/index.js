// let's go!
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss} from 'react-router'


import './css/style.css'
import App from './components/App'
import Storepicker from './components/Storepicker'
import NotFound from './components/NotFound'


const Root = () => {
	return (
		<BrowserRouter basename="/catch-of-the-day">
			<div>
				<Match exactly pattern="/" component={Storepicker}/>
				<Match exactly pattern="/store/:storeId" component={App}/>
				<Miss component={NotFound}/>
			</div>
		</BrowserRouter>
	)
}

render(<Root />, document.getElementById("main"))