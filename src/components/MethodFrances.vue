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
      <h2> Tipo de Moneda</h2>
      <div class="currency-container" style="align-items: center;">
        <span>Soles</span>
        <Pv-InputSwitch v-model="checked" @change="toggleSwitch" style="margin: 0 10px;" />
        <span>Dólares</span>
      </div>
      <div>
        <h2>Costo del Vehiculo</h2>
        <Pv-InputNumber v-model="value1" inputId="stacked-buttons" :mode="currencyMode" :currency="currency" />
      </div>
      <div>
        <h2>¿Cúanto quieres pagar de cuota incial?</h2>
        <Pv-InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" :mode="currencyMode" :currency="currency" />
      </div>
    </template>

    <template #footer>
      <router-link to="/methodfrances">
        <Pv-Button icon="pi pi-check" label="Ingresar" class="button" />
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
    const currency = computed(() => (checked.value ? 'USD' : 'SOL'));

    return {
   
      checked,
      toggleSwitch,
      value1,
      value3,
      currencyMode,
      currency,
    };
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
  width: 70vh;
  margin: 40px;
}
</style>