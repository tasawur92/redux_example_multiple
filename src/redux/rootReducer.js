import { combineReducers } from 'redux';
import TwoReducer from './multiply_two/TwoReducer';
import FiveReducer from './multiple_five/FiveReducer';
import OneReducer from './multiple_one/OneReducer';
import ThreeReducer from './multiple_three/ThreeReducer';


const rootReducer = combineReducers({
	two: TwoReducer,
	five: FiveReducer,
	one: OneReducer,
	three: ThreeReducer
})

export default rootReducer;
