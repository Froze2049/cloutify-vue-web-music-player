import moment from "moment";

const methods = {
  // 对所有歌单中的歌曲进行整理
  formatSongs: (allSongsRaw) => {
    const allSongsFormat = [];
    // 整理歌曲的数据
    for (const [key, value] of Object.entries(allSongsRaw)) {
      // 歌手名字
      let newSinger = value.ar[0].name;
      if (value.ar.length > 1) {
        for (let i = 1; i < value.ar.length; i++) {
          newSinger += "/" + value.ar[i].name;
        }
      }
      // 专辑名
      const albumName = value.al.name;
      //时长
      const formatDate = moment(value.dt).format("mm:ss");
      let isVIP = false;
      if (value.fee === 0 || value.fee === 1) {
        isVIP = true;
      }
      const newSong = {
        index: +key + 1,
        title: value.name,
        singer: newSinger,
        album: albumName,
        time: formatDate,
        id: value.id,
        pic: value.al.picUrl,
        isVIP: isVIP,
      };
      allSongsFormat.push(newSong);
    }
    return allSongsFormat;
  },

  // 对所有搜索结果返回的歌曲进行整理
  formatResults: (allResultsRaw) => {
    const allResultsFormat = [];
    // 整理歌曲的数据
    for (const [key, value] of Object.entries(allResultsRaw)) {
      // 歌手名字
      let newSinger = value.artists[0].name;
      if (value.artists.length > 1) {
        for (let i = 1; i < value.artists.length; i++) {
          newSinger += "/" + value.artists[i].name;
        }
      }
      // 专辑名
      const albumName = value.album.name;
      //时长
      const formatDate = moment(value.duration).format("mm:ss");
      let isVIP = false;
      if (value.fee === 0 || value.fee === 1) {
        isVIP = true;
      }
      const newSong = {
        index: +key + 1,
        title: value.name,
        singer: newSinger,
        album: albumName,
        time: formatDate,
        id: value.id,
        pic: value.album.picUrl,
        isVIP: isVIP,
      };
      allResultsFormat.push(newSong);
    }
    return allResultsFormat;
  },
};

export default methods;
