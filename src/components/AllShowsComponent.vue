<template>
	<div class="mrl mb">
		<SearchComponent></SearchComponent>		
		<div v-if="!isSearch && isValidGenre">
			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-6 col-md-8 col-lg-9">
						<h2 class="text-style text-left text-display">
							<b>All {{ genre }} shows</b>
						</h2>
					</div>
					<div
						class="col-12 col-sm-6 col-md-4 col-lg-3 text-right text-display"
					>
						<button type="button" @click="goToHome">Home</button>
					</div>
				</div>
			</div>
			<div v-if="genre === 'Top 50'" class="row">
				<div
					class="col-6 col-sm-4 col-md-3 col-lg-2"
					v-for="(show, index) in allShowsList.slice(0, 49)"
					:key="index"
				>
					<img
						v-if="show.image"
						:src="show.image.original"
						@click="goShowDetails(show.id)"
						class="image-size"
					/>
					<p
						v-if="show.rating.average != null"
						class="text-style text-size"
					>
						<b>Rating: {{ show.rating.average }}/10</b>
					</p>
					<p v-else class="text-style text-size">
						<b>Rating not available</b>
					</p>
				</div>
			</div>
			<div
				v-else
				class="container test-style"
				v-for="(genrelist, index) in showsListByGenre"
				:key="index"
			>
				<div class="row" v-if="genrelist.genre === genre">					
					<div
						class="col-6 col-sm-4 col-md-3 col-lg-2"
						v-for="(show, index) in genrelist.showsList"
						:key="index"
					>
						<img
							v-if="show.image"
							:src="show.image.original"
							@click="goShowDetails(show.id)"
							class="image-size"
						/>
						<p
							v-if="show.rating.average != null"
							class="text-style text-size"
						>
							<b>Rating: {{ show.rating.average }}/10</b>
						</p>
						<p v-else class="text-style text-size">
							<b>Rating not available</b>
						</p>
					</div>
				</div>
			</div>
		</div>		
		<div v-else-if='!isValidGenre' class="row">
			<div class="col-12 col-sm-8 col-md-8 col-lg-9">
			<h2 class="pd-t text-style text-color">No Results found</h2>
			</div>
			<div
						class="col-12 col-sm-4 col-md-4 col-lg-3 text-left pd-t text-display"
					>
						<button type="button" @click="goToHome">Home</button>
					</div>
		</div>
		<div v-else>
			<SearchResultsComponent></SearchResultsComponent>
		</div>
	</div>
</template>
<script>	
	import { mapState, mapGetters } from 'vuex';
	import SearchComponent from './SearchComponent';
	import SearchResultsComponent from './SearchResultsComponent';
	export default {
		data() {
			return {
				genre: '',
				isValidGenre: false,
				genresList: ['Action', 'Crime', 'Horror', 'Romance', 'Drama', 'Sci-Fi', 'Top 50']
			};
		},
		components: {
			SearchComponent,
			SearchResultsComponent,
		},
		computed: {...mapState(['showsListByGenre', 'allShowsList']),
			...mapGetters(['isSearch'])},
		methods: {
			//redirect to show details
			goShowDetails(id) {
				this.$router.push('/showdetails/' + id);
			},
			goToHome() {
				this.$router.push('/');
			},
		},
		created: function() {
			// check is valid genre or not		
			this.genre = this.$route.params.Genre;			
			if(this.genresList.includes(this.genre)){				
				this.isValidGenre = true
			}
			else{				
				this.isValidGenre = false
			}
			
		},
	};
</script>
<style scoped></style>
