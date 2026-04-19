<script setup>
import AppCard from './AppCard.vue'

const apps = [
  {
    name: 'Staff',
    description: 'Helpers, Moderators, Admins',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSddfhg2o0XSxJf-jt9rV_-qQZfr6HdoLEPv5wfngaGNmFwjig/viewform?usp=dialog'
  },
  {
    name: 'Content Team',
    description: 'Advertisers, Builders, Designers, Developers',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdKB5nJYoS0AtkDrR5jSosy8aXAh79MH345QgXHUl3Lx67N7g/viewform?usp=dialog'
  }
]
</script>

<template>
  <div class="app-grid">
    <AppCard
        v-for="app in apps"
        :key="app.url"
        v-bind="app"
    />
  </div>
</template>

<style scoped>
.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 2rem 0;
}
</style>