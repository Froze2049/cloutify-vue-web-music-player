import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      playlist: [
        {
          al: {
            id: 142403729,
            name: "GABRIEL",
            pic: 109951167192120660,
            picUrl:
              "https://p2.music.126.net/-8zmfCy7SpFSkqZq5KzwEg==/109951167192120650.jpg",
            pic_str: "109951167192120650",
          },
          id: 1931536925,
        },
      ],
      playlistIndex: 0,
    };
  },
});

export default store;
