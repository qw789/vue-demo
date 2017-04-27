<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <router-link to="/test">前往test页面（测试路由）</router-link>
     <app-banner :cc="listImg"></app-banner>
  </div>
</template>

<script>
import Banner from '../components/banner.vue'
import a from '../assets/images/banner1.jpg'
import b from '../assets/images/banner2.jpg'
import c from '../assets/images/banner3.jpg'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      testimgsrc: '',
      listImg: [{
                    url: a
                }, {
                    url: b
                }, {
                    url: c
                }]
    }
  },
  mounted() {
  },
  methods:{
  },
  components: {
            'app-banner': Banner
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
