import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const state = {
	showsListByGenre: [],
	allShowsList: [],
	topRatedShows: [],
	searchResultsList: [],	
	isSearch: false,
	searchValue: '',
	searchShowList: [],	
	detailsURL: '/shows'
};

export default new Vuex.Store({
	plugins: [createPersistedState()],
	state,
	actions,
	mutations,
	modules: {},
  })
