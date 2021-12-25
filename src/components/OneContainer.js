import React from 'react';
import { connect } from 'react-redux';
import { multiplyOne } from '../redux';

function OneContainer(props){
	return (
		<div className='OneContainer'>
			<h1>{props.val_one}</h1>
			<h3>Click the button to multiply the above number by 1</h3>
			<button onClick={props.multiplyOne}>Multiply by 1</button>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		val_one: state.one.val_one
	}
}


const mapDispatchToProps = dispatch => {
	return {
		multiplyOne: () => dispatch(multiplyOne())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OneContainer);