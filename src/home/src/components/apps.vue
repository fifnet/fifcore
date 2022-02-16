<template>
  <div>List of Apps

  <div v-for="app in lsApps" :key="app.token"><button @click="openApp(app)">{{app.name}}</button></div>
  
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Apps',
  setup () {
    const lsApps = ref({})
    async function getApps(){
      const apps = await (await fetch(location.origin+"/apps?adminKey="+window.adminKey)).json()
      lsApps.value = apps
      console.log(apps)
    }
    getApps()
    function getAppURL(app){
      const url = location.origin+'/'+app.name+"/"+(app.meta.start?app.meta.start:'')
      console.log(app)
      return url
    }
    function openApp(app){
      document.cookie='fiftoken='+app.token+';path=/'+app.name+"/"
      window.open(getAppURL(app),app.name)
    }
    return {lsApps,getAppURL,openApp}
  }
}
</script>
