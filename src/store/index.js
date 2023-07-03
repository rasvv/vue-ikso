import Vue from 'vue'
import Vuex from 'vuex'

import sitesJson from './sites.json'
import photosJson from './photos.json'
import hobbyJson from './hobby.json'
import handmadeJson from './handmade.json'
import dysnaiJson from './dysnai2005.json'
import aboutmeJson from './aboutme.json'

Vue.use(Vuex)

export default new Vuex.Store({
  data () {

  },
  state: {
    view: 'links', //режим отображения
    photoCurrentPage: [],
    cols: 'auto',
    mySitesJson: sitesJson,
    myPhotosJson: photosJson,
    myHobbyJson: hobbyJson,
    myHandmadeJson: handmadeJson,
    myDysnaiJson: dysnaiJson,
		aboutmeJson: aboutmeJson,
    album: photosJson, //текщий альбом (Фото, Хобби, Сайты)
    albumName: 'Фотографии',
		fontsize: 14

  },
  mutations: {
    setView (state, payload) {
      state.view = payload
    },
    setPhotoCurrentPage (state, payload) {
      state.photoCurrentPage = payload
    },
    setAlbum (state, payload) {
      console.log(payload);
      state.album = payload
    },
    setAlbumName (state, payload) {
      // console.log(payload);
      state.albumName = payload
    }					
  },
  actions: {
    updatePhotoCurrentPage ({ commit }, page) {
      return commit('setPhotoCurrentPage', page)
    },
    updateView ({ commit }, view) {
      console.log(view);
      return commit('setView', view)
    },
    updateAlbum ({ commit }, album) {
      console.log('updateAlbum ' + album);

      // if (album === 'myHobbyLinks')
      // return commit('setAlbum', this.state.myHobbyJson)
      // else if (album === 'myPhotosLinks')
      // return commit('setAlbum', this.state.myPhotosJson)
      return commit('setAlbum', album)
    },
    updateAlbumName ({ commit }, albumName) {
      return commit('setAlbumName', albumName)
    },		
        // updateLink({ commit }, link)
  },
  getters: {
    getView: state => state.view,
    getPhotoCurrentPage: state => state.photoCurrentPage,
    getAboutme: state => state.aboutmeJson,
    getAlbum: state => state.album,
    getAlbumName: state => state.albumName,
    getPhotosLinks: state => state.myPhotosJson,
    getHobbyLinks: state => state.myHobbyJson,
    getHandmadeLinks: state => state.myHandmadeJson,
    getDysnaiLinks: state => state.myDysnaiJson,
    getSitesLinks: state => state.mySitesJson
  }
})