<template>
  <div>
    <div class="toolbar">
      <router-link to="/bankhome">
        <span class="title">BKL</span>
      </router-link>
      <div class="buttons">
        <router-link to="/home">
          <button class="button">Log out</button>
        </router-link>
      </div>
    </div>
  
    <Pv-DataTable :value="data" tableStyle="min-width: 50rem">
      <Pv-Column field="id" header="Id" sortable style="width: 10%" />
      <Pv-Column field="name" header="Nombre" style="width: 20%" />
      <Pv-Column field="correo" header="Estado" style="width: 20%" />
      <Pv-Column field="password" header="Especie" style="width: 20%" />
      <Pv-Column field="users" header="Género" style="width: 20%" />
    </Pv-DataTable>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://13.59.215.202:8080/clients')
        .then(response => {
          this.data = response.data; // Ajusta según la estructura de tu respuesta
        })
        .catch(error => {
          console.error('Error al obtener datos de la API', error);
        });
    }
  }
};
</script>
