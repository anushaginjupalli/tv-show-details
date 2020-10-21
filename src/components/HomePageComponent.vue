<template>
	<div class="mrl mb">
		<SearchComponent></SearchComponent>		
		<div>
			<div v-if="!isSearch">
				<GenreDetailsComponent
					:showdetails="allShowsList"
					genre="Top 50"					
				>
				</GenreDetailsComponent>				
				<div v-for="(genreList, index) in showsListByGenre" :key="index">
					<GenreDetailsComponent
						:showdetails="genreList.showsList"
						:genre="genreList.genre"						
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
	import GenreDetailsComponent from './GenreDetailsComponent';
	import SearchComponent from './SearchComponent';
	import SearchResultsComponent from './SearchResultsComponent';	
	import { mapActions, mapState, mapGetters } from 'vuex';
	export default {
		name: 'HomePageComponent',
		components: {
			GenreDetailsComponent,
			SearchComponent,
			SearchResultsComponent,
		},
		data() {
			return {								
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
		computed: {...mapState(['allShowsList', 'showsListByGenre']),
			...mapGetters(['isSearch'])},
		methods:{
			...mapActions([
				'getTopRatedbyGenre', 'getShowslist'
			]),
			//get the shows list by genre
			async getShowsListByGenre(){
				await this.getTopRatedbyGenre();
				this.allShowsList.forEach (show =>  {								
					show.genres.forEach(genre =>  {										
						switch (genre) {
							case 'Action':											
								this.listByGenre[0].showsList.push(show)								
								break;
							case 'Crime':						
								this.listByGenre[1].showsList.push(show)
								break;
							case 'Horror':
								this.listByGenre[2].showsList.push(show)
								break;
							case 'Drama':
								this.listByGenre[3].showsList.push(show)
								break;
							case 'Science-Fiction':
								this.listByGenre[4].showsList.push(show)
								break;
							case 'Romance':
								this.listByGenre[5].showsList.push(show)
								break;
						}
					})
				})																													
				this.getShowslist(this.listByGenre)		
			}
		},
		created: function() {												
			this.getShowsListByGenre();										
		}
	};
</script>
<style scoped></style>
