<template>
  <div class="">
    Address: {{ address }}
  </div>
  <div>Connected to {{ connector?.name }} Connector.</div>
  <button @click="disconnect()">
    Disconnect
  </button>
</template>

<script setup lang="ts">
import { useAccount, useDisconnect } from '@wagmi/vue'

const { address, connector } = useAccount()
const { disconnect } = useDisconnect()
</script>
