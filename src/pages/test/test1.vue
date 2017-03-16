<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/test/test2">前往test2页面</router-link>
    <h2>this is  a todolist</h2>
    <ul>
      <li v-for="item in items" :class='{decoration:item.isFinished}'>
         {{item.lable}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'test1',
  data () {
    return {
      msg: 'Welcome to Your test1 page',
      items:[
      {lable:"eat",isFinished:true},
      {lable:'working',isFinished:true}
      ]
    }
  },
  methods:{
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
