  <template>
    <div class="toolbar">
      <RouterLink to="/home">
        <span class="title">BKL</span>
      </RouterLink>
    </div>
  <!--  <Pv-Message severity="success"  v-if="successMessage" style="width: auto; display: flex;">Success Message Content</Pv-Message>
    QUIERO QUE APAREZCA UNA NOTIFICACION A LOS USUARIOS SOBRE QUE LA CUENTA FUE REGISTRADA CON EXITO
  <Pv-Message :life="3000"  >Message Content</Pv-Message> -->
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true">
      <div class="signup">
        <form>
          <label for="chk" aria-hidden="true">Sign up</label>
          <div style="text-align: center;  justify-content: center; align-items: center; ">
        <Pv-InlineMessage style="margin-left: auto; margin-top: -30px;text-align: center; " severity="success" v-if="successMessage">{{ successMessage }}</Pv-InlineMessage>
      <Pv-InlineMessage style="margin-left: auto; margin-top: -30px; text-align: center;" severity="error" v-if="error">{{ error }}</Pv-InlineMessage>
  </div>
          <Pv-InputText class="inputlg2" type="text" v-model="username" placeholder="User name" />
          <Pv-InputText class="inputlg2" type="email" v-model="email" placeholder="Email" />
          <Pv-InputText class="inputlg2" type="password" v-model="password" placeholder="Password" />

          <button class="custom-button" type="button" @click="msg">Sign up</button>
        </form>
      </div>

      <div class="login">
        <form>
          <label for="chk" aria-hidden="true">Login</label>
          <Pv-InputText class="inputlg2" type="email" id="username" v-model="loginEmail" placeholder="Email" />
          <Pv-InputText class="inputlg2" type="password" id="password" v-model="loginPassword" placeholder="Password" />

          <button class="custom-button" type="button" @click="login">Log in</button>
          <br>
          <Pv-InlineMessage style="margin: 10px;" severity="error" v-if="error" >{{ error }}</Pv-InlineMessage>
        </form>
      </div>
    </div>
  </template>

<script>
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import db from '@/firebase/init';

export default {
  name: 'Auth',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      loginEmail: '',
      loginPassword: '',
      error: '',
      errorMessage: '',
      successMessage:'',
    };
  },
  methods: {
    async msg() {
      this.error = '';
      if (this.username && this.password && this.email) {
        const auth = getAuth();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          this.username = '';
          this.password = '';
          this.email = '';
          const user = userCredential.user;
          const usersCollection = collection(db, 'users');
          this.successMessage = 'El registro se ha completado exitosamente.';
          setTimeout(() => {
            this.successMessage = false;
          }, 2000);
          await addDoc(usersCollection, {
            username: this.username,
            email: this.email,
            
          }); 
        
        } catch (error) {
          this.error = error.message;
          setTimeout(() => {
            this.error = false;
          }, 2000);
        }
      } else {
        this.error = 'Falta llenar';
        setTimeout(() => {
          this.error = false;
        }, 2000);
      }
    },
      async login() {
        this.error = '';
        if (this.loginEmail && this.loginPassword) {
          const auth = getAuth();
          try {
            await signInWithEmailAndPassword(auth, this.loginEmail, this.loginPassword);
            this.$router.push('/bankhome');
          } catch (error) {
            this.error = error.message;
            console.error('Error de autenticación:', error);
            setTimeout(() => {
            this.error= false;
          }, 3000);
          }
        } else {
          this.error = 'Por favor, completa todos los campos.';
          setTimeout(() => {
            this.error= false;
          }, 3000);
        }
      },
    },
  };
  </script>

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
    margin: 48px;
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