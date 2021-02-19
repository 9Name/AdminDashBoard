import './App.css'; 
import Home from './Com/Home'; 
import Contact from './Com/Contact'; 
import User from './Com/User'; 
import Dash from './Com/Dash'; 
import Checkout from "./Com/Checkout"
import SignIn from "./Com/SignIn"
import Signup from "./Com/Signup"
import Graph from "./Com/Graph"
import Gmap from "./Com/Gmap"

import Table from "./Com/Table"
import Icons from "./Com/Icons"

import { BrowserRouter, Route, Switch } 
	from 'react-router-dom'; 

function App() { 
return ( 
	<div className="App"> 
	<h1 style={{color: '#323576'}}>Material-UI Drawer</h1> 
	<BrowserRouter> 
	<Dash/> 
	

	<Switch> 
		<Route exact path='/graph' render= 
			{props => <Graph {...props} /> }/> 
		<Route exact path='/user' render= 
			{props => <User {...props} /> }/> 
	
		<Route exact path='/checkout' render= 
			{props => <Checkout {...props} /> }/> 
      {/* <Route exact path='/checkout' render= 
			{props => <Checkout {...props} /> }/>  */}
			<Route exact path='/gmap' render= 
			{props => <Gmap {...props} /> }/> 

	<Route exact path='/table' render= 
			{props => <Table {...props} /> }/> 
		<Route exact path='/icons' render= 
			{props => <Icons {...props} /> }/> 
		

	
	</Switch> 
	</BrowserRouter> 
	</div> 
); 
} 

export default App; 
