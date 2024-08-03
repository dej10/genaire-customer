<template>
  <section class="nav" @click.stop="menuTriggerBlur">
    <NuxtLink class="nav-logo-new w-nav-brand" to="/">
      <div class="nav-logo">
        <img alt="" class="image-3" loading="lazy" src="/images/genaire-logo.svg">
      </div>
    </NuxtLink>
    <div class="w-layout-hflex nav-right">
      <a
        v-if="!isConnected"
        class="small primary w-button btn"
        @click.prevent="connect({ connector, chainId: 11155111 })"
      >

        <Icon v-if="status === 'pending'" class=" animate-spin" name="gg-spinner" />
        Connect Wallet
      </a>
      <template v-else>
        <li>
          <div class="nav-dropdown-2 w-dropdown" data-delay="0" data-hover="false">
            <div class="nav-dropdown-toggle w-dropdown-toggle">
              <div
                class="text-block"
                @click.stop="menuTrigger"
              >
                <a class="small primary w-button btn outline">
                  {{ lodashTruncate(address, { length: 10 }) }}
                </a>
              </div>
            </div>
            <nav
              v-blur:assetMenuTrigger="menuTriggerBlur"
              class="nav-dropdown-list shadow-three mobile-shadow-hide w-dropdown-list"
              :class="{ block: isUserDropdown }"
            >
              <a class="nav-dropdown-link-2 w-dropdown-link" href="#" @click.stop=" disconnect()">Disconnect Wallet</a>
            </nav>
          </div>
        </li>
      </template>
      <address class="menu-btn">
        <img alt="" loading="lazy" src="/images/menu.svg">
      </address>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type Connector, useAccount, useChainId, useConnect, useDisconnect } from '@wagmi/vue'

const { vBlur } = useDirectives()
const { isConnected, address } = useAccount()
const { disconnect } = useDisconnect()
const { connect, connectors, error, status } = useConnect()

const connector = ref<Connector>(connectors[connectors.length - 1])
const isUserDropdown = ref(false)

const menuTrigger = () => {
  isUserDropdown.value = !isUserDropdown.value
}

const menuTriggerBlur = () => {
  isUserDropdown.value = false
}
</script>
