<template>
    <div class="toolbar">
    <router-link to="/bankhome" >
          <span class="title" >BKL</span>
        </router-link>
          <div class="buttons">

            <router-link to="/home">
              <button class="button" >Log out</button>
            </router-link>

<<<<<<< Updated upstream
          </div>
      </div>

        <h1 style="margin: 10px;">Metodo Frances </h1>
=======
  <Pv-Card class="cardinfo">
    <template #content>
      <h2> Tipo de Moneda</h2>
      <div class="currency-container" style="align-items: center;">
        <span>Soles</span>
        <Pv-InputSwitch v-model="checked" @change="toggleSwitch" style="margin: 0 10px;" />
        <span>Dólares</span>
      </div>
      <div>
        <h2>Costo del Vehiculo</h2>
        <Pv-InputNumber v-model="value1" inputId="stacked-buttons" :mode="currencyMode" :currency="currency" :locale="locale2"  />
     
      </div>
      <div>
        <h2>¿Cúanto quieres pagar de cuota incial?</h2>
        <Pv-InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" :mode="currencyMode" :currency="currency"  :locale="locale2" />
      
      </div>
      <div>
        <h2>Seleccione el tiempo para el prestramo </h2>
        <span> min=12  - max =36</span>
        <Pv-InputText  v-model.number="value" @input="updateSlider"   disabled   style="margin: 10px;"/>
        <Pv-Slider v-model="value"   :min="12" :max="36"/>
      </div>

      
    </template>

    <template #footer>
      <router-link to="/credito">
        <Pv-Button icon="pi pi-check" label="Ingresar" class="botoncito"  />
      </router-link>
    </template>
  </Pv-Card>
>>>>>>> Stashed changes

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