<script setup>
defineProps({
  text: String,
  url: String
})
</script>

<template>
  <a
      :href="url"
      class="vote-card"
      target="_blank"
      rel="noopener"
  >
    <div class="vote-content">
      <span class="vote-text">{{ text }}</span>
      <span class="vote-icon">→</span>
    </div>
  </a>
</template>

<style scoped>
.vote-card {
  text-decoration: none !important;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: block;
  position: relative;
  overflow: hidden;
}

.vote-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.vote-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vote-text {
  font-weight: 600;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
}

.vote-icon {
  color: var(--vp-c-brand);
  font-size: 1.2rem;
  transition: transform 0.2s ease;
}

.vote-card:hover .vote-icon {
  transform: translateX(5px);
}

.vote-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: var(--vp-c-brand);
  opacity: 0;
  transition: opacity 0.3s;
}

.vote-card:hover::before {
  opacity: 1;
}
</style>