import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const state = {
	showsListByGenre: [],
	allShowsList: [],
	searchResultsList: [],	
	showDetails: {},
	searchValue: '',
	showId: null,
	searchShowList: [],	
	seasonDetails: [],
	episodeDetails: [],
	noOfSeasons: null,
	noOfEpisodes: null,
	isValidID: true
};
const getters = {
	isSearch: ( state ) => { return state.searchValue != '' }	
}

export default new Vuex.Store({
	plugins: [createPersistedState()],
	state,
	getters,
	actions,
	mutations,
	modules: {},
  })
