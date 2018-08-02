import Vuex from 'vuex';

declare module "vuex" {
  interface ActionTree<S, R> {
    $axios?: NuxtAxiosInstance;
  }
}
