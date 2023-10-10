<template>
    <div class="toolbar">
          <div class="title">BKL</div>
     
          <div class="buttons">

            <router-link to="login">
              <button class="button" >Login</button>
            </router-link>

          </div>
      </div>

      <div class="description">
        <div class="content">
           <span class="subtittle"> Disfruta de la oportunidad de obtener <br>  tu propio auto</span>
           
        
           <Pv-Button label="Más Información" icon="pi pi-external-link" @click="visible = true"  class="button2" />

                    <Pv-Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Pv-Dialog>

        </div>
        
            <img class="imgds" alt="hola" src="../assets/BankDs.jpeg">
          </div>

      <div class="puntos">

            <h2> ¿Por qué BankLide?</h2>
            <div class="razones">
                <div class="puntos_items">
                  <img style="margin: 10px; " alt="img1" src="../assets/disc.png">
                  <span> Tasas bajas</span>
                </div>
                <div  class="puntos_items" >
                  <img  style="margin: 10px; " alt="img2" src="../assets/calend.jpeg">
                  <span>Elige el plazo de tiempo que más te convenga</span>
                </div>
                <div  class="puntos_items">
                  <img style="margin: 10px; " alt="img3" src="../assets/car.png">
                  <span>Elige el plazo de tiempo que más te convenga</span>
                </div>
            </div>
            <router-link to="/login">
            <button class="button2">Solicitalo Aqui</button>
          </router-link>
      </div>

  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const visible = ref(false);
  </script>
  


  <style>

  @import url('https://fonts.googleapis.com/css2?family=Castoro&display=swap');
  *{
    font-family: 'Castoro',serif;
       font-weight: 400;
  }
  body{
      margin: 0;
      font-family: 'Castoro',serif;
       font-weight: 400;
       background-color: #EDF2EF;
    }
  
  
   .toolbar {
      background-color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
     height: 80px;
      width: 100%;
  }
  
  .title {
      color: white;
      font-size: 3rem;
      font-weight: bold;
      margin-left: 60px;
  } 
  
    .buttons
    {
        display: flex;
        flex: 1 1 auto;
        justify-content: flex-end;
    }

  .button {
      background-color: #F97068;
      color: white;
      border: none;
      padding: 10px 20px;
      margin-left: 20px;
        margin-right:20px ;
      cursor: pointer;
      font-size: 20px;
      width: 150px;
  }
/*Seccion 2 */
.description{
    background-color: #DA7B93;
    width: 100%;
    height: 450px;
    display: grid;
    grid-template-columns: auto auto;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra horizontalmente */
  justify-content: center; /* Centra verticalmente */
  text-align: center; /* Centra el texto horizontalmente */
}

.subtittle  {
  font-size: 35px;
  margin: 20px; /* Agrega margen inferior para separar el texto del botón */
  color: #fff;
}
.button2 {
      background-color: #F97068;
      color: white;
      border: none;
      padding: 10px 20px;
    
      cursor: pointer;
      font-size: 25px;
      width: auto;
      margin: 20px;
  }

  .imgds{
      height: 450px;
      width: 100%;
    }

    /* SECCION 3 */

    .puntos {
  text-align: center; /* Centra el texto horizontalmente */
  padding: 10px;

}

.razones {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  margin: 0 auto; /* Centra horizontalmente el contenido */
  width: fit-content; /* Ajusta el ancho al contenido */
}

.puntos_items {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra horizontalmente */
  justify-content: center; /* Centra verticalmente */
  text-align: center; /* Centra el texto horizontalmente */

  padding: 20px; /* Agrega espacio interno para separar el contenido del borde */
}
.puntos_items span{
  font-size: 20px;
}



    /*Version mmovil */
    @media (max-width: 600px){
        .title{
            font-size: 2rem;
            margin-left: 15px;
        }
        .button {
      width: 100px;
      font-size: 15px;
      margin-left: 5px;
      margin-right: 10px;
      padding: 10px 15px; /* Reduje el padding en pantallas pequeñas */
    }

    .buttons {
      justify-content: center;
      
    }

    .button{
      margin-left: 50px;
      margin-right:0px ;
    }
    /* seccion 2 en el responsive */
    .description{
     grid-template-columns: auto;
     justify-content: center;
     height: auto;
    }

    .imgds{
      height: 300px;
      width: 100%;
    }

    .content span{
      font-size: 20px;
    }
    .button2{
      font-size: 15px;
      width: 200px;
    }
    /*seccion 3 */
    .razones{
      grid-template-columns: auto;
    }

  }
 

  </style>  