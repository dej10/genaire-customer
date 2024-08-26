<template>
  <PageNav />
  <section class="page">
    <PageStats />
    <div class="w-layout-hflex page-content">
      <RestakeTabs />
      <div class="w-layout-vflex referral-program tab-content">
        <div class="ref-header">
          <div class="ref-title">
            You <span class="text-yellow">earn 10% </span>of the points your <span class="text-yellow">friends make</span>
          </div>
          <div class="ref-body">
            Referral deposits are supported on Ethereum mainnet and Layer 2s. To activate the referral, users need to use the referral link and deposit ETH on mainnet to start accruing referral points. Once a referral is active, the referring user will accrue 10% of all points, across all chains.
          </div>
        </div>
        <div id="w-node-_7b0309ba-5767-44df-7014-3964c4dd7f05-edc3d6f3" class="referral-points">
          <div class="w-layout-hflex portfolio-stat-header">
            <div class="portfolio-stat-title">
              Referral points
            </div>
          </div>
          <div class="eigen-service-content">
            <div class="referral-points-value">
              {{ referralPoints }} Pts
            </div>
          </div>
        </div>
        <button class="small primary w-button btn" @click="copyReferralLink">
          Copy referral link
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAccount, useReadContract, useWriteContract } from '@wagmi/vue'
import { formatEther } from 'viem'
import { toast } from 'vue-sonner'
import { readContract } from '@wagmi/vue/actions'
import { config } from '../wagmi-config'
import contractABI from '~/abi.json'

definePageMeta({
  middleware: ['auth']
})

const contractAddress = '0x690E983090609A6564ffb405E6de990cBF7427a4'
const { address, isConnected } = useAccount()
const referralPoints = ref('0')
const referralLink = ref('')

const getReferralPoints = async () => {
  if (!isConnected.value || !address.value)
    return false

  const data = await readContract(config, {
    address: contractAddress,
    abi: contractABI,
    functionName: 'gnPointsOf',
    args: [address.value],
  })

  referralPoints.value = Number(formatEther(BigInt(data) || BigInt(0))).toFixed(2)
}

const generateReferralLink = () => {
  if (!isConnected.value || !address.value)
    return

  const baseUrl = window.location.origin
  referralLink.value = `${baseUrl}/restake?ref=${address.value}`
}

const copyReferralLink = () => {
  navigator.clipboard.writeText(referralLink.value)
  toast.success('Referral link copied to clipboard')
}

onMounted(async () => {
  console.log('isConnected', isConnected.value)
  // if (isConnected.value) {
  await getReferralPoints()
  generateReferralLink()
  // }
})
</script>

<style scoped>

</style>
