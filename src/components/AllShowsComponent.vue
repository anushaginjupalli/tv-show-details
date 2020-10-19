<template>
	<div class="mrl-15 mb">
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
					v-for="show in topRatedShows"
					:key="show.id"
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
						v-for="show in genrelist.showsList"
						:key="show.id"
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
			<SearchResultsComponent
				:Allshowsdetails="$store.state.searchshows"
			></SearchResultsComponent>
		</div>
	</div>
</template>
<script>
	/* eslint-disable */
	import { mapState } from 'vuex';
	import SearchComponent from './SearchComponent';
	import SearchResultsComponent from './SearchResultsComponent';
	export default {
		data() {
			return {
				genre: '',
				isValidGenre: false
			};
		},
		components: {
			SearchComponent,
			SearchResultsComponent,
		},
		computed: {...mapState(['showsListByGenre', 'topRatedShows', 'isSearch'])},
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
			if(this.genre === 'Action' || this.genre === 'Crime' 
			|| this.genre === 'Horror' || this.genre=== 'Romance' 
			|| this.genre === 'Drama' || this.genre === 'Sci-Fi' || this.genre === 'Top 50'){				
				this.isValidGenre = true
			}
			else{				
				this.isValidGenre = false
			}
			
		},
	};
</script>
<style scoped></style>
