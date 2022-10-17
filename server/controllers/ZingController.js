const { ZingMp3 } = require("zingmp3-api-full");
const { zing } = require("zingmp3-api-next");

class ZingController {
  getSong(req, res) {
    ZingMp3.getSong(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getDetailPlaylist(req, res) {
    ZingMp3.getDetailPlaylist(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getHome(req, res) {
    zing.get_home().then((data) => {
      res.json(data);
    });
  }
  getRadio(req, res) {
    zing.get_radio().then((data) => {
      res.json(data);
    });
  }

  getTop100(req, res) {
    ZingMp3.getTop100().then((data) => {
      res.json(data);
    });
  }
  getCategory(req, res) {
    zing.get_hub_home().then((data) => {
      res.json(data);
    });
  }

  getCategoryDetail(req, res) {
    zing.get_hub_detail(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getChartHome(req, res) {
    ZingMp3.getChartHome().then((data) => {
      res.json(data);
    });
  }

  getNewReleaseChart(req, res) {
    ZingMp3.getNewReleaseChart().then((data) => {
      res.json(data);
    });
  }

  getInfo(req, res) {
    ZingMp3.getInfoSong(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getArtist(req, res) {
    ZingMp3.getArtist(req.query.name).then((data) => {
      res.json(data);
    });
  }

  getArtistSong(req, res) {
    ZingMp3.getListArtistSong(
      req.query.id,
      req.query.page,
      req.query.count
    ).then((data) => {
      res.json(data);
    });
  }

  getLyric(req, res) {
    ZingMp3.getLyric(req.query.id).then((data) => {
      res.json(data);
    });
  }
  // search All
  search(req, res) {
    ZingMp3.search(req.query.keyword).then((data) => {
      res.json(data);
    });
  }
  // searchRecommend
  searchRecommend(req, res) {
    zing.get_recommend_keyword().then((data) => {
      res.json(data);
    });
  }
  // searchSuggestion
  searchSuggestion(req, res) {
    zing.get_suggestion_keyword(req.query.keyword).then((data) => {
      res.json(data);
    });
  }

  getListMV(req, res) {
    ZingMp3.getListMV(req.query.id, req.query.page, req.query.count).then(
      (data) => {
        res.json(data);
      }
    );
  }

  getCategoryMV(req, res) {
    ZingMp3.getCategoryMV(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getVideo(req, res) {
    ZingMp3.getVideo(req.query.id).then((data) => {
      res.json(data);
    });
  }
}

module.exports = new ZingController();
