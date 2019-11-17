<template>
  <div id='home'>
    <br>
    <span id='gender'>Male</span>
    <ul>
        <li v-for="item in sortlist" v-if="item.gender == 'Male'">
            {{item.name}}
        </li>
    </ul>
    <br>
    <span id='gender'>Female</span>
    <ul>
        <li v-for="item in sortlist" v-if="item.gender == 'Female'">
            {{item.name}}
        </li>
    </ul>
  </div>
</template>

<script>

  export default{
    name: 'home',
    data(){
        return {
           list:[]
        }
    },

    methods:{
      getData(){
        var me = this;
        var api = 'http://5c92dbfae7b1a00014078e61.mockapi.io/owners'

        //get data from url
        this.axios.get(api)
          .then(function (response) {
            console.log(response);
            me.list = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    },
    computed:{
         sortlist(){
           return this.list.sort((a, b) => {
             return a['name'].localeCompare(b['name'])
           })
         }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style>
</style>
