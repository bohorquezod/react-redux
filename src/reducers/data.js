import { fromJS } from 'immutable'
import schema from '../schemas/index';
import { SEARCH_VIDEO } from '../actions-types/index';

const initialState = fromJS({
	entities: schema.entities,
	categories: schema.result.categories,
	search: null,
})

export default (state = initialState, {type, payload}) => {
	switch (type) {
		case SEARCH_VIDEO: {
			return state.set('search', payload.query)
		}
	
		default:
			return state
	}
}