<template>
    <div class="toolbar">
    <router-link to="/bankhome" >
          <span class="title" >BKL</span>
        </router-link>
          <div class="buttons">

            <router-link to="/home">
              <button class="button" >Log out</button>
            </router-link>

          </div>
      </div>
      

      <Pv-DataTable :value="products" tableStyle="min-width: 50rem">
            <Pv-Column field="code" header="Code" sortable style="width: 25%"></Pv-Column>
            <Pv-Column field="name" header="Name" sortable style="width: 25%"></Pv-Column>
            <Pv-Column field="category" header="Category" sortable style="width: 25%"></Pv-Column>
            <Pv-Column field="quantity" header="Quantity" sortable style="width: 25%"></Pv-Column>
        </Pv-DataTable>

</template>
<script>

//aca debe ir el servicio para almacenar la info de los usuarios :D
// import { ref, onMounted } from 'vue';
// import { ProductService } from '@/service/ProductService';

// onMounted(() => {
//     ProductService.getProductsMini().then((data) => (products.value = data));
// });

// const products = ref();


</script>