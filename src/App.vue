<template>
<header>
  <div class="logo">
    <img v-bind:src="srcLogo" alt="Logo">
  </div>
  <nav>
    <router-link to="/">Accueil</router-link>
    <router-link :to="{ name: 'users', params: { colonnes: columns} }">Liste</router-link>
    <router-link to="/connexion">Ajouter</router-link>
  </nav>
  
</header>
  
  <body>
    <img class='logoMain' src="@/assets/logoRayan.jpg" alt="">
  </body>
  <router-view/>

</template>
<script>
export default {
  name: 'App',
  data: function () {
    return {
      srcLogo: 'logo.png',
      columns: [],
      UserList: [],
    }
  },
  beforeMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        this.$store.commit('setUsers', json);
        console.log(Object.keys(json[0]));
        this.$store.commit('setColumns', Object.keys(json[1]));
        this.columns = Object.keys(json[0]);
        //console.log("Store Colonnes : ", this.$store.state.allColumns);
        
        this.$store.commit('setUserList', json);
        console.log("user list :", this.$store.state.UserList);
        
        });
      
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  display: flex;
  justify-content: space-between;
}
nav {
  padding: 30px;
  
}

nav a {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;

  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

a:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}


nav a.router-link-exact-active {
  color: black;
}
.logoMain {
  width: 20%;
 margin: auto;
}
@media screen {}
</style>
