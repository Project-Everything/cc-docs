<script setup>
import VoteCard from './VoteCard.vue'

const links = [
  {text: 'Planet Minecraft', url: 'https://www.planetminecraft.com/server/creative-central-6469833/'},
  {text: 'Minecraft Servers', url: 'https://minecraftservers.org/server/669174'},
  {text: 'Minecraft Server List', url: 'https://minecraft-server-list.com/server/508895/'},
  {text: 'Minecraft MP', url: 'https://minecraft-mp.com/server-s338740'},
  {text: 'Buzz MC', url: 'https://minecraft.buzz/server/12755'}
]
</script>

<template>
  <div class="voting-container">
    <VoteCard
        v-for="item in links"
        :key="item.url"
        v-bind="item"
    />
  </div>
</template>

<style scoped>
.voting-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin: 24px 0;
}
</style>