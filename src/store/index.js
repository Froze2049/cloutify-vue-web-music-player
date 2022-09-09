import { createStore } from "vuex";

const useStore = createStore({
  state() {
    return {
      playlist: [
        {
          al: {
            id: null,
            name: "",
            pic: null,
            picUrl: "",
            pic_str: "",
          },
          id: null,
        },
      ],
      playlistIndex: null,
      isdeed: true,
    };
  },
  actions: {},
  mutations: {
    updatePlaylist(state, value) {
      state.playlist = value;
    },
  },
  getters: {
    connected(state) {
      return state.isdeed;
    },
  },
});

export default useStore;
