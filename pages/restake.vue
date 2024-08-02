<template>
 <PageNav />
  <section class="page">
   <PageStats/>
    <div class="w-layout-hflex page-content">
     <RestakeTabs />
      <div class="w-layout-vflex restake-content referral-program">
        <div class="portfolio-body">
          <div class="w-layout-hflex port-body-header">
            <div class="restake-body-title">Restake</div>
          </div>
          <div class="restake-body-content">
            <div class="restake-settings">
              <div class="w-layout-hflex settings-control">
                <div class="restake-item-title">Settings</div><img src="/images/chevron.svg" loading="lazy" alt="">
              </div>
              <div class="w-layout-vflex settings-slippage">
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
              <div class="w-layout-vflex settings-deadline">
                <div class="deadline-label">Adjust deadline</div>
                <div class="w-layout-vflex deadline-field">
                  <input 
                  type="number" 
                  class="slippage-value text-center bg-transparent text-white"
                  placeholder="10"/>
                  <div>Minutes</div>
                </div>
              </div>
            </div>
            <div class="restake-stake">
              <div class="w-layout-hflex settings-control">
                <div class="restake-item-title">Restake</div>
                <div class="w-layout-hflex restake-balance">
                  <div>Balance:</div>
                  <div>0.00</div>
                </div>
              </div>
              <div class="restake-input">
                <div class="restake-coin first"><img src="/images/ethcoin_1ethcoin.png" loading="lazy" alt="" class="coin-img">
                  <div>ETH</div><img src="/images/chevron.svg" loading="lazy" alt="">
                </div>
                <div class="restake-input-p last">
                  <div class="restake-input-p-t">
                    <input type="number" 
                    class="coin-input bg-transparent text-white borde outlin-none"
                    placeholder="0.00" />
                    <div class="max-btn">
                      <div>MAX</div>
                    </div>
                  </div>
                  <div class="restake-input-divider"></div>
                  <div class="restake-input-p-b">
                    <div>$0.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="restake-stake">
              <div class="w-layout-hflex settings-control">
                <div class="restake-item-title">Receive</div>
                <div class="w-layout-hflex restake-balance">
                  <div>Balance:</div>
                  <div>0.00</div>
                </div>
              </div>
              <div class="restake-input">
                <div class="restake-receive first"><img src="/images/ezETH_1ezETH.png" loading="lazy" alt="" class="coin-img">
                  <div>ezETH</div>
                </div>
                <div class="restake-input-p last">
                  <div class="restake-input-p-t">
                    <input type="number" 
                    class="coin-input bg-transparent text-white borde outlin-none"
                    placeholder="0.00" />
                  </div>
                  <div class="restake-input-divider"></div>
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
            <div class="restake-total-item-name">APR</div>
            <div>1.41%</div>
          </div>
          <div class="restake-totals-row">
            <div class="restake-total-item-name">Exchange Rate</div>
            <div>1 ETH = 0.99175 ezETH</div>
          </div>
          <div class="restake-totals-row">
            <div class="restake-total-item-name">Transaction Cost</div>
            <div>~ $17.48</div>
          </div>
          <div class="restake-totals-row">
            <div class="restake-total-item-name">Reward Fee</div>
            <div>10%</div>
          </div>
        </div>
        <a href="#" class="btn large primary w-button">Restake</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // Component options
}
</script>

<style scoped>

</style>
