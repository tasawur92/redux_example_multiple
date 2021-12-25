import { MULTIPLY_THREE } from './ThreeType';

const initialState = {
	val_three: 1
}

const ThreeReducer = (state = initialState, action) => {
	switch(action.type){
		case MULTIPLY_THREE: return {
			...state,
			val_three: state.val_three * 3
		}
		
		default: return state
	}
}

export default ThreeReducer;