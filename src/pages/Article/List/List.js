import React, {Component} from 'react'
import './List.scss'
import {withRouter} from 'react-router-dom'
import { Button } from 'antd'

class List extends Component {
	constructor(props) {
        super(props);

		this.state = {

		}
    }

	render() {
		return (
		<div className=''>
			aaaa2
			<Button type="primary">Primary</Button>
		</div>)
	}
}
export default withRouter(List)
