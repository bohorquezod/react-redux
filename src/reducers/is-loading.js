import { Map as map } from 'immutable'
import { IS_LOADING } from '../actions-types/index';

const initialState = map({
	active: false
})

const isLoading = (state = initialState, {type, payload}) => {
	switch (type) {
		case IS_LOADING:
			return state.set('active', payload.value)
	
		default:
			return state
	}
}

export default isLoading;