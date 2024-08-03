<template>
  <div>
    <div class="w-layout-vflex error-flex hero-content">
      <h2 class="h1">
        {{ error.statusCode }}
      </h2>
      <div class="hero-subtext">
        <div class="text-32">
          {{ error.statusMessage }}
        </div>
      </div>
      <NuxtLink class="primary w-button btn" to="/">
        Back Home
      </NuxtLink>
    </div>

    <div v-if="isDev">
      <div class="flex items-center space-x-1">
        <span>Error Details</span>
        <span class="badge badge-accent badge-sm">from-server</span>
        <span>:</span>
      </div>
      <div class="mockup-code">
        <pre>{{ error }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    default: () => new Error('An error message'),
    type: Object
  }
})

const isDev = computed(() => import.meta.dev)
</script>

<style>
.error-flex{
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
