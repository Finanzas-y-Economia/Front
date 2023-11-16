<template>
<<<<<<< Updated upstream
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
      
=======
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

  <Pv-DataTable :value="products" tableStyle="min-width: 50rem">
    <Pv-Column field="code" header="Nombre" sortable style="width: 16%" />
    <Pv-Column field="name" header="Tasa de Interes" sortable style="width: 16%" />
    <Pv-Column field="name" header="Moneda" sortable style="width: 16%" />
    <Pv-Column field="category" header="Prestamo" sortable style="width: 16%" />
    <Pv-Column field="quantity" header="Plazo de pago" sortable style="width: 16%" />
    <Pv-Column field="quantity" header="Cuota" sortable style="width: 16%" />
  </Pv-DataTable>
>>>>>>> Stashed changes
</template>
<script>
<<<<<<< Updated upstream
</script>
=======

</script>
>>>>>>> Stashed changes
