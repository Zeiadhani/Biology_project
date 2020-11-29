import React, { Component } from 'react'
import Main from './components/main.js'
import Viewer from './components/viewer.js'

export class App extends Component {
	state = {page:'main'}
	pages=(param)=>{
		this.setState({page:param})
	}
	render() {
		if(this.state.page==='main'){
			return (
				<div>
					<Main activation={this.pages}/>
				</div>
			)
	}	
		else if(this.state.page==='viewer'){
			return (
				<div>
					<Viewer activation={this.pages}/>
				</div>
			)
		}	
	}
}

export default App
