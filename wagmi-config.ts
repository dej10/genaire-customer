import { createConfig, createStorage, http } from '@wagmi/vue'
import { base, mainnet, optimism, sepolia } from '@wagmi/vue/chains'
import { injected, metaMask, safe, walletConnect } from '@wagmi/vue/connectors'

const projectId = 'cb5c10b83c8289f34cda0ce49b96fd2a'

const customSepoliaRpc = 'https://eth-sepolia.g.alchemy.com/v2/p37eQv5x_-NRTtav8rVzE3KoGvXvtYKE'

export const config = createConfig({
  chains: [mainnet, base, sepolia],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http(customSepoliaRpc),
  },
})

declare module '@wagmi/vue' {
  interface Register {
    config: typeof config
  }
}
