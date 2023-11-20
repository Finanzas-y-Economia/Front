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

        var precio_activo;
        var plan_plago;
        var p_cuota_inicial;
        var p_cuota_final;
        var p_tasa_interes;
        var t_tasa_interes;
        var periodo_capitalizacion = 30;
        var frecuencia_pago = 30;
        var n_dias_a = 360;


        //Datos costes/gastos iniciales
        var coste_notarial;
        var coste_registral;
        var tasacion;
        var comision_estudio;
        var comision_activacion;

        //Datos costes/gastos periodicos
        var gps;
        var portes;
        var gastos_administracion;
        var p_seguro_desgrav_m = 0.049;
        var p_seguro_riesgo_m = 0.029;
        var t_descuento = 50;
        var TEA;

     //   var TEA;
/*      this.TEA = calcularTasa(this.t_tasa_interes, this.p_tasa_interes, this.n_dias_a, this.periodo_capitalizacion);
      this.TEM = calcularTEM(this.TEA, this.frecuencia_pago, this.n_dias_a);
      this.n_cuotas_a = this.n_dias_a / this.frecuencia_pago;
      this.n_total_cuotas = this.plan_plago;
      this.cuota_inicial_valor = this.precio_activo * (this.p_cuota_inicial / 100);
      this.cuota_final_valor = this.precio_activo * (this.p_cuota_final / 100);
      this.monto_prestamo =
        this.precio_activo - this.cuota_inicial_valor + (this.coste_notarial + this.coste_registral + this.tasacion + this.comision_estudio + this.comision_activacion);
      this.saldo_financiado = this.monto_prestamo - this.cuota_final_valor / Math.pow(1 + this.TEM / 100, this.n_total_cuotas + 1);
      this.saldo_financiado = Number(this.saldo_financiado.toFixed(2));
      this.cuotaR = (-1 * this.saldo_financiado * (this.TEM / 100)) / (1 - Math.pow(1 + this.TEM / 100, -this.n_total_cuotas));
      this.cuotaR = Number(this.cuotaR.toFixed(2));
 */









     

      const toggleSwitch = () => {
        checked.true = !checked.false;
      };

      // Calcula la moneda y el modo de moneda según el valor de checked
      const currencyMode = computed(() => (checked.value ? 'currency' : 'currency'));
      const currency = computed(() => (checked.value ? 'USD' : 'PEN'));
      const locale2= computed(()=>(checked.value ? 'en-US':'es-PE'));
 
    //  var TEA = calcularTasa(t_tasa_interes,p_tasa_interes,n_dias_a,periodo_capitalizacion);

     
      return {
     p_tasa_interes,
     t_tasa_interes,
     periodo_capitalizacion,
     frecuencia_pago,
     n_dias_a ,
     TEA,

    //Datos costes/gastos iniciales
     coste_notarial,
     coste_registral,
     tasacion,
     comision_estudio,
     comision_activacion,

    //Datos costes/gastos periodicos
     gps,
     portes,
     gastos_administracion,
     p_seguro_desgrav_m,
    p_seguro_riesgo_m,
     t_descuento ,
    


        p_cuota_final,
        p_cuota_inicial,
        plan_plago,
        precio_activo,


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

      calcularTasa(t_tasa_interes,p_tasa_interes,n_dias_a,periodo_capitalizacion){
        if(t_tasa_interes == "TNA"){
            var resultado = Math.pow(1 + (p_tasa_interes/100)/(n_dias_a/periodo_capitalizacion),n_dias_a/periodo_capitalizacion)-1;
            resultado = resultado*100;
            return Number(resultado.toFixed(7));
        }else{
            return p_tasa_interes;
        }},

        calcularTEM(TEA, frecuencia_pago, n_dias_a){
        var resultado = Math.pow((1+(TEA/100)), frecuencia_pago/n_dias_a)-1;
        resultado = resultado*100;

        return Number(resultado.toFixed(7));

        
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
