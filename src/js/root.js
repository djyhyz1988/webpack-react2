import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import PCNewsDetails from './components/pc_details';
import MobileNewsDetails from './components/mobile_details';
import MediaQuery  from 'react-responsive';

export default class Root extends React.Component {
	render() {
		return (
			<div>
				<MediaQuery query='(min-device-width:1224px)'>
					<Router history={hashHistory}>
						<Route path="/" components={ PCIndex }></Route>
						<Route path="/details/:uniquekey" components={ PCNewsDetails }></Route>
					</Router>
				</MediaQuery>
				<MediaQuery query='(max-device-width:1224px)'>
					<Router history={hashHistory}>
						<Route path="/" components={ MobileIndex }></Route>
						<Route path="/details/:uniquekey" components={ MobileNewsDetails }></Route>
					</Router>
				</MediaQuery>
			</div>
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));
