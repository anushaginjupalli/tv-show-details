<!-- @format -->

<template>
	<div class="mrl-15 mb">
		<SearchComponent></SearchComponent>		
		<div>
			<div v-if="!isSearch">
				<GenreDetailsComponent
					:showdetails="topRatedShows"
					genre="Top 50"					
				>
				</GenreDetailsComponent>				
				<div v-for="list in showsListByGenre" :key="list.id">
					<GenreDetailsComponent
						:showdetails="list.showsList"
						:genre="list.genre"						
					></GenreDetailsComponent>
				</div>
			</div>

			<div v-else>
				<SearchResultsComponent					
				></SearchResultsComponent>
			</div>
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	import store from '../store/index.js';
	import GenreDetailsComponent from './GenreDetailsComponent';
	import SearchComponent from './SearchComponent';
	import SearchResultsComponent from './SearchResultsComponent';
	import tvShowsServices from '../services/tvShowsServices.js';
	import { mapState } from 'vuex';
	export default {
		name: 'HomePageComponent',
		components: {
			GenreDetailsComponent,
			SearchComponent,
			SearchResultsComponent,
		},
		data() {
			return {	
				topRated: [],
								
				listByGenre: [
		{
			genre: 'Action',
			showsList: [],
		},
		{
			genre: 'Crime',
			showsList: [],
		},
		{
			genre: 'Horror',
			showsList: [],
		},
		{
			genre: 'Drama',
			showsList: [],
		},
		{
			genre: 'Sci-Fi',
			showsList: [],
		},
		{
			genre: 'Romance',
			showsList: [],
		},
	],
			};
		},
		computed: {...mapState(['allShowsList', 'showsListByGenre', 'topRatedShows', 'searchResultsList', 'isSearch'])},
		methods:{
			//get the shows list by genre
			getShowsListByGenre(){
				for (let i = 0; i < this.allShowsList.length; i++) {								
			for (let j = 0; j < this.allShowsList[i].genres.length; j++) {				
				switch (this.allShowsList[i].genres[j]) {
					case 'Action':											
						this.listByGenre[0].showsList.push(this.allShowsList[i])
						break;
					case 'Crime':						
						this.listByGenre[1].showsList.push(this.allShowsList[i])
						break;
					case 'Horror':
						this.listByGenre[2].showsList.push(this.allShowsList[i])
						break;
					case 'Drama':
						this.listByGenre[3].showsList.push(this.allShowsList[i])
						break;
					case 'Science-Fiction':
						this.listByGenre[4].showsList.push(this.allShowsList[i])
						break;
					case 'Romance':
						this.listByGenre[5].showsList.push(this.allShowsList[i])
						break;
				}
			}			
		}		
		for (let l = 0; l < this.listByGenre.length; l++) {			
			this.listByGenre[l].showsList.sort(function(a, b) {
				return b.rating.average - a.rating.average;
			});
		}
		this.$store.commit('SET_SHOWS_LIST_BY_GENRE', this.listByGenre)		
		this.allShowsList.sort(function(a, b) {
				return b.rating.average - a.rating.average;
			});
		this.topRated = this.allShowsList.slice(0,49);
		this.$store.commit('SET_TOP_RATED_SHOWS', this.topRated)
		}
		},
		created: function() {									
			this.$store.dispatch('getTopRatedbyGenre');		
			this.getShowsListByGenre();				
			
		}
	};
</script>
<style scoped></style>
