import Vuex, { StoreOptions } from 'vuex';
import { state, RootState } from './root';
import actions from './root/actions';
import mutations from './root/mutations';
import ui from './ui';

const isDevelopmentMode = process.env.NODE_ENV !== 'production';

const store = () => {
  return new Vuex.Store(<StoreOptions<RootState>>{
    strict: isDevelopmentMode,
    state,
    actions,
    mutations,
    modules: {
      ui
    }
  });
};

export default store;
