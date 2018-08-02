import { OPEN_MODAL, CLOSE_MODAL, SEARCH_VIDEO, SEARCH_ASYNC_VIDEO, IS_LOADING } from "../actions-types";

export const openModal = mediaId => ({
	type: OPEN_MODAL,
	payload: {
		mediaId
	}
})

export const closeModal = () => ({
	type: CLOSE_MODAL
})

export const searchVideos = title => ({
	type: SEARCH_VIDEO,
	payload: {
		query: title
	}
})

export const isLoading = value => ({
	type: IS_LOADING,
	payload: {
		value
	}
})

export const searchAsyncVideos = title => {
	return (dispatch) => {
		dispatch(isLoading(true))
		setTimeout(() => {
			dispatch(isLoading(false))
			dispatch(searchVideos(title))
		}, 5000)
	}
}