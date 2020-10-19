import tvShowsServices from '../services/tvShowsServices.js';

const actions = {
	// make API call for shows list
	async getTopRatedbyGenre({ commit, state }) {
		const res = await tvShowsServices.getRequestDetails(state.detailsURL);		
		commit('SET_ALL_SHOWS_LIST', res.data);				
	},
	// make API call for search
	async getTopShowsbySearch({ commit, state}, searchvalue) {					
		commit('SET_SEARCH_VALUE', searchvalue)
		const res = await tvShowsServices.getRequestDetails(
			'/search/shows?q=' + state.searchValue
		);		
		commit('SET_SEARCH_SHOWS_LIST', res.data);					
	},
	getShowslist({commit}, value){		
		commit('SET_SHOWS_LIST_BY_GENRE', value.genrelist)
		commit('SET_TOP_RATED_SHOWS', value.toplist)		
	},
	getSearchValue({commit}, value){		
		commit('SET_IS_SEARCH', value)
	},
	getSearchResult({commit}, value){
		commit('SET_SEARCH_RESULTS_LIST', value)
	}
};

export default actions;