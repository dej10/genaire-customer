<template>
  <PageNav />
    <section class="page">
    <PageStats />
    <div class="w-layout-hflex page-content">
     <RestakeTabs />
      <div class="w-layout-vflex tab-content analytics">
        <div class="w-layout-vflex analytics-tab-content">
          <div class="analytics-body">
            <div class="w-layout-hflex analytics-header">
              <div class="w-layout-vflex analytics-title-group">
                <div class="analytics-body-title">Total <span class="text-yellow">Restaked Value</span></div>
                <div class="proof-title-sub">The amount of Renzo assets that are used to collateralize ezETH, refer to analytics page for details</div>
              </div>
              <div class="w-layout-hflex graph-controls">
                <div class="currency-tab">
                  <div class="tab-btn first active">
                    <div>US</div>
                  </div>
                  <div class="tab-btn last">
                    <div>ETH</div>
                  </div>
                </div>
                <div class="tabs-graph-period">
                  <div class="tab-btn first active">
                    <div>1D</div>
                  </div>
                  <div class="tab-btn">
                    <div>1M</div>
                  </div>
                  <div class="tab-btn last">
                    <div>ALL</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="analtics-graph"></div>
          </div>
          <div class="analytics-body">
            <div class="w-layout-hflex analytics-header">
              <div class="analytics-body-title">Proof of <span class="text-yellow">Reserves</span></div>
              <div class="proof-title-sub">The amount of Genaire assets that are used to collateralize ezETH</div>
            </div>
            <div class="port-body-table-wrapper">
              <div class="port-body-table">
                <div class="w-layout-hflex table-header">
                  <div class="col-1 title">
                    <div>Asset</div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0e0-edc3d6f7" class="col-2 title">
                    <div>Price</div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0e3-edc3d6f7" class="col-3 title">
                    <div class="text-block-3">Quantity</div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0e6-edc3d6f7" class="col-4 title">
                    <div>Balance</div>
                  </div>
                </div>
                <div class="w-layout-hflex table-row">
                  <div id="w-node-_4d5803ac-c2eb-2513-4ae7-c4172b55f7e5-edc3d6f7" class="col-1 row"><img src="/images/eth_2eth.png" loading="lazy" alt="" class="port-row-img">
                    <div class="w-layout-vflex row-assets-name">
                      <div>Ethereum</div>
                      <div class="port-assets-name-sub">ETH</div>
                    </div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0f1-edc3d6f7" class="col-2 row">
                    <div>$3,122.19</div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0f5-edc3d6f7" class="col-3">
                    <div>1.02M</div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0f8-edc3d6f7" class="col-4">
                    <div>$3.9B</div>
                  </div>
                </div>
                <div class="w-layout-hflex table-row">
                  <div id="w-node-_7fbd68e1-e354-d5ed-527c-dcf180eab99c-edc3d6f7" class="col-1 row"><img src="/images/eth_2eth.png" loading="lazy" alt="" class="port-row-img">
                    <div class="w-layout-vflex row-assets-name">
                      <div>Lido Staked Ether</div>
                      <div class="port-assets-name-sub">stETH</div>
                    </div>
                  </div>
                  <div id="w-node-_7fbd68e1-e354-d5ed-527c-dcf180eab9a3-edc3d6f7" class="col-2 row">
                    <div>$3,122.19</div>
                  </div>
                  <div id="w-node-_7fbd68e1-e354-d5ed-527c-dcf180eab9a6-edc3d6f7" class="col-3">
                    <div>1.02M</div>
                  </div>
                  <div id="w-node-_7fbd68e1-e354-d5ed-527c-dcf180eab9a9-edc3d6f7" class="col-4">
                    <div>$3.9B</div>
                  </div>
                </div>
                <div class="w-layout-hflex table-row">
                  <div id="w-node-_8528e88c-b6a5-deb2-4a93-bb934cf7a564-edc3d6f7" class="col-1 row"><img src="/images/eth_2eth.png" loading="lazy" alt="" class="port-row-img">
                    <div class="w-layout-vflex row-assets-name">
                      <div>Binance Staked Ether</div>
                      <div class="port-assets-name-sub">wBETH</div>
                    </div>
                  </div>
                  <div id="w-node-_8528e88c-b6a5-deb2-4a93-bb934cf7a56b-edc3d6f7" class="col-2 row">
                    <div>$3,122.19</div>
                  </div>
                  <div id="w-node-_8528e88c-b6a5-deb2-4a93-bb934cf7a56e-edc3d6f7" class="col-3">
                    <div>1.02M</div>
                  </div>
                  <div id="w-node-_8528e88c-b6a5-deb2-4a93-bb934cf7a571-edc3d6f7" class="col-4">
                    <div>$3.9B</div>
                  </div>
                </div>
                <div class="w-layout-hflex table-row">
                  <div id="w-node-efded6a5-1c5b-7e2f-3e07-8422bb458aa4-edc3d6f7" class="col-1 row total">
                    <div>Total</div>
                  </div>
                  <div id="w-node-efded6a5-1c5b-7e2f-3e07-8422bb458aa8-edc3d6f7" class="col-2 row">
                    <div>Ethereum</div>
                  </div>
                  <div id="w-node-efded6a5-1c5b-7e2f-3e07-8422bb458aac-edc3d6f7" class="col-3">
                    <div>$3,157.73</div>
                  </div>
                  <div id="w-node-efded6a5-1c5b-7e2f-3e07-8422bb458aaf-edc3d6f7" class="col-4">
                    <div>$586,149,477</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="analytics-body">
            <div class="w-layout-hflex analytics-header">
              <div class="analytics-body-title">Ciculating <span class="text-yellow">Supply</span></div>
              <div class="proof-title-sub">The amount of ezETH that are circulating in the market</div>
            </div>
            <div class="port-body-table-wrapper"></div>
          </div>
        </div>
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
