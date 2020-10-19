<template>
	<div class="container mb">
		<div class="row" v-if="searchResultsList.length > 0">
			<div
				class="col-12 col-sm-4 col-md-3 col-lg-2"
				v-for="show in searchResultsList"
				:key="show.id"
			>
				<div v-if="show.image && show.rating.average != null">
					<img
						:src="show.image.original"
						:alt="show.name"
						@click="goShowDetails(show.id)"
						class="image-size"
					/>
					<p class="text-style text-size">
						<b>Rating: {{ show.rating.average }}/10</b>
					</p>
				</div>
				<div v-else-if="!show.image && show.rating.average === null">
					<p align="center" class="text-style text-size img-not-margin">
						Image and rating not available for <b> {{ show.name }}</b>
					</p>
				</div>
				<div v-else-if="!show.image && show.rating.average != null">
					<p class="text-style text-size">
						Image not available for <b> {{ show.name }}</b>
					</p>
					<p class="text-style text-size">
						<b>Rating: {{ show.rating.average }}/10</b>
					</p>
				</div>
				<div v-else>
					<img
						:src="show.image.original"
						:alt="show.name"
						@click="goShowDetails(show.id)"
						class="image-size"
					/>
					<p class="text-style text-size">Rating not available</p>
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
import { mapActions, mapState } from 'vuex';	
	export default {
		computed: {...mapState(['searchResultsList'])},
		methods: {
			...mapActions([
				'getSearchValue'
			]),
			// redirect to show details
			goShowDetails(id) {
				this.getSearchValue(false)				
				this.$router.push('/showdetails/' + id);
			},
			// redirect to home page
			goToHome() {
				this.getSearchValue(false)
				this.$router.push('/');
			}
		}
	};
</script>
<style scoped></style>
