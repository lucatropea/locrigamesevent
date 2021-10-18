<template>
  <div>
    <Borders></Borders>
    <Navigation></Navigation>
    <Event></Event>
  </div>
</template>

<script>
import Borders from '../components/Borders.vue'
import Navigation from '../components/Navigation.vue'
import Event from '../components/Event.vue'

export default {
  components: {
    Borders,
    Navigation,
    Event
  },
  name: 'Home'
}
</script>
