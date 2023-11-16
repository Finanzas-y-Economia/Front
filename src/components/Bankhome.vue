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

      <div class="contentmenu" style="display: flex;">
  <div class="card flex align-items-center justify-content-center">
        <Pv-Card style="width: 70vh;margin: 40px;">
           
            <template #title> Metodo Frances </template>
         
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
              <router-link to="/methodfrances">
                <Pv-Button icon="pi pi-user" label="Ingresar"  class="button"/>
              </router-link>
            </template>
        </Pv-Card>
      </div>

      <div class="card flex align-items-center justify-content-center">
        <Pv-Card style="width: 70vh;margin: 40px;">
           
            <template #title> Historial </template>
         
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
              <router-link to="/record">
                <Pv-Button icon="pi pi-calendar" label="Ingresar"  class="button"/>
              </router-link>
            </template>
        </Pv-Card>
      </div>
    </div>
</template>
<script>
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

.title{
    text-decoration: none;
    
      color: white;
      font-size: 3rem;
      font-weight: bold;
      margin-left: 60px;
  
}
</style>