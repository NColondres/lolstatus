<template>
  <div id="app">
    <header>Header Bar</header>
    <main>
      <p><router-link to="/">Home</router-link></p>
      <p><router-link to="/lolstatus">Lol Status Page</router-link></p>
      <template v-if="status">
        <template v-if="status.services && status.services.length > 0">
          <div v-for="service in status.services" :key="service.slug" class="service">
            <span class="status" :class="service.status">{{ service.name }}</span>
          </div>
        </template>
      </template>
      <router-view/>
    </main>
    <footer>Footer Bar</footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'status'
    ])
  }
}
</script>

<style>
#app {

}

.status {
  margin-right:20px;
  float:left;
}

header {
  height:40px;
  background-color:black;
  position:fixed;
  top:0;
  left:0;
  right:0;
}

main {
  margin:40px 0;
  background-color:#CCCCCC;
}

footer {
  height:40px;
  background-color:black;
  position:fixed;
  bottom:0;
  left:0;
  right:0;
}
</style>
