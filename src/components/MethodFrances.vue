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

        <h1 style="margin: 10px;">Metodo Frances </h1>

        <Pv-Card class="cardinfo">
           
            
            <template #content>
              <span> Tipo de Moneda</span>
              <div class="currency-container" style="align-items: center;">
               
                <span>Soles</span>
                <Pv-InputSwitch v-model="checked" @change="toggleSwitch" style="margin: 0 10px;"/>
                <span>Dólares</span>
              </div>
              
              <span>Costo del Vehiculo</span>
              <Pv-InputText type="text" v-model="value"   />


            </template>

            <template #footer>
              <router-link to="/methodfrances">
                <Pv-Button icon="pi pi-check" label="Ingresar"  class="button"/>
              </router-link>
            </template>
        </Pv-Card>
  
</template>


<style>
.currency-container {
  
  display: flex;
  align-items: center; /* Alinea verticalmente los elementos al centro */
}
.cardinfo{
  display: flex;
  width: 70vh;
  margin: 40px;
}
</style>


<script>
import { ref } from 'vue';

export default {
  setup() {
  
    const checked = ref(ref);
    
    const toggleSwitch = () => {
      checked.true = !checked.false;
    };

    return {
      checked,
      toggleSwitch,
    };
  },
};

</script>