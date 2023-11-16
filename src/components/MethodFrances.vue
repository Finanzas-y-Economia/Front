<template>
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

  <h1 style="margin: 10px;">Metodo Frances</h1>

  <Pv-Card class="cardinfo">
    <template #content>
      <h2>Tipo de Moneda:</h2>
      <div class="currency-container" style="align-items: center;">
        <span>Soles</span>
        <Pv-InputSwitch v-model="checked" @change="toggleSwitch" style="margin: 0 10px;" />
        <span>Dólares</span>
      </div>
      <div>
        <h2>Costo del Vehiculo:</h2>
        <Pv-InputNumber v-model="value1" inputId="stacked-buttons" :mode="currencyMode" :currency="currency" :locale="locale2"  />
     
      </div>
      <div>
        <h2>¿Cúanto quieres pagar de cuota inicial?:</h2>
        <Pv-InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" :mode="currencyMode" :currency="currency"  :locale="locale2" />
      
      </div>
      <div>
        <h2>Seleccione el tiempo para el préstamo:</h2>
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




</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const checked = ref(false);
    const value1 = ref('');
    const value3 = ref('');
   
    const toggleSwitch = () => {
      checked.true = !checked.false;
    };

    // Calcula la moneda y el modo de moneda según el valor de checked
    const currencyMode = computed(() => (checked.value ? 'currency' : 'currency'));
    const currency = computed(() => (checked.value ? 'USD' : 'PEN'));
    const locale2= computed(()=>(checked.value ? 'en-US':'es-PE'));
    return {
   
      checked,
      toggleSwitch,
      value1,
      value3,
      locale2,
      currencyMode,
      currency,
    };
  },
  data() {
  return {
    value: 12
  }
},
methods: {
    updateSlider() {
      // Asegúrate de que el valor esté dentro del rango 12-36
      if (this.value < 12) {
        this.value = 12;
      } else if (this.value > 36) {
        this.value = 36;
      }
    },
  },
};

</script>

<style>
.currency-container {
  
  display: flex;
  align-items: center; /* Alinea verticalmente los elementos al centro */
}
.cardinfo{
  display: flex;
  margin: auto;
  width: 70vh;
  align-items: center;
  justify-content: center;
  
}

@media (max-width:600px) {
  .cardinfo{
    width: 90%;
  }
}
</style>
