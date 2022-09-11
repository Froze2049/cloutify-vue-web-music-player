import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      playlist: [
        {
          index: 0,
          title: "",
          singer: "",
          // album: "",
          // time: "",
          id: 0,
          pic: "https://s4.music.126.net/style/web2/img/default/default_album.jpg",
        },
      ],
      playlistIndex: 1,
      isPlaying: false,
      audioDom: null,
      searchValue: "",
      selectedItem: "",
    };
  },
  actions: {},
  mutations: {
    updatePlaylist(state, value) {
      state.playlist = value.playlist;
      state.playlistIndex = value.index;
      console.log("dssd");
      console.log(state.playlistIndex);
    },
    updateIsPlaying(state, value) {
      if (value) {
        state.audioDom.play();
      } else {
        state.audioDom.pause();
      }
      state.isPlaying = value;
    },
    updateAudioDom(state, value) {
      state.audioDom = value;
    },
    updateSearchValue(state, value) {
      state.searchValue = value;
    },
    updateSelectedItem(state, value) {
      state.selectedItem = value;
      console.log("3333535");
      console.log(value);
    },
  },
  getters: {
    playlist(state) {
      return state.playlist;
    },
    isPlaying(state) {
      return state.isPlaying;
    },
    nowPlaying(state) {
      return state.playlist[state.playlistIndex - 1];
    },
    searchValue(state) {
      return state.searchValue;
    },
    selectedItem(state) {
      return state.selectedItem;
    },
  },
});

export default store;
