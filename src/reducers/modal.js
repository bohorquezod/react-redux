import { fromJS } from 'immutable'
import { OPEN_MODAL, CLOSE_MODAL } from '../actions-types';

const initialState = fromJS({
	visibility: false,
	mediaId: null
})

export default (state = initialState, {type, payload}) => {
	switch (type) {
		case OPEN_MODAL:
			return state.merge({
				visibility: true,
				mediaId: payload.mediaId
			})
		
		case CLOSE_MODAL:
			return state.merge({
				visibility: false,
				mediaId: null
			})
	
		default:
			return state
	}
}