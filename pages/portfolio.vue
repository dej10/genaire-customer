<template>
  <PageNav />
  <section class="page">
    <PageStats />
    <div class="w-layout-hflex page-content">
      <RestakeTabs />
      <div class="w-layout-vflex referral-program tab-content">
        <div class="portfolio-title">
          Discover <span class="text-yellow">Genaire</span>
        </div>
        <div id="w-node-_2cbbd4fc-65ce-b648-e6ac-62fa2b57c180-edc3d6f4" class="w-layout-hflex portfolio-stats">
          <div id="w-node-_7b0309ba-5767-44df-7014-3964c4dd7f05-edc3d6f4" class="portfolio-stat">
            <div class="w-layout-hflex portfolio-stat-header">
              <div class="portfolio-stat-title">
                Wallet Balance
              </div>
              <div class="portfolio-stat-header-sub">
                Assets supported by Genaire
              </div>
            </div>
            <div class="eigen-service-content">
              <div class="portfolio-stats-value">
                ${{ totalBalanceUsd.toFixed(2) }}
              </div>
            </div>
          </div>
          <!-- EigenLayer Points commented out
          <div id="w-node-_101655e3-b4a2-9c61-f6cf-7c9342c7152e-edc3d6f4" class="portfolio-stat">
            <div class="w-layout-hflex portfolio-stat-header">
              <div class="portfolio-stat-title">EigenLayer Points Earned</div>
              <div class="portfolio-stat-header-sub">Points will start accruing 24 hours after deposit</div>
            </div>
            <div class="w-layout-hflex port-stats-value">
              <img src="/images/port-eigen_1port-eigen.png" loading="lazy" alt="" class="port-stats-img">
              <div class="portfolio-stats-value">0 Pts</div>
            </div>
          </div>
          -->
          <div id="w-node-fafec070-6070-abdd-ac15-83083716ffda-edc3d6f4" class="portfolio-stat">
            <div class="w-layout-hflex portfolio-stat-header">
              <div class="portfolio-stat-title">
                Genaire gnPoints
              </div>
              <div class="portfolio-stat-header-sub">
                Earn when you deposit ETH and refer your friends
              </div>
            </div>
            <div class="w-layout-hflex port-stats-value">
              <img alt="" class="port-stats-img" loading="lazy" src="/images/port-eth_1port-eth.png">
              <div class="portfolio-stats-value">
                {{ formatGnPoints(gnPoints) }} Pts
              </div>
            </div>
          </div>
        </div>
        <div class="portfolio-body">
          <div class="w-layout-hflex port-body-header">
            <div class="port-body-title">
              My <span class="text-yellow">Portfolio</span>
            </div>
            <div class="port-table-actions">
              <div class="w-layout-hflex port-table-filter">
                <div>Filter by: </div>
                <div>All Chains</div>
              </div>
              <div class="table-actions-divider" />
              <div class="w-layout-hflex port-table-bals">
                <div class="check-box" />
                <div>Hide Zero balances</div>
              </div>
            </div>
          </div>
          <div class="port-body-table">
            <div class="w-layout-hflex table-header port">
              <div id="w-node-_9e1cacd1-f27b-9f8f-7bce-d3f073a968dc-edc3d6f4" class="col-1 title">
                <div>Assets</div>
              </div>
              <div id="w-node-c7824fcc-df1b-8857-ec70-433a04918b6b-edc3d6f4" class="col-2 title">
                <div>Chain</div>
              </div>
              <div id="w-node-_4e7c3b37-5baf-7973-67e9-3872106d0478-edc3d6f4" class="col-3 title">
                <div class="text-block-3">
                  Price
                </div>
              </div>
              <div id="w-node-_187253c2-83ca-3118-6497-cbff56a64ef3-edc3d6f4" class="col-4 title">
                <div>Quantity</div>
              </div>
              <div id="w-node-f28d42bb-2260-e3fc-a1be-766d974a95f2-edc3d6f4" class="col-5 title">
                <div>Balance</div>
              </div>
              <div id="w-node-_5d701aac-f4c7-9d27-b60d-a19f5c58f319-edc3d6f4" class="col-6 title">
                <div>APR</div>
              </div>
            </div>
            <div
              v-for="asset in userAssets"
              :key="asset.symbol"
              class="w-layout-hflex port table-row"
            >
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30bb-edc3d6f4" class="col-1 row">
                <img alt="" class="port-row-img" loading="lazy" :src="asset.icon">
                <div class="w-layout-vflex row-assets-name">
                  <div>{{ asset.name }}</div>
                  <div class="port-assets-name-sub">
                    {{ asset.symbol }}
                  </div>
                </div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30be-edc3d6f4" class="col-2 row hide-mob">
                <img alt="" class="port-row-img" loading="lazy" src="/images/eth_2eth.png">
                <div>{{ asset.chain }}</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c1-edc3d6f4" class="col-3">
                <div>${{ asset.price.toFixed(2) }}</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c4-edc3d6f4" class="col-4 hide-mob">
                <div>{{ asset.quantity.toFixed(6) }}</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c7-edc3d6f4" class="col-5">
                <div>${{ (asset.quantity * asset.price).toFixed(2) }}</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30ca-edc3d6f4" class="col-6">
                <a class="small secondary port w-button btn" href="#">Restake</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAccount, useBalance, useReadContract } from '@wagmi/vue'
import { formatEther } from 'viem'
import contractABI from '~/abi.json'

const contractAddress = '0x7103f3452B2bF777729b901Fb209fc445091dcaB'
const wethAddress = '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9'

const { address, isConnected } = useAccount()
const totalBalanceUsd = ref(0)
const gnPoints = ref(0)
const userAssets = ref<Record<string, any>[]>([])

// Fetch ETH balance
const { data: ethBalance } = useBalance({
  address,
})

// Fetch WETH balance
const { data: wethBalance } = useBalance({
  address,
  token: wethAddress,
})

// Fetch gnETH balance
const { data: gnEthBalance } = useBalance({
  address,
  token: contractAddress,
})

// Fetch gnPoints from contract
const { data: gnPointsData } = useReadContract({
  address: contractAddress,
  abi: contractABI,
  functionName: 'gnPointsOf',
  args: [address.value],
})

const formatGnPoints = (value: number) => value.toLocaleString(undefined, { maximumFractionDigits: 2 })
console.log('gnPointsData:', gnPointsData.value)

const safeNumber = (value: any) => {
  const num = Number(value)
  return Number.isNaN(num) ? 0 : num
}

const ethPrice = ref(0)
// Fetch ETH price
const fetchEthPrice = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    const data = await response.json()
    ethPrice.value = data.ethereum.usd

    // Calculate total balance in USD
    const ethBalanceUsd = safeNumber(formatEther(ethBalance.value?.value || 0n)) * safeNumber(ethPrice.value)
    const wethBalanceUsd = safeNumber(formatEther(wethBalance.value?.value || 0n)) * safeNumber(ethPrice.value)
    const gnEthBalanceUsd = safeNumber(formatEther(gnEthBalance.value?.value || 0n)) * safeNumber(ethPrice.value)

    totalBalanceUsd.value = ethBalanceUsd + wethBalanceUsd + gnEthBalanceUsd
  }
  catch (error) {
    console.error('Error fetching ETH price:', error)
    return false
  }
}

const initializeUserData = async () => {
  await fetchEthPrice()

  // Set gnPoints
  const rawGnPoints = Number(gnPointsData.value || 0n)

  gnPoints.value = rawGnPoints
  console.log('Raw gnPoints:', rawGnPoints)
  console.log('Formatted gnPoints:', formatGnPoints(rawGnPoints))

  // Set user assets
  userAssets.value = [
    {
      name: 'Ethereum',
      symbol: 'ETH',
      chain: 'Ethereum',
      icon: '/images/eth_2eth.png',
      price: ethPrice.value,
      quantity: Number(formatEther(ethBalance.value?.value || 0n)),
    },
    {
      name: 'Wrapped Ethereum',
      symbol: 'WETH',
      chain: 'Ethereum',
      icon: '/images/weth_icon.png',
      price: ethPrice.value,
      quantity: Number(formatEther(wethBalance.value?.value || 0n)),
    },
    {
      name: 'Genaire ETH',
      symbol: 'gnETH',
      chain: 'Ethereum',
      icon: '/images/gneth_icon.png',
      price: ethPrice.value,
      quantity: Number(formatEther(gnEthBalance.value?.value || 0n)),
    }
  ]
}

onMounted(() => {
  initializeUserData()
})

onMounted(async () => {
  // Calculate total balance in USD
  const ethBalanceUsd = safeNumber(formatEther(ethBalance.value?.value || 0n)) * safeNumber(ethPrice.value)
  const wethBalanceUsd = safeNumber(formatEther(wethBalance.value?.value || 0n)) * safeNumber(ethPrice.value)
  const gnEthBalanceUsd = safeNumber(formatEther(gnEthBalance.value?.value || 0n)) * safeNumber(ethPrice.value)

  totalBalanceUsd.value = ethBalanceUsd + wethBalanceUsd + gnEthBalanceUsd
})
</script>

<style scoped>
/* Add any additional styles here */
</style>
