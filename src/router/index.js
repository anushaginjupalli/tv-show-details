import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageComponent from '../components/HomePageComponent.vue';
import ShowDetailsComponent from '../components/ShowDetailsComponent.vue';
import AllShowsComponent from '../components/AllShowsComponent.vue';

Vue.use(VueRouter)
const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePageComponent,
	},
	{
		path: '/showdetails/:id',
		name: 'ShowDetails',
		component: ShowDetailsComponent,
	},
	{
		path: '/AllShows/:Genre',
		name: 'AllShows',
		component: AllShowsComponent,
	},	
	{
		path: '/:catchAll(.*)',
		redirect: '/',
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
  })
  
  export default router
