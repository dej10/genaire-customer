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
        <div class="w-layout-vflex tab-content">
          <div class="defi-body">
            <div class="w-layout-hflex port-body-header">
              <div class="port-body-title">
                DeFi <span class="text-yellow">Integrations</span>
              </div>
              <div class="port-table-actions">
                <div class="w-layout-hflex port-table-filter">
                  <div>Filter by: </div>
                  <div>All Chains</div>
                </div>
              </div>
            </div>
            <div class="port-body-table">
              <div class="w-layout-hflex table-header defi">
                <div class="col-1 title">
                  <div>Protocol</div>
                </div>
                <div id="w-node-c7824fcc-df1b-8857-ec70-433a04918b6b-c3ee8009" class="col-2 title">
                  <div>Chain</div>
                </div>
                <div id="w-node-_4e7c3b37-5baf-7973-67e9-3872106d0478-c3ee8009" class="col-3 title">
                  <div class="text-block-3">
                    Assets
                  </div>
                </div>
                <div id="w-node-_187253c2-83ca-3118-6497-cbff56a64ef3-c3ee8009" class="col-4 title">
                  <div>TVL</div>
                </div>
                <div id="w-node-f28d42bb-2260-e3fc-a1be-766d974a95f2-c3ee8009" class="col-5 title">
                  <div>Boost</div>
                </div>
              </div>
              <div class="w-layout-hflex defi table-row">
                <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30bb-c3ee8009" class="col-1 row">
                  <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                  <div>Zircuit</div>
                </div>
                <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30be-c3ee8009" class="col-2 row">
                  <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                  <div>Ethereum</div>
                </div>
                <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c1-c3ee8009" class="col-3">
                  <div>ezETH</div>
                </div>
                <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c4-c3ee8009" class="col-4">
                  <div>$773,142,862</div>
                </div>
                <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c7-c3ee8009" class="col-5">
                  <div>1x</div>
                </div>
              </div>
              <div class="w-layout-hflex defi table-row">
                <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814687-c3ee8009" class="col-1 row">
                  <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                  <div>Pendle</div>
                </div>
                <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca0781468e-c3ee8009" class="col-2 row">
                  <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                  <div>Ethereum</div>
                </div>
                <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814692-c3ee8009" class="col-3">
                  <div>$3,157.73</div>
                </div>
                <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814695-c3ee8009" class="col-4">
                  <div>$586,149,477</div>
                </div>
                <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814698-c3ee8009" class="col-5">
                  <div>2x</div>
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
