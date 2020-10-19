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
import { mapState, mapActions } from 'vuex';
	// import store from '../store/index.js';
	export default {
		data() {
			return {
				searchResults: []
			};
		},
		computed: {...mapState(['searchValue', 'searchShowList'])},
		methods: {
			...mapActions([
				'getTopShowsbySearch', 'getSearchValue', 'getSearchResult'
			]),
			// get shows details by search
			async getDatabySearch() {		
				this.searchResults = []										
				await this.getTopShowsbySearch(this.$refs.search.value);
				if(this.searchValue===''){
					this.getSearchValue(false)					
				}							
				else{					
					this.getSearchValue(true)														
					for (let i = 0; i < this.searchShowList.length; i++) {						
					this.searchResults.push(this.searchShowList[i].show);
					}					
					this.searchResults.sort(function(a, b) {
						return b.rating.average - a.rating.average;
					});
					this.getSearchResult(this.searchResults)
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
