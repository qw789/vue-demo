<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/test/test1">前往test1页面</router-link>
    <h2>Very Cool~ Do you like it ?</h2>
     <ul>
            <li v-for="item in shoppingList">
                {{ item }}
            </li>
    </ul>
    <h2>Vue-for filter实现</h2>
        <ul>
            Filter Key<input type="text" v-model="key">   
            <li v-for="item in filterShoppingList">
                {{ item }}
            </li>
        </ul>    
  </div>   
</template>

<script>
//根据关键字过滤列表功能实现
export default {
  name: 'test2',
  data () {
    return {
      msg: 'Welcome to Your test2 page',
      shoppingList: [
            "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
        ],
        key: ""
    }
  },
  methods:{
  },
  computed: {
        filterShoppingList() {
            // `this` points to the vm instance
            var key = this.key;
            var shoppingList = this.shoppingList;
            return shoppingList.filter(function (item) {
                return item.toLowerCase().indexOf(key.toLowerCase()) != -1
            });;
        }
    },
  created(){
    console.log('The time is'+this.$moment().format("HH:mm"))
  }
}
  

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
