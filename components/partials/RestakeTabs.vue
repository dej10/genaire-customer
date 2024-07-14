<template>
  <div>
    <div class="w-layout-vflex tabs">
      <NuxtLink v-for="tab, index in tabs" :key="index" class="w-inline-block tab" :class="{ active: $route.name === tab.link }" :to="`/${tab.link}`">
        {{ tab.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tabs = ref([
  {
    name: 'Restake',
    link: 'restake'

  },
  {
    name: 'EigenLayer',
    link: 'eigenlayer'

  },
  {
    name: 'Portfolio',
    link: 'portfolio'

  },
  {
    name: 'DeFi',
    link: 'defi'

  },
  {
    name: 'Referral Program',
    link: 'referral-program'

  },
  {
    name: 'Analytics',
    link: 'analytics'

  },
])
</script>

<style>

</style>
