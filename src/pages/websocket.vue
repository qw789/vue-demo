<template>
  <div id="app">
    <button v-for="(item, index) in buttonList" :key="index" @click="clickHandle(index)">
      {{ item.value ? '打开' : '关闭' }}
    </button>
  </div>
</template>

<script>
const getButtons = () => {
  return new Promise(resolve => {
    const buttonList = Array.from({ length: Math.random() * 10 | 0 }, (item, index) => {
      return {
        label: index,
        value: false
      }
    })
    setTimeout(() => {
      resolve({
        code: 200,
        data: buttonList,
        message: 'ok'
      })
    })
  })
}

export default {
  name: 'App',
  data () {
    return {
      buttonList: [{
        label: 1,
        value: false
      }, {
        label: 2,
        value: false
      }, {
        label: 3,
        value: false
      }, {
        label: 4,
        value: false
      }]
    }
  },
  methods: {
    clickHandle (index) {
      this.buttonList[index].value = !this.buttonList[index].value
    }
  },
  async mounted () {
    const result = await getButtons()
    this.buttonList = result.data
  }
}
</script>

<style>
button {
  margin: 0 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
