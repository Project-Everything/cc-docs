<script setup>
defineProps({
  name: String,
  description: String,
  url: String
})
</script>

<template>
  <a
      :href="url"
      target="_blank"
      rel="noopener"
      class="app-card"
  >
    <div class="app-header">
      <span class="app-name">{{ name }}</span>
    </div>

    <p class="app-description">{{ description }}</p>

    <div class="app-footer">
      <span class="launch-text">Apply Now</span>
      <span class="arrow" aria-hidden="true">→</span>
    </div>
  </a>
</template>

<style scoped>
.app-card {
  display: flex;
  flex-direction: column;
  text-decoration: none !important;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.25s ease;
  height: 100%;
}

.app-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.app-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.app-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.app-description {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 20px;
  flex-grow: 1;
}

.app-footer {
  color: var(--vp-c-brand);
  font-weight: 600;
}
</style>