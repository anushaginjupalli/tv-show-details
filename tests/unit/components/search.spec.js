import { shallowMount, createLocalVue } from '@vue/test-utils';
import searchComponent from '@/components/SearchComponent.vue';

describe('In search component', () => {
  let searchWrapper;
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    searchWrapper = shallowMount(searchComponent, {        
      localVue,     
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
  
});