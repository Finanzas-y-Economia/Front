
import { RouterLink } from 'vue-router';
<template>
   <div class="toolbar">
    <RouterLink to="/home">
          <span class="title">BKL</span>
        </RouterLink>
      </div>

    <div class="main">
    <input type="checkbox" id="chk" aria-hidden="true">
    <div class="signup">
        <!-- FALTA ADAPTARLO CON PRIMEVUE Y SUS VALIDACIONES-->
      <form>
        <label for="chk" aria-hidden="true">Sign up</label>
        <Pv-InputText type="text" class="inputlg2" name="txt" placeholder="User name"/>
        <Pv-InputText class="inputlg2" type="email" name="email" placeholder="Email" />
          <Pv-InputText class="inputlg2" type="password" name="pswd" placeholder="Password"/>
      
        <button class="custom-button">Sign up</button>
     
      </form>
    </div>

    <div class="login">
      <form>
        <label for="chk" aria-hidden="true">Login</label>
        <Pv-InputText  class="inputlg2" type="email" name="email" placeholder="Email"  />
        <Pv-InputText  class="inputlg2" type="password" name="pswd" placeholder="Password"/>
        <router-link to="/bankhome">
        <button class="custom-button">Sign up</button>
      </router-link>
      </form>
    </div>
  </div>
<!-- HASTA ACA -->
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
  
  /*   .toolbar {
      background-color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
     height: 100px;
      width: 100%;
  }    */
  
  .main {
    margin: 50px auto;
    width: 350px;
    height: 500px;
    background: #2F4454;
    overflow: hidden;
   
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
  }
  #chk {
    display: none;
  }
  .signup {
    position: relative;
    width: 100%;
    height: 100%;
  }
  label {
    color: #fff;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
  }
  

  .inputlg2 {
    width: 60%;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  .custom-button {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #573b8a;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
  }
  .custom-button:hover {
    background: #6d44b8;
  }
  .login {
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: .8s ease-in-out;
  }
  .login label {
    color: #573b8a;
    transform: scale(.6);
  }
  #chk:checked ~ .login {
    transform: translateY(-500px);
  }
  #chk:checked ~ .login label {
    transform: scale(1);  
  }
  #chk:checked ~ .signup label {
    transform: scale(.6);
  } 


</style>
<script>

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importa las funciones de autenticación de Firebase

export default {
  name: 'LogiN',
  props: {},
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async login() {
      // Limpia cualquier mensaje de error anterior
      this.error = '';

      // Verifica si los campos de usuario y contraseña están completos
      if (this.username && this.password) {
        // Obtiene la instancia de autenticación de Firebase
        const auth = getAuth();

        try {
          // Intenta autenticar al usuario utilizando el correo electrónico y contraseña
          await signInWithEmailAndPassword(auth, this.username, this.password);

          // Si la autenticación es exitosa, redirige al usuario a la página /home
          this.$router.push('/home');
        } catch (error) {
          // Si hay un error, muestra un mensaje de error
          this.error = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
          console.error('Error de autenticación:', error);
        }
      } else {
        // Si los campos no están completos, muestra un mensaje de error
        this.error = 'Por favor, completa todos los campos.';
      }
    },
  },
};
</script>