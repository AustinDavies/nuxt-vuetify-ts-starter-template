import { MutationTree } from 'vuex';
import { UIState, Mutations } from './types';

export const mutations: MutationTree<UIState> = {
  [Mutations.toggleHeader](state) {
    state.sidebar = !state.sidebar
  }
};
