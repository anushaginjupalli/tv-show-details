import { shallowMount, createLocalVue } from '@vue/test-utils';
import FooterComponent from '@/components/FooterComponent.vue';

describe('In footer component', () => {
  let footerWrapper;
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    footerWrapper = shallowMount(FooterComponent, {
      localVue,
    });
  });
  it('is a Vue instance', () => {
    expect(footerWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(footerWrapper.html()).toContain('<div id="footer">');
  });

  it('it should have a div element with id as footer', () => {
    expect(footerWrapper.attributes('id')).toBe('footer');
  });
  
  it('it should have a footer text as Copyright@reviewstory India Pvt. Ltd.', () => {
    expect(footerWrapper.text()).toMatch('Copyright@reviewstory India Pvt. Ltd.')
  });
});
