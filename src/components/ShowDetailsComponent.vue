<template>
	<div class="mrl-15 mb">
		<div v-if="isValidID">
			<div class="container">
				<div class="row mb-10">
					<div class="col-12 col-sm-9 col-md-8 col-lg-9">
						<h2 class="text-style">
							<b>{{ showDetails.name }} </b> | {{ showDetails.language }}
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
							v-if="showDetails.image"
							:src="showDetails.image.original"
							class="one-image-size mt-10"
						/>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<p
							class="show-font"
							v-html="showDetails.summary"
							align="justify"
						></p>
						<p class="show-font" align="left">
							<b>Genres : </b>
							<span v-for="(genre, index) in showDetails.genres" :key="index"
								>{{ genre
								}}<span v-if="index != showDetails.genres.length - 1"
									>,
								</span></span
							>
						</p>						
						<p class="show-font" align="left" v-if="showDetails.rating">
							<b>Rating : </b>{{ showDetails.rating.average }}/10
						</p>
						<p class="show-font" align="left" v-else><b> Rating not available</b></p>
						<p class="show-font" align="left">
							<b>Seasons : </b>{{ seasonDetails.length }}
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
			<div class="col-12 col-sm-4 col-md-4 col-lg-3 text-left pd-t text-display">
				<button type="button" @click="goToHome">Home</button>
			</div>
		</div>
	</div>
</template>

<script>			
	import { mapState, mapActions } from 'vuex';
	export default {
		name: 'ShowDetailsComponent',		
		data() {
			return {				
			
			};
		},
		computed: {...mapState(['showDetails', 'seasonDetails', 'episodeDetails', 'isValidID'])},
		methods: {
			...mapActions([
				'getShowDetails', 'getSeasonEpisodeDetails', 'getSearchValue', 'getisValid'
			]),
			// get selected show details
			async getSelectedShowDetails() {	
				if(isNaN(this.$route.params.id)){							
				this.getisValid(false)	
				}
				else{																
				await this.getShowDetails(this.$route.params.id)	
				if(this.isValidID){							
				this.getSeasonEpisodeDetails()				
				}	
				}										
			},
			// redirect to home
			goToHome() {
				this.getSearchValue('')
				this.$router.push('/');
			}
		},
		created: function() {
			this.getSelectedShowDetails();
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
