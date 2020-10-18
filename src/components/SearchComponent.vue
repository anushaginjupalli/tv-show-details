<!-- @format -->

<template>
	<div class="container">
		<div class="row">
			<input
				class="form-control search-box"
				type="text"
				ref="search"
				placeholder="Search for TV shows"
				aria-label="Search"
				@keyup="getDatabySearch"
			/>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
	import store from '../store/index.js';
	export default {
		data() {
			return {
				searchResults: []
			};
		},
		computed: {...mapState(['searchValue', 'searchShowList'])},
		methods: {
			// get shows details by search
			async getDatabySearch() {		
				this.searchResults = []						
				this.$store.commit('SET_SEARCH_VALUE', this.$refs.search.value)
				await store.dispatch('getTopShowsbySearch');
				if(this.searchValue===''){
					this.$store.commit('SET_IS_SEARCH', false)
				}							
				else{					
					this.$store.commit('SET_IS_SEARCH', true)															
					for (let i = 0; i < this.searchShowList.length; i++) {						
					this.searchResults.push(this.searchShowList[i].show);
					}					
					this.searchResults.sort(function(a, b) {
				return b.rating.average - a.rating.average;
			});
					this.$store.commit('SET_SEARCH_RESULTS_LIST', this.searchResults)
				}				
			},
		},
	};
</script>
<style scoped>
	input.search-box {
		margin: 20px 20px;
		border-color: darkcyan;
	}
</style>
