import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Profile from '@/components/Profile.vue';
import store from '@/store/store';
import Vuetify from 'vuetify';
import { AxiosPlugin } from '@/axios-plugin';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuetify);
localVue.use(AxiosPlugin);

describe('Profile.vue', () => {
  it('can be instanced', () => {
    const wrapper = shallowMount(Profile, {
      store,
      localVue,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
