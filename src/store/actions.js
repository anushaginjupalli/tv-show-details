import tvShowsServices from '../services/tvShowsServices.js';

const actions = {
	// make API call for shows list
	async getTopRatedbyGenre({ commit, state }) {
		const res = await tvShowsServices.getRequestDetails(state.detailsURL);		
		commit('SET_ALL_SHOWS_LIST', res.data);				
	},
	// make API call for search
	async getTopShowsbySearch({ commit, state }) {		
		const res = await tvShowsServices.getRequestDetails(
			'/search/shows?q=' + state.searchValue
		);		
		commit('SET_SEARCH_SHOWS_LIST', res.data);			
	},
};

export default actions;