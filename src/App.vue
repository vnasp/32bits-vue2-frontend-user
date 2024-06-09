<template>
  <div id="app">
    <b-navbar variant="faded" type="light" class="bg-dark d-flex flex-column flex-md-row justify-content-between px-md-5">
      <b-navbar-brand href="#">
        <img :src="logo" alt="Tienda 32 Bits" width="100">
      </b-navbar-brand>
      <b-nav-text>
        <h2 class="text-white"><b-icon icon="controller"></b-icon> <span> Inventario de Juegos </span></h2>
      </b-nav-text>
    </b-navbar>

    <b-container class="bg-white border rounded-4 mt-4 p-4 shadow-custom">
      <b-row>
        <b-col cols="12" md="6" class="mb-4 mb-md-0">
          <p class="text-uppercase fs-3 fw-bold">Total Juegos: <span class="bg-dark px-3 py-1 rounded-pill text-white">{{ totalJuegos }}</span></p>
        </b-col>
        <b-col cols="12" md="6">
          <p class="text-uppercase fs-3 fw-bold">Total Stock: <span class="bg-dark px-3 py-1 rounded-pill text-white">{{ totalStock }}</span></p>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="bg-white border rounded-4 mt-4 p-4 shadow-custom">
      <b-row>
        <b-col>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Código</th>
                <th>Nombre</th>
                <th>Stock</th>
                <th class="d-none d-md-table-cell">Precio</th> <!-- Cambiado a d-md-table-cell -->
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="juego in juegos" :key="juego.codigo">
                <td :style="{ backgroundColor: juego.color, width: '5px' }"></td>
                <td>{{ juego.codigo }}</td>
                <td>{{ juego.nombre }}</td>
                <td>{{ juego.stock }}</td>
                <td class="d-none d-md-table-cell">{{ formatPrice(juego.precio) }}</td> <!-- Cambiado a d-md-table-cell -->
                <td class="d-flex flex-row justify-content-center">
                  <b-button @click="aumentarStock(juego.codigo)" variant="primary" class="me-1 p-1 p-md-2"><b-icon
                      icon="plus"></b-icon></b-button>
                  <b-button @click="disminuirStock(juego.codigo)" variant="warning" class="p-1 p-md-2"><b-icon
                      icon="dash"></b-icon></b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import logo from './assets/img/logo.png'

export default {
  name: 'App',
  data() {
    return {
      logo: logo
    }
  },
  computed: {
    ...mapState({
      juegos: state => state.juegos
    }),
    ...mapGetters(['totalStock', 'totalJuegos'])
  },
  mounted() {
    this.$store.dispatch('getInventario');
  },
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
      }).format(value);
    },
    ...mapActions(['aumentarStock', 'disminuirStock'])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url('./assets/img/bg.png');
  background-size: 20%;
  background-color: #F0F0F0;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

h2 span {
  font-family: 'Press Start 2P', cursive;
  font-size: 16px;
}

p {
  margin: 0 !important;
}

.shadow-custom {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
</style>