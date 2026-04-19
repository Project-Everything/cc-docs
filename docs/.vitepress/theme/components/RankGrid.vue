<script setup>
import RankCard from "./RankCard.vue";

const ranks = [
  {
    name: 'Sponsor',
    image: '/rank/sponsor.png',
    description: '$10',
    url: '/rank/sponsor'
  },
  {
    name: 'Sponsor+',
    image: '/rank/sponsor+.png',
    description: '$25',
    url: '/rank/sponsor+'
  }
]
</script>

<template>
  <div class="rank-grid">
    <RankCard
        v-for="rank in ranks"
        :key="rank.name"
        v-bind="rank"
    />
  </div>
</template>

<style scoped>
.rank-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  margin: 2rem 0;
}
</style>