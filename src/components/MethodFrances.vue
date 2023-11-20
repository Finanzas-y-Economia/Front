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
    data() {
      return {
        // Datos del préstamo
        precio_activo: null,
        plan_plago: null,
        p_cuota_inicial: null,
        p_cuota_final: null,
        p_tasa_interes: null,
        t_tasa_interes: null,
        periodo_capitalizacion: 30,
        frecuencia_pago: 30,
        n_dias_a: 360,

        // Datos de costes/gastos iniciales
        coste_notarial: null,
        coste_registral: null,
        tasacion: null,
        comision_estudio: null,
        comision_activacion: null,

        // Datos de costes/gastos periódicos
        gps: null,
        portes: null,
        gastos_administracion: null,
        p_seguro_desgrav_m: 0.049,
        p_seguro_riesgo_m: 0.029,
        t_descuento: 50,

        // Resultados del financiamiento
        TEA: null,
        TEM: null,
        n_cuotas_a: null,
        n_total_cuotas: null,
        cuota_inicial_valor: null,
        cuota_final_valor: null,
        monto_prestamo: null,
        saldo_financiado: null,
        cuotaR: null,

        // Resultados de los costes/gastos
        p_seguro_desgrav_per: null,
        seguro_desgrav_valor: null,

        // Resultados totales
        intereses_total: null,
        amortizacion_capital_total: null,
        seguro_desgravamen_total: null,
        seguro_contra_todo_riesgo: null,
        gps_total: null,
        portes_total: null,
        gastosAdmin_totales: null,

        // Resultados Indicadores Rentabilidad
        tasa_descuento: null,
        TIR: null,
        TCEA: null,
        VAN: null,
      };
    },
    methods: {
      calcularTasa(t_tasa_interes, p_tasa_interes, n_dias_a, periodo_capitalizacion) {
        if (t_tasa_interes === "TNA") {
          var resultado = Math.pow(
              1 + (p_tasa_interes / 100) / (n_dias_a / periodo_capitalizacion),
              n_dias_a / periodo_capitalizacion
          ) - 1;
          resultado = resultado * 100;
          return Number(resultado.toFixed(7));
        } else {
          return p_tasa_interes;
        }
      },
      calcularTEM(TEA, frecuencia_pago, n_dias_a) {
        var resultado = Math.pow(1 + TEA / 100, frecuencia_pago / n_dias_a) - 1;
        resultado = resultado * 100;
        return Number(resultado.toFixed(7));
      },
    },
    created() {
      this.TEA = this.calcularTasa(this.t_tasa_interes, this.p_tasa_interes, this.n_dias_a, this.periodo_capitalizacion);
      this.TEM = this.calcularTEM(this.TEA, this.frecuencia_pago, this.n_dias_a);
      this.n_cuotas_a = this.n_dias_a / this.frecuencia_pago;
      this.n_total_cuotas = this.plan_plago;
      this.cuota_inicial_valor = this.precio_activo * (this.p_cuota_inicial / 100);
      this.cuota_final_valor = this.precio_activo * (this.p_cuota_final / 100);
      this.monto_prestamo =
          this.precio_activo -
          this.cuota_inicial_valor +
          (this.coste_notarial + this.coste_registral + this.tasacion + this.comision_estudio + this.comision_activacion);
      this.saldo_financiado =
          this.monto_prestamo -
          this.cuota_final_valor / Math.pow(1 + this.TEM / 100, this.n_total_cuotas + 1);
      this.saldo_financiado = Number(this.saldo_financiado.toFixed(2));
      this.cuotaR = (-1 * this.saldo_financiado * (this.TEM / 100)) / (1 - Math.pow(1 + this.TEM / 100, -this.n_total_cuotas));
      this.cuotaR = Number(this.cuotaR.toFixed(2));


    },
  };
  </script>

<style>
.currency-container {
  
  display: flex;
  align-items: center;
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
