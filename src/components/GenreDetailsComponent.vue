<template>
<div>
	<div class="container">
		<div class="row">
			<div class="col-6 col-sm-6 col-md-8 col-lg-9">
				<h2 class="text-style text-left text-display" v-if='genre==="Top 50"'>
					<b>Top Shows</b>
				</h2>
				<h2 class="text-style text-left text-display" v-else>
					<b>{{ genre }}</b>
				</h2>
			</div>
			<div class="col-6 col-sm-6 col-md-4 col-lg-3 text-right text-display">
				<button tyle="button" @click="getShowsListbyGenre">
					All {{ genre }} shows
				</button>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div
				class="col-6 col-sm-4 col-md-3 col-lg-2"
				v-for="show in showdetails.slice(0, 6)"
				:key="show.id"
			>
				<img
					v-if="show.image"
					:src="show.image.original"
					:alt="show.name"
					@click="goShowDetails(show.id)"
					class="image-size"
				/>
				<b
					><p class="text-style text-size">
						Rating: {{ show.rating.average }}/10
					</p></b
				>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
	/* eslint-disable */
	import store from '../store/index.js';
	export default {
		props: ['genre', 'showdetails'],
		methods: {
			// redirect to show details
			goShowDetails(id) {
				this.$router.push('/showdetails/' + id);
			},
			// redirect to all shows by genre
			getShowsListbyGenre() {
				this.$router.push('/AllShows/' + this.genre);
			},
		},
	};
</script>
<style scoped>
	.btn-mr {
		margin-left: 7px;
	}
</style>
