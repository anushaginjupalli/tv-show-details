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
	export default {
		data() {
			return {
				searchResults: []
			};
		},
		computed: {...mapState(['searchValue', 'searchShowList'])},		
		methods: {
			...mapActions([
				'getTopShowsbySearch', 'getSearchResult'
			]),
			// get shows details by search
			async getDatabySearch() {														
				await this.getTopShowsbySearch(this.$refs.search.value);
				this.searchResults = []
				if(this.searchShowList.length > 0){								
					this.searchShowList.forEach((searchShow)	=> {					
						this.searchResults.push(searchShow.show);
					})																							
					this.searchResults.sort(function(a, b) {
						return b.rating.average - a.rating.average;
					});
					this.getSearchResult(this.searchResults)
				}				
			}
		}	
	}
</script>
<style scoped>
	input.search-box {
		margin: 20px 20px;
		border-color: darkcyan;
	}
</style>
