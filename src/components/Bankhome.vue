<template>
    <div class="toolbar">
        <router-link to="/home" >
            <span class="title" >BKL</span>
        </router-link>
        <div class="buttons">
            <router-link to="/home">
                <button class="button" >Log out</button>
            </router-link>
        </div>
    </div>
    <div class="contentmenu">
        <Pv-Card class="cartdsmenu">
            <template #title> Método Frances: </template>
            <template #content>
                <p>
                    El método francés es una técnica de amplio uso en el ámbito de los préstamos. Este método
                    se utiliza para calcular cuotas de préstamos y financiamientos, y es particularmente común en hipotecas, 
                    préstamos personales y deudas a largo plazo.
                </p>
            </template>
            <template #footer>
                <router-link to="/methodfrances">
                    <Pv-Button icon="pi pi-user" label="Ingresar"  class="button"/>
                </router-link>
            </template>
        </Pv-Card>
        <Pv-Card class="cartdsmenu">
            <template #title> Historial: </template>
            <template #content>
                <p>
                    Un historial que recapitulo todos los préstamos hechos por nuestra página 
                    a lo largo de los años de nuestra extensa experiencia al servicio del cliente.
                </p>
            </template>
            <template #footer>
                <router-link to="/record">
                    <Pv-Button icon="pi pi-calendar" label="Ingresar"  class="button"/>
                </router-link>
            </template>
        </Pv-Card>
    </div>

</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Castoro&display=swap');
  
 body{
      margin: 0;
      font-family: 'Castoro',serif;
       font-weight: 400;
       background-color: #EDF2EF;
       justify-content: center;   
}
.contentmenu{
    display: flex;
    text-align: justify;
}

.title{
    text-decoration: none;
    
      color: white;
      font-size: 3rem;
      font-weight: bold;
      margin-left: 60px;
  
}
.cartdsmenu{
  width: 70vh;
  margin: 40px;
}

@media (max-width:600px) {
  .contentmenu{
    display: grid;
    grid-template-columns: auto;
   
  }
  .cartdsmenu{
    width: auto;
    margin-bottom: 10px;
  }
}
</style>
