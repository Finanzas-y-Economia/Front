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

    <Pv-DataTable :value="datas" tableStyle="min-width: 50rem">
      <Pv-Column field="id" header="Id" sortable style="width: 10%" />
      <Pv-Column field="image_front_url" header="Imagen" style="width: 20%">
        <template #body="slotProps">
          <img :src="slotProps.rowData.image_front_url" alt="Imagen del producto" />
        </template>
      </Pv-Column>
      <Pv-Column field="categories" header="Categoría" style="width: 20%">
        <template #body="slotProps">
          <p v-if="slotProps.rowData.categories">{{ slotProps.rowData.categories[0] }}</p>
        </template>
      </Pv-Column>
      <Pv-Column field="stores" header="Tienda" style="width: 20%" />
      <Pv-Column field="image_ingredients_url" header="Ingredientes" style="width: 20%">
        <template #body="slotProps">
          <img :src="slotProps.rowData.image_ingredients_url" alt="Imagen de ingredientes" />
        </template>
      </Pv-Column>
      <Pv-Column field="categories_imported" header="Categorías Importadas" style="width: 20%">
        <template #body="slotProps">
          <p v-if="slotProps.rowData.categories_imported">{{ slotProps.rowData.categories_imported[0] }}</p>
        </template>
      </Pv-Column>
    </Pv-DataTable>
  </div>
</template>

<script>
import { ApiService } from "@/services/api-service";

export default {
  name: "ThePeru",
  data() {
    return {
      datas: [],
      dataService: new ApiService(),
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const data = await this.dataService.getAll();
        this.datas = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async postData() {
      try {
        await this.dataService.postData(this.formData);
        console.log("Data posted successfully");
        // Puedes llamar a fetchData() aquí si deseas actualizar la lista después de enviar los datos
      } catch (error) {
        console.error("Error posting data:", error);
      }
    },
  },
};
</script>