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
                  </div><img alt="" loading="lazy" src="@/assets/images/chevron.svg" srcset="">
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
                  <div>Adjust slippage</div>
                  <div class="slippage-value">
                    <div>20</div>
                  </div>
                  <div>Minutes</div>
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
                    <img alt="" class="coin-img" loading="lazy" src="@/assets/images/ethcoin.png" srcset="">
                    <div>ETH</div><img alt="" loading="lazy" src="@/assets/images/chevron.svg" srcset="">
                  </div>
                  <div class="restake-input-p last">
                    <div class="restake-input-p-t">
                      <div class="coin-input">
                        0.00
                      </div>
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
                    <img alt="" class="coin-img" loading="lazy" src="@/assets/images/ezETH.png" srcset="">
                    <div>ezETH</div>
                  </div>
                  <div class="restake-input-p last">
                    <div class="restake-input-p-t">
                      <div class="coin-input">
                        0.00
                      </div>
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
          <NuxtLink class="large primary w-button btn" to="#">
            Restake
          </NuxtLink>
          <div class="w-layout-vflex restake-totals">
            <div class="restake-totals-row">
              <div>APR</div>
              <div>1.41%</div>
            </div>
            <div class="restake-totals-row">
              <div>Exchange Rate</div>
              <div>1 ETH = 0.99175 ezETH</div>
            </div>
            <div class="restake-totals-row">
              <div>Transaction Cost</div>
              <div>~ $17.48</div>
            </div>
            <div class="restake-totals-row">
              <div>Reward Fee</div>
              <div>10%</div>
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
