const mutations = {
    SET_ALL_SHOWS_LIST(state, value) {
		state.allShowsList = value;
	},
	SET_SHOWS_LIST_BY_GENRE(state, value){
		state.showsListByGenre = value		
	},
	SET_TOP_RATED_SHOWS(state, value){
	state.topRatedShows = value
	},
	SET_SEARCH_SHOWS_LIST(state, value){
		state.searchShowList = value
	},
	SET_SEARCH_RESULTS_LIST(state, value){
		state.searchResultsList = value
	},
	SET_IS_SEARCH(state, value){
		state.isSearch = value
	},
	SET_SEARCH_VALUE(state, value){
		state.searchValue=value
	}
  };
  
  export default mutations;
  