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
  </div>
  
  
    <Pv-DataTable :value="data" tableStyle="min-width: 50rem">
      <Pv-Column field="id" header="Id" sortable style="width: 10%" />
      <Pv-Column field="name" header="Nombre" style="width: 20%" />
      <Pv-Column field="status" header="Estado" style="width: 20%" />
      <Pv-Column field="species" header="Especie" style="width: 20%" />
      <Pv-Column field="gender" header="Género" style="width: 20%" />
    </Pv-DataTable>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [], // Asegúrate de definir la propiedad 'data' en data
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
          // Asigna los datos a la propiedad 'data'
          this.data = response.data.results;
        })
        .catch(error => {
          // Maneja el error aquí
          console.error('Error al obtener datos de la API', error);
        });
    }
  }
};
</script>
