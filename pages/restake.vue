<template>
  <PageNav />

  <section class="page">
    <PageStats />
    <div class="w-layout-hflex page-content">
      <RestakeTabs />
      APR{{ apr }}
      <div class="w-layout-vflex restake-content referral-program">
        <div class="portfolio-body">
          <div class="w-layout-hflex port-body-header">
            <div class="restake-body-title">
              Restake
            </div>
          </div>
          <div class="restake-body-content">
            <div class="restake-stake">
              <div class="w-layout-hflex settings-control">
                <div class="restake-item-title">
                  Restake
                </div>
                <div class="w-layout-hflex restake-balance">
                  <div>Balance:</div>
                  <div>{{ formatEther(balance?.value || 0n) }} WETH</div>
                </div>
              </div>
              <div class="restake-input">
                <div v-if="selectTokenMenuOpen" class="select-token-container">
                  <SelectToken @close="toggleSelectTokenMenu" />
                </div>
                <button class="restake-coin first" @click="toggleSelectTokenMenu">
                  <img alt="" class="coin-img" loading="lazy" src="/images/ethcoin_1ethcoin.png">
                  <div>WETH</div>
                  <img alt="" loading="lazy" src="/images/chevron.svg">
                </button>
                <div class="restake-input-p last">
                  <div class="restake-input-p-t">
                    <input
                      v-model="amount"
                      class="coin-input borde outlin-none bg-transparent"
                      :max="formatEther(balance?.value || 0n)"
                      placeholder="0.00"
                      type="number"
                    >
                    <div class="max-btn" @click="setMaxAmount">
                      <div>MAX</div>
                    </div>
                  </div>
                  <div class="restake-input-divider" />
                  <div class="restake-input-p-b">
                    <div>${{ calculateUsdValue(amount) }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="restake-stake">
              <div class="w-layout-hflex settings-control">
                <div class="restake-item-title">
                  Receive
                </div>
                <div class="w-layout-hflex restake-balance">
                  <div>Balance:</div>
                  <div>{{ formatEther(gnETHBalance?.value || 0n) }} gnETH</div>
                </div>
              </div>
              <div class="restake-input">
                <div class="restake-receive first">
                  <img alt="" class="coin-img" loading="lazy" src="/images/ezETH_1ezETH.png">
                  <div>gnETH</div>
                </div>
                <div class="restake-input-p last">
                  <div class="restake-input-p-t">
                    <input
                      class="coin-input borde outlin-none bg-transparent text-white"
                      disabled
                      placeholder="0.00"
                      type="number"
                      :value="gnETHAmount"
                    >
                  </div>
                  <div class="restake-input-divider" />
                  <div class="restake-input-p-b">
                    <div>${{ calculateUsdValue(amount) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-layout-vflex restake-totals">
          <div class="restake-totals-row">
            <div class="restake-total-item-name">
              APR
            </div>
            <div>{{ apr }}%</div>
          </div>
          <div class="restake-totals-row">
            <div class="restake-total-item-name">
              Exchange Rate
            </div>
            <div>1 WETH = 1 gnETH</div>
          </div>
          <div class="restake-totals-row">
            <div class="restake-total-item-name">
              Transaction Cost
            </div>
            <div>~ ${{ estimatedGasCost }}</div>
          </div>
          <div class="restake-totals-row">
            <div class="restake-total-item-name">
              Reward Fee
            </div>
            <div>10%</div>
          </div>
        </div>
        <button
          class="large primary w-button btn"
          @click.stop="handlePay"
        >
          <Icon v-if="walletConnectStatus === 'pending'" class="animate-spin" name="gg-spinner" />
          {{ buttonText }}
        </button>

        <div v-if="isConnected">
          <div v-if="hash">
            Transaction Hash: {{ hash }}
          </div>
          <div v-if="isConfirming">
            Confirming transaction...
          </div>
          <div v-if="isConfirmed">
            Transaction confirmed!
          </div>
          <div v-if="error">
            Error: {{ error.message }}
          </div>
        </div>
        <div v-else>
          Please connect your wallet
        </div>
      </div>
    </div>
  </section>

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
</template>

<script setup lang="ts">
import type { Connector } from '@wagmi/vue'
import { useAccount, useBalance, useConnect, useEstimateGas, useReadContract, useWaitForTransactionReceipt, useWriteContract } from '@wagmi/vue'
import { erc20Abi, formatEther, parseEther } from 'viem'

// import { getGasPrice } from '@wagmi/core'
import { getGasPrice } from '@wagmi/vue/actions'
import { toast } from 'vue-sonner'
import { config } from '../wagmi-config'
import walletConnect from '~/public/images/wallet-connect.png'
import coinbaseWallet from '~/assets/images/coinbase.png'
import contractABI from '~/abi.json'

const gasPrice = await getGasPrice(config)

const contractAddress = '0x690E983090609A6564ffb405E6de990cBF7427a4'
const wethAddress = '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9'
const approvalResult = ref(null)
const showModal = ref(false)
const gnETHAmount = ref('0')
const route = useRoute()

const { address, isConnected } = useAccount()
const { connect, connectors, status: walletConnectStatus } = useConnect()
const amount = ref(0)
const apr = ref(0)
const estimatedGasCost = ref(0)

// Get WETH balance
const { data: balance } = useBalance({
  address,
  token: wethAddress,
})

// Get gnETH balance
const { data: gnETHBalance } = useBalance({
  address,
  token: contractAddress,
})

// Get gnETH amount
const getTokenValueInEth = await useReadContract({
  address: contractAddress,
  abi: contractABI,
  functionName: 'getTokenValueInEth',
  args: [wethAddress, parseEther(String(amount.value))],
})

// Get APR from contract
const { data: aprData } = await useReadContract({
  address: contractAddress,
  abi: contractABI,
  functionName: 'apr',
})

// Check WETH allowance
const { data: allowance } = await useReadContract({
  address: wethAddress,
  abi: erc20Abi,
  functionName: 'allowance',
  args: [address.value, contractAddress],
})

const hasAllowance = computed(() => {
  if (!allowance.value || !amount.value)
    return false
  return allowance.value >= parseEther(String(amount.value))
})

// Approve WETH spending
const { writeContractAsync: approveWETH } = useWriteContract({
  address: wethAddress,
  abi: erc20Abi,
  functionName: 'approve',
})

// Deposit function
const { data: hash, error, isPending, writeContractAsync: writeContract } = useWriteContract({
  address: contractAddress,
  abi: contractABI,
  functionName: 'deposit',
})

const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
  hash,
})

const selectTokenMenuOpen = ref(false)

const toggleSelectTokenMenu = () => {
  selectTokenMenuOpen.value = !selectTokenMenuOpen.value
}

const { writeContractAsync: setReferrer } = useWriteContract({
  address: contractAddress,
  abi: contractABI,
  functionName: 'setReferrer',
})

const setUserReferrer = async (referrerAddress: string) => {
  if (!isConnected.value || !address.value)
    return

  try {
    await setReferrer({ args: [referrerAddress] })
    // Wait for transaction confirmation
    // Show success message
  }
  catch (error) {
    console.error('Error setting referrer:', error)
    // Show error message
  }
}

onMounted(async () => {
  if (aprData.value)
    apr.value = Number(aprData.value) / 100

  console.log(gasPrice)

  const gasEstimate = useEstimateGas({
    account: address.value,
    to: contractAddress,
    // gasPrice: parseGwei('20'),
  })

  estimatedGasCost.value = formatEther(gasEstimate)

  console.log('Estimated gas cost:', estimatedGasCost.value)

  const referrer = route.query.ref
  if (referrer && typeof referrer === 'string')
    setUserReferrer(referrer)
})

const setMaxAmount = () => {
  amount.value = formatEther(balance.value?.value || 0n)
}

const calculateUsdValue = (amount: string) => {
  // Implement price fetching logic here
  const ethPrice = 2000 // Placeholder, replace with actual ETH price
  return (Number.parseFloat(amount) * ethPrice).toFixed(2)
}

const approve = async () => {
  if (amount.value <= 0)
    return toast.error('Amount is less than or equal to 0')

  approvalResult.value = await approveWETH({
    address: wethAddress,
    abi: erc20Abi,
    functionName: 'approve',
    args: [contractAddress, parseEther(String(amount.value))],
  })

  const data = await useWaitForTransactionReceipt({ hash: approvalResult, config })

  if (data)
    toast.success('Approval successful')
}

const deposit = async () => {
  if (balance.value?.value < amount.value) {
    console.error('Insufficient balance')
    return false
  }

  if (!isConnected || !address.value) {
    toast.error('Wallet not connected')
    return false
  }

  // Deposit WETH
  {
    const depositResult = await writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: 'deposit',
      args: [wethAddress, parseEther(String(amount.value))],
    })

    if (depositResult)
      toast.success('Deposit successful')
  }
}

const handlePay = () => {
  if (!isConnected.value)
    return showModal.value = true

  if (!hasAllowance.value)
    return approve()

  if (isPending)
    return approve()

  if (balance)
    return deposit()
}

const buttonText = computed(() => {
  if (!isConnected.value)
    return 'Connect Wallet'
  else if (!hasAllowance.value)
    return 'Approve WETH'
  else if (balance.value)
    return 'Restake'
  else if (isPending)
    return 'Pending'
  else
    return 'Restake'
})

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

watch(amount, async () => {
  gnETHAmount.value = formatEther(getTokenValueInEth.value || 0n)
})

watch(walletConnectStatus, (newVal) => {
  if (newVal === 'success')
    toast.success('Wallet connected')
})
</script>

<style scoped>
.large.primary.w-button.btn{
  cursor: pointer;
}

.restake-input{
  position: relative;
}

.select-token-container {
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 5;
}
</style>
