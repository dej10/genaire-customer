import { createConfig, http } from '@wagmi/vue'
import { base, mainnet, sepolia } from '@wagmi/vue/chains'
import { coinbaseWallet, injected, metaMask, safe, walletConnect } from '@wagmi/vue/connectors'

const projectId = 'cb5c10b83c8289f34cda0ce49b96fd2a'

const customSepoliaRpc = 'https://eth-sepolia.g.alchemy.com/v2/p37eQv5x_-NRTtav8rVzE3KoGvXvtYKE'

// const MetaMaskOptions = {
//   dappMetadata: {
//     name: 'Example Wagmi dapp',
//     url: ''
//   },
//   infuraAPIKey: 'YOUR-API-KEY',
// }

export const config = createConfig({
  chains: [mainnet, base, sepolia],
  connectors: [
    // injected(),
    walletConnect({ projectId }),
    coinbaseWallet(),
    // metaMask(MetaMaskOptions),
    // safe(),
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
declare module '@wagmi' {
  interface Register {
    config: typeof config
  }
}
