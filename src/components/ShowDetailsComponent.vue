<template>
	<div class="mrl-15 mb">
		<div v-if="isValidID">
			<div class="container">
				<div class="row mb-10">
					<div class="col-12 col-sm-9 col-md-8 col-lg-9">
						<h2 class="text-style">
							<b>{{ oneShowDetails.name }} </b> | {{ oneShowDetails.language }}
						</h2>
					</div>
					<div
						class="col-12 col-sm-3 col-md-4 col-lg-3 text-right text-display"
					>
						<button type="button" class="mt-10" @click="goToHome">Home</button>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<img
							v-if="oneShowDetails.image"
							:src="oneShowDetails.image.original"
							class="one-image-size mt-10"
						/>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<p
							class="show-font"
							v-html="oneShowDetails.summary"
							align="justify"
						></p>
						<p class="show-font" align="left">
							<b>Genres : </b>
							<span v-for="(genre, index) in oneShowDetails.genres" :key="index"
								>{{ genre
								}}<span v-if="index != oneShowDetails.genres.length - 1"
									>,
								</span></span
							>
						</p>
						<p class="show-font" v-if="oneShowDetails.rating" align="left">
							<b>Rating : </b>{{ oneShowDetails.rating.average }}/10
						</p>
						<p class="show-font" v-else><b> Rating not available</b></p>
						<p class="show-font" align="left">
							<b>Seasons : </b>{{ noOfSeasons }}
						</p>
					</div>
				</div>
				<div>
					<ul class="nav nav-tabs nav-justified" id="myTab">
						<li class="nav-item" v-for="season in seasonDetails" :key="season.id">
							<a								
								:class="season.number ===1?'nav-link active': 'nav-link'"
								data-toggle="tab"
								:href="'#season' + season.number"
								>Season {{ season.number }}</a
							>
						</li>
					</ul>
				</div>
				<div class="tab-content" id="myTabContent">
					<div						
						:class="number === 1? 'tab-pane fade show active': 'tab-pane fade'"
						v-for="number in seasonDetails.length"
						:key="number"
						:id="'season' + number" 
					>
						<div class="row">
							<div
								v-for="(episode, index) in episodeDetails"
								:key="episode.id"
								:class="
									episode.season === number ? 'col-md-3 col-sm-3 col-xs-3' : ''
								"								
								style="margin-top:20px;text-align: left;" 
							>
								<div class="show-font episode-align" v-if="episode.season === number">  
									<div v-if="episode.image">
									<img
						:src="episode.image.original"
						:alt="episode.name"						
						class="episode-image-size"
					/>					
					</div>
					<div v-else>
						<p> image is not available</p>						
					</div>
								<p>	<b>{{ index + 1 }}. {{ episode.name }}</b></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="row">
			<div class="col-12 col-sm-8 col-md-8 col-lg-9">
			<h2 class="pd-t text-style text-color">No Results found</h2>
			</div>
			<div
						class="col-12 col-sm-4 col-md-4 col-lg-3 text-left pd-t text-display"
					>
						<button type="button" @click="goToHome">Home</button>
					</div>
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	import tvShowsServices from '../services/tvShowsServices.js';
	import SearchResultsComponent from './SearchResultsComponent';
	import store from '../store/index.js';
import { mapState } from 'vuex';
	export default {
		name: 'ShowDetailsComponent',
		components: {
			SearchResultsComponent,
		},
		data() {
			return {
				showDetailsURL: '/shows/' + this.$route.params.id,
				showSeasonsURL:
					'/shows/' + this.$route.params.id + '/seasons',
				showEpisodesURL:
					'/shows/' + this.$route.params.id + '/episodes',
				oneShowDetails: {},
				isValidID: false,
				seasonDetails: [],
				noOfSeasons: null,
				noOfEpisodes: null,
				episodeDetails: [],
			};
		},
		computed: {...mapState(['allShowsList', 'searchResultsList'])},
		methods: {
			// get selected show details
			async getShowDetails() {		
				const res = await tvShowsServices.getRequestDetails(
					this.showDetailsURL)							
				if(!res.data){
					this.isValidID = false
					return
				}						
				else{
					this.isValidID = true
					this.oneShowDetails = res.data;
					const seasonResponse = await tvShowsServices.getRequestDetails(
						this.showSeasonsURL
					);
					this.seasonDetails = seasonResponse.data;
					const episodeResponse = await tvShowsServices.getRequestDetails(
						this.showEpisodesURL
					);
					this.episodeDetails = episodeResponse.data;					
					this.noOfSeasons = this.seasonDetails.length					
					this.noOfEpisodes = this.seasonDetails[0].episodeOrder;					
				}
			},
			// redirect to home
			goToHome() {
				this.$router.push('/');
			}
		},
		created: function() {
			this.getShowDetails();
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.mt-10 {
		margin-top: 10px;
	}
	.one-image-size {
		height: 90%;
		width: 60%;
	}
	.episode-image-size {
	height: 100px;		
}
.episode-align{
	text-align: center;
}
</style>
