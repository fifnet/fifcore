<template>
  <div class="fullscreen text-white" style="background-color: rgb(31, 36, 40)">
    <div class="text-h5 text-white q-ma-md q-pt-md"><q-icon name="font_download" class="text-pink text-h3" />Hello fifnet</div>
    <div class="" style="background-color: rgb(44, 49, 60);">SiteList</div>
    <Apps></Apps>
  </div>
</template>

<script>
import Apps from './apps.vue'
export default {
  name: 'LeftPane',
  components: {
    Apps
  },
  setup () {
    return {}
  }
}
</script>
