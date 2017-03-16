<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/test/test2">前往test2页面</router-link>
    <h2>this is  a todolist</h2>
    <ul>
      <li v-for="item in items" :class='{decoration:item.isFinished}' @click="toggleFinish(item)">
         {{item.lable}}
      </li>
    </ul>
    <h1>儿子告诉我{{childWord}}</h1>
    <input type="" name="" v-model="newItem" v-on:keyup.enter="addNew()">
    <component-a msgFromFather="you die" v-on:childWay="sonSay"></component-a>
  </div>
</template>

<script>
import Storage from "../../storage.js"
import componentA from './test3.vue'
export default {
  name: 'test1',
  data () {
    return {
      msg: 'Welcome to Your test1 page',
      items:Storage.fetch(),
      newItem:"",
      childWord:"11"
    }
  },
  methods:{
    toggleFinish(aa){
      return aa.isFinished=!aa.isFinished
    },
    addNew(){
      console.log(this.newItem)
      this.items.push({
         lable:this.newItem,
         isFinished:true
      })
      this.newItem="";
    },
    sonSay(msg){
      console.log(msg)
      this.childWord=msg;
    }
  },
   watch:{
    items:{
     handler(items) { 
      Storage.save(items)
     },
      deep: true
    }
  },
  components:{
    componentA
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
.decoration{
  text-decoration: underline;
}
</style>
