import { shallowMount, createLocalVue } from '@vue/test-utils';
import ShowDetailsComponent from '@/components/ShowDetailsComponent.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import { routes } from '../../../src/router/index.js'

describe('In show details component', () => {
  let detailsWrapper;
  let localVue;   
  const router = new VueRouter( { routes } )
  const showDetails = {"id":1,"url":"http://www.tvmaze.com/shows/1/under-the-dome","name":"Under the Dome","type":"Scripted","language":"English","genres":["Drama","Science-Fiction","Thriller"],"status":"Ended","runtime":60,"premiered":"2013-06-24","officialSite":"http://www.cbs.com/shows/under-the-dome/","schedule":{"time":"22:00","days":["Thursday"]},"rating":{"average":6.5},"weight":97,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":25988,"thetvdb":264492,"imdb":"tt1553656"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"},
    "summary":"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>","updated":1573667713,"_links":{"self":{"href":"http://api.tvmaze.com/shows/1"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/185054"}}},
    mockStore = {
      state: {  showDetails },
      dispatch: jest.fn(),
    };
  beforeEach(() => {
    localVue = createLocalVue();  
    localVue.use(Vuex);  
    localVue.use(VueRouter);
    detailsWrapper = shallowMount(ShowDetailsComponent, {
      localVue,
      router,
      mocks: {
        $store: mockStore,
      },
    });
  });
  it('is a Vue instance', () => {
    expect(detailsWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(detailsWrapper.html()).toContain('<div class="mrl-15 mb">');
  });

  it('it should have a div element with calss="mrl-15 mb', () => {
    expect(detailsWrapper.attributes('class')).toBe('mrl-15 mb');
  });

  it('It should have a button', () => {
    expect(detailsWrapper.findAll('[type="button"]').length).toBe(1);
  });

  it('It should render an image tag', () => {
    expect(detailsWrapper.find('[type="img"]')).toBeTruthy();
  });
});
