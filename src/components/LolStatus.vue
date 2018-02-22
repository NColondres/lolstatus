<template>
  <div class="lol-status-page">
    <h2>Lol Status Page</h2>
    <p><router-link to="/lolstatus">Default Type Page</router-link></p>
    <p><router-link to="/lolstatus/custom">Custom Type Page</router-link></p>
    <router-view/>

    <template v-if="status">
      <h3>Got a status report!</h3>
      <div class="status-report">
        <h4>{{ status.name }}</h4>
        <p>{{ status.slug }}</p>
        <p>{{ status.locales[0] }}</p>
        <p>{{ status.hostname }}</p>
        <p>{{ status.region_tag }}</p>
        <template v-if="status.services && status.services.length > 0">
          <div v-for="service in status.services" :key="service.slug" class="service">
            <h5>{{ service.name }}</h5>
            <p>{{ service.slug }}</p>
            <span class="status" :class="service.status">{{ service.status }}</span>
            <template v-if="service.incidents && service.incidents.length > 0">
              <div v-for="incident in service.incidents" :key="incident.id" class="incident">
                <div v-for="update in incident.updates" :key="update.id" class="update">
                  <span class="severity" :class="update.severity">{{update.severity}}</span>
                  <h5>{{update.content}}</h5>
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LolStatusPage',
  mounted () {
    this.$store.dispatch('fetchStatusReport')
  },
  computed: {
    ...mapGetters([
      'status'
    ])
  }
}
</script>

<style lang="scss">
h2 {
  clear:both;
}

.service {
  margin-left:60px;
}

.status {
  background-color:grey;
  border-radius:5px;
  border:2px solid #333333;
  padding:5px 10px;
  color:black;
  font-weight:bold;

  &.online {
    background-color:green;
  }

  &.offline {
    background-color:red;
  }
}

.severity {
  background-color:grey;
  border-radius:5px;
  border:2px solid #333333;
  padding:3px 5px;
  color:black;
  font-weight:bold;

  &.info {
    background-color:yellow;
  }

  &.warn {
    background-color:orange;
  }
}

.incident {
  margin-left:120px;
  max-width:300px;
}
</style>
