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
        @click.prevent="showModal = true"
      >
        <Icon v-if="status === 'pending'" class="animate-spin" name="gg-spinner" />
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
              <a class="nav-dropdown-link-2 w-dropdown-link" href="#" @click.stop="disconnect()">Disconnect Wallet</a>
            </nav>
          </div>
        </li>
      </template>
      <address class="menu-btn">
        <img alt="" loading="lazy" src="/images/menu.svg">
      </address>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>Connect Wallet</h3>
        <div
          v-for="connector in connectors"
          :key="connector.id"
          class="connector-button-wrapper"
        >
          <button
            class="connector-button"
            @click="connectWallet(connector)"
          >
            <img
              :alt="connector.name"
              class="connector-icon"
              :src="connector.icon || getConnectorIcon(connector)"
            >
            <span>{{ connector.name }}</span>
          </button>
        </div>
        <button class="close-button" @click="showModal = false">
          Close
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type Connector, useAccount, useChainId, useConnect, useDisconnect } from '@wagmi/vue'

import walletConnect from '~/public/images/wallet-connect.png'
import coinbaseWallet from '~/assets/images/coinbase.png'

const { vBlur } = useDirectives()
const { isConnected, address } = useAccount()
const { disconnect } = useDisconnect()
const { connect, connectors, status } = useConnect()
const isUserDropdown = ref(false)
const showModal = ref(false)

const menuTrigger = () => {
  isUserDropdown.value = !isUserDropdown.value
}

const menuTriggerBlur = () => {
  isUserDropdown.value = false
}

const connectWallet = async (connector: Connector) => {
  try {
    await connect({ connector, chainId: 11155111 })
    showModal.value = false
  }
  catch (err) {
    console.error('Failed to connect:', err)
  }
}

const getConnectorIcon = (connector: Connector) => {
  const iconMap = {
    // injected: '/images/metamask-icon.svg',
    walletConnect,
    coinbaseWalletSDK: coinbaseWallet,
  }
  return iconMap[connector.id] || '@/images/default-wallet-icon.svg'
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #f7f7f7;
  padding: 30px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
}

.connector-button-wrapper {
  margin-bottom: 10px;
}

.connector-button {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.connector-button:hover {
  background-color: #e0e0e0;
}

.connector-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.close-button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #e0e0e0;
}

.modal h3 {
  margin-bottom: 40px;
  text-align: center;
}
</style>
