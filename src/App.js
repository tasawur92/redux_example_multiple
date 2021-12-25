import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TwoContainer from './components/TwoContainer';
import FiveContainer from './components/FiveContainer';
import OneContainer from './components/OneContainer';
import ThreeContainer from './components/ThreeContainer';
import './App.css';

function App() {
  return (
	<Provider store={store}>
		<div className="App">
			<TwoContainer />
			<br />
			<FiveContainer />
			<br />
			<OneContainer />
			<br />
		    <ThreeContainer />
		</div>
	</Provider>	
  );
}

export default App;