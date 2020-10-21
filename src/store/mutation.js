const mutations = {
    SET_ALL_SHOWS_LIST(state, value) {
		state.allShowsList = value;		
	},
	SET_SHOWS_LIST_BY_GENRE ( state, value )
	{
		state.showsListByGenre = value
	},	
	SET_SEARCH_SHOWS_LIST(state, value){
		state.searchShowList = value
	},
	SET_SEARCH_RESULTS_LIST(state, value){
		state.searchResultsList = value
	},
	SET_SEARCH_VALUE(state, value){
		state.searchValue=value
	},
	SET_SHOW_ID(state, value){
		state.showId = value
	},
	SET_SHOW_DETAILS ( state, value )
	{
		state.showDetails = value
	},
	SET_SEASON_DETAILS ( state, value )
	{		
		state.seasonDetails = value		
	},
	SET_EPISODE_DETAILS ( state, value )
	{
		state.episodeDetails = value
	},
	SET_IS_VALID_ID ( state, value )
	{		
		state.isValidID = value
	}
};
  
export default mutations;
  