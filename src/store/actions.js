import tvShowsServices from '../services/tvShowsServices.js';

const actions = {
	// make API call for shows list
	async getTopRatedbyGenre({ commit, state }) {
		const res = await tvShowsServices.getRequestDetails('/shows');		
		commit( 'SET_ALL_SHOWS_LIST', res.data );			
		state.allShowsList.sort(function(a, b) {
			return b.rating.average - a.rating.average;
		});
	},
	// make API call for search
	async getTopShowsbySearch({ commit}, searchvalue) {					
		commit('SET_SEARCH_VALUE', searchvalue)
		const res = await tvShowsServices.getRequestDetails(
			'/search/shows?q=' + searchvalue
		);		
		commit('SET_SEARCH_SHOWS_LIST', res.data);					
	},
	// make API call for Show details
	async getShowDetails ( { commit, state }, id )
	{
		commit( 'SET_SHOW_ID', id )				
		const res = await tvShowsServices.getRequestDetails(
			'/shows/' + state.showId )		
		if ( res.data )
		{			
			commit( 'SET_IS_VALID_ID', true )
			commit( 'SET_SHOW_DETAILS', res.data );
		}
		else					
			commit( 'SET_IS_VALID_ID', false )		
	},
	// make API call for season details
	async getSeasonEpisodeDetails ( { commit, state })
	{		
		const res = await tvShowsServices.getRequestDetails(
			'/shows/' + state.showId + '/seasons')		
		commit( 'SET_SEASON_DETAILS', res.data );	
		const episoderes = await tvShowsServices.getRequestDetails(
					'/shows/' + state.showId + '/episodes')		
		commit('SET_EPISODE_DETAILS', episoderes.data);
	},
	// make API call for episode details
	// async getEpisodeDetails ( { commit, state } )
	// {		
							
	// },
	// get the shows list by genre
	getShowslist ( { commit }, value )
	{	
		commit( 'SET_SHOWS_LIST_BY_GENRE', value )			
	},	
	// get the search results
	getSearchResult({commit}, value){
		commit('SET_SEARCH_RESULTS_LIST', value)
	},
	// get the search value
	getSearchValue ( { commit }, value )
	{
		commit('SET_SEARCH_VALUE', value)
	},
	//get is valid id
	getisValid ( { commit }, value )
	{
		commit('SET_IS_VALID_ID', value)
	}
};

export default actions;