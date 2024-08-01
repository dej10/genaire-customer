<template>
  <div>
    {{ status }}
    {{ error?.message }}
    <Account v-if="isConnected" />

    <template v-else>
      <h2>Connect</h2>
      <button
        v-for="connector in connectors"
        :key="connector.id"
        type="button"
        @click="connect({ connector, chainId })"
      >
        {{ connector.name }}
      </button>
    </template>
    <SendTransaction />
  </div>
</template>

<script setup lang="ts">
import { useAccount, useChainId, useConnect } from '@wagmi/vue'

const { isConnected } = useAccount()
const chainId = useChainId()
const { connect, connectors, error, status } = useConnect()
</script>
