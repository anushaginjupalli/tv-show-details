<template>
<div id="app">
	<div>
		<HeaderComponent></HeaderComponent>
	</div>
	<router-view />
	<div>
		<FooterComponent></FooterComponent>
	</div>
	</div>
</template>

<script>
	import HeaderComponent from '../src/components/HeaderComponent';
	import FooterComponent from '../src/components/FooterComponent';
	export default {
		components: {
			HeaderComponent,
			FooterComponent,
		},
	};
</script>
<style lang="scss">
	#app {		
		text-align: center;		
	}
</style>
