<template>
  <div class="connexion">
    <h1>Formulaire d'inscription</h1>
    <label>
      Name : <input v-model="nameForm" type="text" name="" id="">
    </label>
    <label>
      Username : <input v-model="usernameForm" type="text" name="" id="">
    </label>
    <label>
      Email : <input v-model="emailForm" type="text" name="" id="">
    </label>
    <label>
      Zipcode : <input v-model="addressForm" type="text" name="" id="">
    </label>
    <label>
      Phone: <input v-model="phoneForm" type="text" name="" id="">
    </label>
    <label>
      Website : <input v-model="websiteForm" type="text" name="" id="">
    </label>
    <label>
      Company : <input v-model="companyForm" type="text" name="" id="">
    </label>
    <router-link :to="{name: ''}" exact v-on:click="">Inscription</router-link>
  </div>
</template>

<script>
export default {
  name: 'connexion',
  props:{
    user: Array,
  },
  
  methods: {
//dataSend: function (splice) {
    
     // user.name = nameForm
      //user.username = usernameForm
      //user.email = emailForm
     // user.address = addressForm
      //user.phone = phoneForm
      //user.website = websiteForm
      //user.company = companyForm

 // },
  }
}
</script>

<style scoped>
.connexion {
  border: 1px solid #ccc;
  border-radius: 4px;
}
input, label, h1 {
  display: flex;
  margin: auto;
  width: 40%;
  padding: 12px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  justify-content: center;
}
input {
  width: 20%;
}

</style>
