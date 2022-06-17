<template>
  <div class="hello">
    <h1>Liste des utilisateurs</h1>
    <table>
      <caption></caption>
      <thead>
        <tr>
          <th v-for="(column, index) in colonnes" :key="index">
            {{ column }}
          </th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in UserList" :key="index" v-bind:id="user.id">
            <td v-for="(oneUser, key, index) in user" :key="index">{{ key === 'address' ? oneUser.city : key === 'company' ? oneUser.name : oneUser}}></td>
            <input type="button" @click="deleteEvent(index, 1)" value="supprimer">
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'UsersView',
    props: {
      msg: String,
      colonnes: Array,
      user: Array,
    },
    methods:{
      deleteEvent: function(index){
        this.UserList.splice(index, 1);
      },
      addEvent: function (){
        UserList = this.UserList.length;
        let newRow={
          id: this.newRowId++,
          percentual: this.value,
          label: this.label,
        };
        this.labels.push(newRow)
      }
    },
    data: function () {
      return {
        UserList: [],
        deleteItem: [],
        showModal: false,
        activeUserId: 0,
        activeUserName: "", 
        
      }
    },
    beforeMount() {
      this.UserList = this.$store.state.UserList;
      console.log(this.UserList);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;

  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
  table {
    border: white solid;
    display: inline-block;
    margin: 0 10px;
    border-collapse: collapse;
    background: rgb(124,123,147);
    background: linear-gradient(90deg, rgba(124,123,147,1) 0%, rgba(255,255,255,1) 100%, rgba(0,212,255,1) 100%);
  }
  th, td {
    border: white solid;
    padding: 1rem;
    color: black;
  }
  th {
    color: #F15412;
  }
</style>