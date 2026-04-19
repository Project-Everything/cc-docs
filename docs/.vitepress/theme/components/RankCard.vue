<script setup>
defineProps({
  name: String,
  image: String,
  description: String,
  url: String
})
</script>

<template>
  <a :href="url" class="rank-card">
    <div class="rank-image-container">
      <img :src="image" :alt="name" class="rank-image"/>
    </div>

    <div class="rank-content">
      <div>
        <h3 class="rank-name">{{ name }}</h3>
        <p v-if="description" class="rank-description">{{ description }}</p>
      </div>

      <div class="rank-footer">
        <span>View Details</span>
        <span class="arrow" aria-hidden="true">→</span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.rank-card {
  display: flex;
  flex-direction: column;
  text-decoration: none !important;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.25s ease;
  height: 100%;
}

.rank-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.rank-image-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rank-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rank-content {
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rank-name {
  margin: 0 0 4px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.rank-description {
  margin: 0 0 16px 0;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.rank-footer {
  color: var(--vp-c-brand);
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>