import { shallowMount, createLocalVue } from '@vue/test-utils';
import HeaderComponent from '@/components/HeaderComponent.vue';

describe('In Header component', () => {
  let headerWrapper;
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    headerWrapper = shallowMount(HeaderComponent, {      
      localVue
    });
  });

  it('is a Vue instance', () => {
    expect(headerWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(headerWrapper.html()).toContain('<div id="header">');
  });

  it('it should have a div element with id as header', () => {
    expect(headerWrapper.attributes('id')).toBe('header');
  });

  it('it should have a title as ReV!ewStOry', () => {
    expect(headerWrapper.text()).toMatch('ReV!ewStOry')
  });

});
