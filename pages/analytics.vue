<template>
  <PageNav />
  <section class="page">
    <PageStats />
    <div class="w-layout-hflex page-content">
      <RestakeTabs />
      <div class="w-layout-vflex analytics tab-content">
        <div class="w-layout-vflex analytics-tab-content">
          <div class="analytics-body">
            <div class="w-layout-hflex analytics-header">
              <div class="w-layout-vflex analytics-title-group">
                <div class="analytics-body-title">
                  Total <span class="text-yellow">Restaked Value</span>
                </div>
                <div class="proof-title-sub">
                  The amount of Genaire assets that are used to collateralize ezETH, refer to analytics page for details
                </div>
              </div>
              <div class="w-layout-hflex graph-controls">
                <div class="currency-tab">
                  <button class="tab-btn" :class="[{ active: currency === 'USD' }]" @click="setCurrency('USD')">
                    US
                  </button>
                  <button class="tab-btn" :class="[{ active: currency === 'ETH' }]" @click="setCurrency('ETH')">
                    ETH
                  </button>
                </div>
                <div class="tabs-graph-period">
                  <button class="tab-btn" :class="[{ active: period === '1D' }]" @click="setPeriod('1D')">
                    1D
                  </button>
                  <button class="tab-btn" :class="[{ active: period === '1M' }]" @click="setPeriod('1M')">
                    1M
                  </button>
                  <button class="tab-btn" :class="[{ active: period === 'ALL' }]" @click="setPeriod('ALL')">
                    ALL
                  </button>
                </div>
              </div>
            </div>
            <div class="analytics-graph">
              <Line :data="chartData" :options="chartOptions" />
            </div>
          </div>
          <div class="analytics-body">
            <div class="w-layout-hflex analytics-header">
              <div class="analytics-body-title">
                Proof of <span class="text-yellow">Reserves</span>
              </div>
              <div class="proof-title-sub">
                The amount of Genaire assets that are used to collateralize ezETH
              </div>
            </div>
            <div class="port-body-table-wrapper">
              <div class="port-body-table">
                <div class="w-layout-hflex table-header">
                  <div class="col-1 title">
                    Asset
                  </div>
                  <div class="col-2 title">
                    Price
                  </div>
                  <div class="col-3 title">
                    Quantity
                  </div>
                  <div class="col-4 title">
                    Balance
                  </div>
                </div>
                <div v-for="asset in assets" :key="asset.symbol" class="w-layout-hflex table-row">
                  <div class="col-1 row">
                    <img :alt="asset.name" class="port-row-img" :src="asset.icon">
                    <div class="w-layout-vflex row-assets-name">
                      <div>{{ asset.name }}</div>
                      <div class="port-assets-name-sub">
                        {{ asset.symbol }}
                      </div>
                    </div>
                  </div>
                  <div class="col-2 row">
                    ${{ asset.price.toFixed(2) }}
                  </div>
                  <div class="col-3">
                    {{ asset.quantity.toFixed(2) }}{{ asset.symbol }}
                  </div>
                  <div class="col-4">
                    ${{ (asset.price * asset.quantity).toFixed(2) }}
                  </div>
                </div>
                <div class="w-layout-hflex total table-row">
                  <div class="col-1 row">
                    Total
                  </div>
                  <div class="col-2 row">
                    Ethereum
                  </div>
                  <div class="col-3">
                    {{ totalQuantity.toFixed(2) }} ETH
                  </div>
                  <div class="col-4">
                    ${{ totalBalance.toFixed(2) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReadContract } from '@wagmi/vue'
import { formatEther } from 'viem'
import { Line } from 'vue-chartjs'
import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js'
import contractABI from '~/abi.json'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const contractAddress = '0x7103f3452B2bF777729b901Fb209fc445091dcaB'

const currency = ref('USD')
const period = ref('1D')
const assets = ref<Record<string, any>[]>([])
const totalValueLocked = ref(0)

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Total Restaked Value',
      data: [],
      borderColor: '#FFF700',
      tension: 0.4,
    },
  ],
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

const generateChartData = () => {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const data = [3.06, 3.24, 3.15, 3.42, 3.33, 3.42]
  return { labels, data }
}

const updateChartData = () => {
  const { labels, data } = generateChartData()
  chartData.value = {
    labels,
    datasets: [
      {
        ...chartData.value.datasets[0],
        data
      }
    ]
  }
}

const setCurrency = (newCurrency: string) => {
  currency.value = newCurrency
  updateChartData()
}

const setPeriod = (newPeriod: string) => {
  period.value = newPeriod
  updateChartData()
}

const { data: tvlData } = useReadContract({
  address: contractAddress,
  abi: contractABI,
  functionName: 'totalValueLocked',
})

const fetchAssetData = () => {
  assets.value = [
    { name: 'Ethereum', symbol: 'ETH', icon: '/images/eth_2eth.png', price: 3122.19, quantity: 1.02 },
    { name: 'Lido Staked Ether', symbol: 'stETH', icon: '/images/steth_icon.png', price: 3122.19, quantity: 1.02 },
    { name: 'Binance Staked Ether', symbol: 'wBETH', icon: '/images/wbeth_icon.png', price: 3122.19, quantity: 1.02 },
  ]
}

const totalQuantity = computed(() => assets.value.reduce((total, asset) => total + asset.quantity, 0))

const totalBalance = computed(() => assets.value.reduce((total, asset) => total + (asset.price * asset.quantity), 0))

onMounted(() => {
  if (tvlData.value)
    totalValueLocked.value = Number(formatEther(tvlData.value || 0n))

  fetchAssetData()
  updateChartData()
})
</script>

<style scoped>
.analytics-graph {
  height: 400px;
  width: 100%;
}
.tab-btn {
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
}
.tab-btn.active {
  background-color: #FFF700;
  color: black;
}
</style>
