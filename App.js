import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './js/LoginScreen';
import SecondScreen from './js/SecondScreen';
//import TrackerScreen from './js/TrackerScreen';

export default class App extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="secondScreen"
	          component={SecondScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
					{/* <Scene key="trackerScreen"
	          component={TrackerScreen}
	          animation='fade'
	          hideNavBar={true}
	        /> */}
	      </Scene>
	    </Router>
	  );
	}
}