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


      <h1 style="margin: 10px;">Metodo Frances</h1>

<Pv-Card class="cardinfo">
  <template #content>
   
    <div>
      <h2>Costo del Vehiculo</h2>
      <Pv-InputNumber  v-model="value1" inputId="stacked-buttons" :mode="currencyMode" :currency="currency" :locale="locale2"  />
   
    </div>
    <div>
      <h2>¿Cúanto quieres pagar de cuota incial?</h2>
      <Pv-InputNumber  v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" :mode="currencyMode" :currency="currency"  :locale="locale2" />
    
    </div>


    
  </template>

  <template #footer>

      <Pv-Button icon="pi pi-check" label="Ingresar" class="botoncito"  />

  </template>
</Pv-Card>

</template>
<script>
</script>
<style>
.botoncito{
 
      background-color: #F97068;
      color: white;
      border: none;
   
      padding: 10px 20px;
     
      cursor: pointer;
      font-size: 20px;
      width: 150px;
  
}

</style>