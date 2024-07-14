<template>
  <div>
    <div class="navbar-no-shadow">
      <div class="navbar-no-shadow-container w-nav" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner">
        <div class="container-regular">
          <div class="navbar-wrapper-2">
            <NuxtLink class="navbar-brand-2 w-nav-brand" to="#" />
            <div class="w-layout-hflex nav-stats">
              <div class="w-layout-vflex nav-stat">
                <div class="nav-stat-label">
                  Total Value Restaked
                </div>
                <div class="nav-stat-divider" />
                <div class="nav-stat-value">
                  $8.08B
                </div>
              </div>
              <div class="w-layout-vflex nav-stat">
                <div class="nav-stat-label">
                  APR
                </div>
                <div class="nav-stat-divider" />
                <div class="nav-stat-value">
                  1.59%
                </div>
              </div>
              <div class="w-layout-vflex nav-stat">
                <div class="nav-stat-label">
                  EigenLayer Points
                </div>
                <div class="nav-stat-divider" />
                <div class="nav-stat-value">
                  2.45B
                </div>
              </div>
              <div class="w-layout-vflex nav-stat">
                <div class="nav-stat-label">
                  Renzo ezPoints
                </div>
                <div class="nav-stat-divider" />
                <div class="nav-stat-value">
                  1.25B
                </div>
              </div>
            </div>
            <nav class="nav-menu-wrapper w-nav-menu" role="navigation">
              <ul class="nav-menu w-list-unstyled" role="list">
                <li class="mobile-margin-top">
                  <div class="nav-button-wrapper">
                    <NuxtLink class="small primary w-button btn" to="#">
                      Restake
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </nav>
            <div class="menu-button-2 w-nav-button">
              <div class="icon w-icon-nav-menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="page">
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
                    The amount of Renzo assets that are used to collateralize ezETH, refer to analytics page for details
                  </div>
                </div>
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
              <div class="analtics-graph" />
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
              <div class="port-body-table">
                <div class="w-layout-hflex table-header">
                  <div class="col-1 title">
                    <div>Asset</div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0e0-c3ee800b" class="col-2 title">
                    <div>Price</div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0e3-c3ee800b" class="col-3 title">
                    <div class="text-block-3">
                      Quantity
                    </div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0e6-c3ee800b" class="col-4 title">
                    <div>Balance</div>
                  </div>
                </div>
                <div class="w-layout-hflex table-row">
                  <div id="w-node-_4d5803ac-c2eb-2513-4ae7-c4172b55f7e5-c3ee800b" class="col-1 row">
                    <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                    <div class="w-layout-vflex row-assets-name">
                      <div>Ethereum</div>
                      <div class="port-assets-name-sub">
                        ETH
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0f1-c3ee800b" class="col-2 row">
                    <div>$3,122.19</div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0f5-c3ee800b" class="col-3">
                    <div>1.02M</div>
                  </div>
                  <div id="w-node-_76473771-f482-5aff-b690-45112d80d0f8-c3ee800b" class="col-4">
                    <div>$3.9B</div>
                  </div>
                </div>
                <div class="w-layout-hflex table-row">
                  <div id="w-node-_7fbd68e1-e354-d5ed-527c-dcf180eab99c-c3ee800b" class="col-1 row">
                    <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                    <div class="w-layout-vflex row-assets-name">
                      <div>Lido Staked Ether</div>
                      <div class="port-assets-name-sub">
                        stETH
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_7fbd68e1-e354-d5ed-527c-dcf180eab9a3-c3ee800b" class="col-2 row">
                    <div>$3,122.19</div>
                  </div>
                  <div id="w-node-_7fbd68e1-e354-d5ed-527c-dcf180eab9a6-c3ee800b" class="col-3">
                    <div>1.02M</div>
                  </div>
                  <div id="w-node-_7fbd68e1-e354-d5ed-527c-dcf180eab9a9-c3ee800b" class="col-4">
                    <div>$3.9B</div>
                  </div>
                </div>
                <div class="w-layout-hflex table-row">
                  <div id="w-node-_8528e88c-b6a5-deb2-4a93-bb934cf7a564-c3ee800b" class="col-1 row">
                    <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                    <div class="w-layout-vflex row-assets-name">
                      <div>Binance Staked Ether</div>
                      <div class="port-assets-name-sub">
                        wBETH
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_8528e88c-b6a5-deb2-4a93-bb934cf7a56b-c3ee800b" class="col-2 row">
                    <div>$3,122.19</div>
                  </div>
                  <div id="w-node-_8528e88c-b6a5-deb2-4a93-bb934cf7a56e-c3ee800b" class="col-3">
                    <div>1.02M</div>
                  </div>
                  <div id="w-node-_8528e88c-b6a5-deb2-4a93-bb934cf7a571-c3ee800b" class="col-4">
                    <div>$3.9B</div>
                  </div>
                </div>
                <div class="w-layout-hflex table-row">
                  <div id="w-node-efded6a5-1c5b-7e2f-3e07-8422bb458aa4-c3ee800b" class="col-1 row total">
                    <div>Total</div>
                  </div>
                  <div id="w-node-efded6a5-1c5b-7e2f-3e07-8422bb458aa8-c3ee800b" class="col-2 row">
                    <div>Ethereum</div>
                  </div>
                  <div id="w-node-efded6a5-1c5b-7e2f-3e07-8422bb458aac-c3ee800b" class="col-3">
                    <div>$3,157.73</div>
                  </div>
                  <div id="w-node-efded6a5-1c5b-7e2f-3e07-8422bb458aaf-c3ee800b" class="col-4">
                    <div>$586,149,477</div>
                  </div>
                </div>
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
              <div class="port-body-table">
                <div class="w-layout-hflex table-header">
                  <div class="col-1 title">
                    <div>Protocol</div>
                  </div>
                  <div id="w-node-_7f89672b-fa5a-d38c-c701-44b2f68d5772-c3ee800b" class="col-2 title">
                    <div>Chain</div>
                  </div>
                  <div id="w-node-_7f89672b-fa5a-d38c-c701-44b2f68d5775-c3ee800b" class="col-3 title">
                    <div class="text-block-3">
                      Assets
                    </div>
                  </div>
                  <div id="w-node-_7f89672b-fa5a-d38c-c701-44b2f68d5778-c3ee800b" class="col-4 title">
                    <div>TVL</div>
                  </div>
                  <div id="w-node-_7f89672b-fa5a-d38c-c701-44b2f68d577b-c3ee800b" class="col-5 title">
                    <div>Boost</div>
                  </div>
                </div>
                <div class="w-layout-hflex table-row">
                  <div id="w-node-a639a030-f5c6-93f6-39f2-261653183f60-c3ee800b" class="col-1 row">
                    <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                    <div class="w-layout-vflex row-assets-name">
                      <div>Binance Staked Ether</div>
                      <div class="port-assets-name-sub">
                        wBETH
                      </div>
                    </div>
                  </div>
                  <div id="w-node-a639a030-f5c6-93f6-39f2-261653183f67-c3ee800b" class="col-2 row">
                    <div>$3,122.19</div>
                  </div>
                  <div id="w-node-a639a030-f5c6-93f6-39f2-261653183f6a-c3ee800b" class="col-3">
                    <div>1.02M</div>
                  </div>
                  <div id="w-node-a639a030-f5c6-93f6-39f2-261653183f6d-c3ee800b" class="col-4">
                    <div>$3.9B</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // Component options
}
</script>

<style scoped>

</style>
