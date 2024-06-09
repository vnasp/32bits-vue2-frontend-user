import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [],
  },
  getters: {
    totalStock(state) {
      return state.juegos.reduce((sum, juego) => sum + parseInt(juego.stock, 10), 0);
    },
    totalJuegos(state) {
      return state.juegos.length;
    }
  },
  mutations: {
    setJuegos(state, juegos) {
      state.juegos = juegos;
    },
    aumentarStock(state, codigo) {
      const juego = state.juegos.find((juego) => juego.codigo === codigo);
      if (juego) {
        juego.stock++;
      }
    },
    disminuirStock(state, codigo) {
      const juego = state.juegos.find((juego) => juego.codigo === codigo);
      if (juego && juego.stock > 0) {
        juego.stock--;
      }
    },
  },
  actions: {
    async getInventario(context) {
      try {
        const response = await axios.get("/juegos.json");
        context.commit("setJuegos", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    aumentarStock(context, codigo) {
      context.commit("aumentarStock", codigo);
    },
    disminuirStock(context, codigo) {
      context.commit("disminuirStock", codigo);
    },
  },
  modules: {},
});
