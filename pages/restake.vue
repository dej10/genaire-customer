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
            <div class="restake-settings">
              <div class="w-layout-hflex settings-control">
                <div class="restake-item-title">
                  Settings
                </div><img alt="" loading="lazy" src="/images/chevron.svg">
              </div>
              <div v-if="false" class="w-layout-vflex settings-slippage">
                <div>Adjust slippage</div>
                <div class="slippage-btns">
                  <div class="slippage-btn first active">
                    <div>1%</div>
                  </div>
                  <div class="slippage-btn">
                    <div>3%</div>
                  </div>
                  <div class="slippage-btn">
                    <div>5%</div>
                  </div>
                  <div class="slippage-btn last">
                    <div>Custom</div>
                  </div>
                </div>
              </div>
              <div v-if="false" class="w-layout-vflex settings-deadline">
                <div class="deadline-label">
                  Adjust deadline
                </div>
                <div class="w-layout-vflex deadline-field">
                  <input
                    class="slippage-value bg-transparent text-center text-white"
                    placeholder="10"
                    type="number"
                  >
                  <div>Minutes</div>
                </div>
              </div>
            </div>
            <div class="restake-stake">
              <div class="w-layout-hflex settings-control">
                <div class="restake-item-title">
                  Restake
                </div>
                <div class="w-layout-hflex restake-balance">
                  <div>Balance:</div>
                  <div>0.00</div>
                </div>
              </div>
              <div class="restake-input">
                <div class="restake-coin first">
                  <img alt="" class="coin-img" loading="lazy" src="/images/ethcoin_1ethcoin.png">
                  <div>ETH</div><img alt="" loading="lazy" src="/images/chevron.svg">
                </div>
                <div class="restake-input-p last">
                  <div class="restake-input-p-t">
                    <input
                      v-model="formData.amount"
                      class="coin-input borde outlin-none bg-transparent"
                      placeholder="0.00"
                      type="number"
                    >
                    <div class="max-btn">
                      <div>MAX</div>
                    </div>
                  </div>
                  <div class="restake-input-divider" />
                  <div class="restake-input-p-b">
                    <div>$0.00</div>
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
                  <div>0.00</div>
                </div>
              </div>
              <div class="restake-input">
                <div class="restake-receive first">
                  <img alt="" class="coin-img" loading="lazy" src="/images/ezETH_1ezETH.png">
                  <div>ezETH</div>
                </div>
                <div class="restake-input-p last">
                  <div class="restake-input-p-t">
                    <input
                      class="coin-input borde outlin-none bg-transparent text-white"
                      placeholder="0.00"
                      type="number"
                    >
                  </div>
                  <div class="restake-input-divider" />
                  <div class="restake-input-p-b">
                    <div>$0.00</div>
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
            <div>1.41%</div>
          </div>
          <div class="restake-totals-row">
            <div class="restake-total-item-name">
              Exchange Rate
            </div>
            <div>1 ETH = 0.99175 ezETH</div>
          </div>
          <div class="restake-totals-row">
            <div class="restake-total-item-name">
              Transaction Cost
            </div>
            <div>~ $17.48</div>
          </div>
          <div class="restake-totals-row">
            <div class="restake-total-item-name">
              Reward Fee
            </div>
            <div>10%</div>
          </div>
        </div>
        <a class="large primary w-button btn" @click.prevent="deposit">Restake</a>

        <div>
          <div v-if="!userAddress">
            Please connect your wallet
          </div>
          <div v-else>
            <div v-if="hash">
              Transaction Hash: {{ hash }}
            </div>
            <div v-if="isConfirming">
              Confirming transaction...
            </div>
            <div v-if="isConfirmed">
              Transaction confirmed!
            </div>
            <div v-if="TransactionError">
              Error: {{ TransactionError.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from '@wagmi/vue'
import { parseEther } from 'viem'

import abi from '~/abi.json'

const { address: userAddress } = useAccount()

const { data: hash, writeContract, isError, error } = useWriteContract()

const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
  hash,
})

const formData = ref({
  amount: 1000
})

const tokenAddress = ref('0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9')

const deposit = async () => {
  if (!userAddress) {
    console.error('No account connected')
    return
  }

  try {
    await writeContract({
      address: tokenAddress.value as `0x${string}`,
      abi,
      functionName: 'deposit',
      args: [parseEther(String(formData.value.amount))],
    })
  }
  catch (err) {
    console.error('Failed to send transaction:', err)
  }
}
</script>

<style scoped>

</style>
