import { shallowMount, createLocalVue } from '@vue/test-utils';
import searchComponent from '@/components/SearchComponent.vue';
import Vuex from 'vuex';

describe('In search component', () => {
  let searchWrapper;
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    let mockStore;
  //   actions = {
  //     getTopShowsbySearch: jest.fn()
  // };
  // mutations = {
  //   SET_SEARCH_VALUE: jest.fn()
  // };
    mockStore = {
      state: { },
      commit: jest.fn(),
      dispatch: jest.fn(),
    };
    searchWrapper = shallowMount(searchComponent, {        
      localVue,
      mocks: {
        $store: mockStore
      },
    });
  });

  it('is a Vue instance', () => {
    expect(searchWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(searchWrapper.html()).toContain('<div class="container">');
  });

  it('it should have a div element with class="container"', () => {
    expect(searchWrapper.attributes('class')).toBe('container');
  });
  
  it('renders a input type text tag', () => {
    expect(searchWrapper.find('[type="text"]')).toBeTruthy();
  });

  // it('on keyup trigger method', () => {    
  //   // searchWrapper.trigger('keyup', {
  //   //   key: 'a'
  //   // })
  //   // searchWrapper.trigger('keyup', a)
  //   const searchValue = 'a'
  //   searchWrapper.vm.getDatabySearch()
  //   console.log(mocks)
  //   expect(mocks.commit).toHaveBeenCalledWith('SET_SEARCH_VALUE', searchValue);
  //   // expect(wrapper.vm.getDatabySearch).toHaveBeenCalled(1)
  // })
  
});