import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import AllShowsComponent from '@/components/AllShowsComponent.vue';
import VueRouter from 'vue-router'
import { routes } from '../../../src/router/index.js'

describe('In All Shows component', () => {
  let allshowsWrapper;
  let localVue;
  let mockStore;
  const router = new VueRouter({routes})
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use( VueRouter );
    const isSearch = false
    const allShowsList =  [
              {
                "id":1,
                "url":"http://www.tvmaze.com/shows/1/under-the-dome",
                "name":"Under the Dome",
                "type":"Scripted",
                "language":"English",
                "genres":["Drama","Science-Fiction","Thriller"],
                "status":"Ended","runtime":60,"premiered":"2013-06-24",
                "officialSite":"http://www.cbs.com/shows/under-the-dome/",
                "schedule":{"time":"22:00","days":["Thursday"]},
                "rating":{"average":6.5},
                "weight":97,
                "network":
                {
                  "id":2,
                  "name":"CBS",
                  "country":
                  {
                    "name":"United States",
                    "code":"US",
                    "timezone":"America/New_York"
                  }
                },
                "webChannel":null,
                "externals":
                {
                  "tvrage":25988,
                  "thetvdb":264492,
                  "imdb":"tt1553656"
                },
                "image":{
                  "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
                  "original":"http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
                },
                "summary":"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
                "updated":1573667713,
                "_links":
                {
                  "self":
                  {
                    "href":"http://api.tvmaze.com/shows/1"
                  },
                  "previousepisode":
                  {
                    "href":"http://api.tvmaze.com/episodes/185054"
                  }
                }
              }
            ]
    mockStore = {
      state: {  allShowsList },
      getters: { isSearch },
      dispatch: jest.fn(),
    };
    allshowsWrapper = shallowMount(AllShowsComponent, {
      mocks: {
        $store: mockStore,
      },
      localVue,
      router
    });
  });
  it('is a Vue instance', () => {
    expect(allshowsWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(allshowsWrapper.html()).toContain('<div class="mrl mb">');
  });

  it('it should have a div element with class="mrl mb"', () => {
    expect(allshowsWrapper.attributes('class')).toBe('mrl mb');
  });

  it('It should have a button', () => {
    expect(allshowsWrapper.findAll('[type="button"]').length).toBe(1);
  });

  it('It should render an image tag', () => {
    expect(allshowsWrapper.find('[type="img"]')).toBeTruthy();
  });

});
