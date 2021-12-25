import React from 'react';
import { connect } from 'react-redux';
import { multiplyThree } from '../redux';

function ThreeContainer(props){
	return (
		<div className='ThreeContainer'>
			<h1>{props.val_three}</h1>
			<h3>Click the button to multiply the above number by 3</h3>
			<button onClick={props.multiplyThree}>Multiply by 3</button>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		val_three: state.three.val_three
	}
}


const mapDispatchToProps = dispatch => {
	return {
		multiplyThree: () => dispatch(multiplyThree())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ThreeContainer);