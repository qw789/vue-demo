<template>
  <div style="height:100px;background:yellow;">
    <div v-click-outside="hide" @click="toggle" style="height:50px;background:#ddd;">Toggle</div>
    <div v-show="opened" style="height:50px;background:#ccc;">Popup item</div>
  </div>
</template>

<script>
import ClickOutside from '../../directive/clickOutside.js'
//如果做导航，可以把下面div的套在上面的div里面，相应的修改样式即可。
export default {
  data () {
    return {
      opened: false
    }
  },

  methods: {
    toggle () {
      this.opened = true
    },

    hide () {
      this.opened = false
    }
  },

  mounted () {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el
  },

  // do not forget this section
  directives: {
    ClickOutside
  }
}
</script>