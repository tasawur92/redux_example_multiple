import { MULTIPLY_ONE } from './OneType';

const initialState = {
	val_one: 1
}

const OneReducer = (state = initialState, action) => {
	switch(action.type){
		case MULTIPLY_ONE: return {
			...state,
			val_one: state.val_one * 1
		}
		
		default: return state
	}
}

export default OneReducer;