import { Module } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { 
  UIState, 
  Mutations as UIMutations,
  Actions as UIActions,
  Getters as UIGetters 
} from './types';
import { RootState } from '~/store/root';

const UINamespace = 'ui';
const UIVuexClassNamepace = {namespace: UINamespace};
const namespaced: boolean = true;

export const state: UIState = {
  sidebar: false
};

export const ui: Module<UIState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
  getters
};

export { 
  UIState, 
  UIActions, 
  UIGetters, 
  UIMutations, 
  UINamespace, 
  UIVuexClassNamepace 
};

export default ui;
