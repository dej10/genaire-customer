<template>
  <PageNav />
  <section class="page">
    <PageStats />
    <div class="w-layout-hflex page-content">
      <RestakeTabs />
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
                      :value="amount"
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
</template>

<script setup lang="ts">
import { useAccount, useBalance, useEstimateGas, useReadContract, useWaitForTransactionReceipt, useWriteContract } from '@wagmi/vue'
import { erc20Abi, formatEther, parseEther } from 'viem'

import { getGasPrice } from '@wagmi/core'
import { config } from '../wagmi-config'
import contractABI from '~/abi.json'

const gasPrice = await getGasPrice(config)

const contractAddress = '0xbD149d1Fce18A725198CA3EdeD58dE454Cb10B7f'
const wethAddress = '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9'
const approvalResult = ref(null)

const { address, isConnected } = useAccount()
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

// Get APR from contract
const { data: aprData } = useReadContract({
  address: contractAddress,
  abi: contractABI,
  functionName: 'apr',
})

// Check WETH allowance
const { data: allowance } = useReadContract({
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

onMounted(async () => {
  if (aprData.value)
    apr.value = Number(aprData.value) / 100

  const gasEstimate = useEstimateGas({
    gasPrice,
    gasLimit: 200000n,
  })

  estimatedGasCost.value = Number(formatEther(gasEstimate))

  console.log('Estimated gas cost:', estimatedGasCost.value)
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
  approvalResult.value = await approveWETH({
    address: wethAddress, // Make sure this is defined
    abi: erc20Abi, // Make sure this is imported
    functionName: 'approve',
    args: [contractAddress, parseEther(String(amount.value))],
  })

  await useWaitForTransactionReceipt({ hash: approvalResult, config })
}

const deposit = async () => {
  if (!isConnected || !address.value) {
    console.log('Wallet not connected')
    return false
  }

  // Deposit WETH
  {
    const depositResult = await writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: 'deposit',
      args: [parseEther(String(amount.value))],
    })

    console.log('Deposit transaction hash:', depositResult)

    if (depositResult)
      console.log('Deposit transaction hash:', depositResult)
  }
}

const handlePay = () => {
  if (!hasAllowance.value)
    approve()

  if (isPending)
    approve()

  if (balance)
    deposit()
}

const buttonText = computed(() => {
  if (!isConnected.value)
    return 'Connect Wallet'
  else if (!hasAllowance.value)
    return 'Restake'
  else if (balance.value)
    return 'Restake'
  else if (isPending)
    return 'Pending'
  else
    return 'Restake'
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
