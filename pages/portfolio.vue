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
        <div class="w-layout-vflex referral-program tab-content">
          <div class="portfolio-title">
            Discover <span class="text-yellow"> Genaire</span>
          </div>
          <div id="w-node-_2cbbd4fc-65ce-b648-e6ac-62fa2b57c180-c3ee8008" class="w-layout-hflex portfolio-stats">
            <div id="w-node-_7b0309ba-5767-44df-7014-3964c4dd7f05-c3ee8008" class="portfolio-stat">
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
                  $0.00
                </div>
              </div>
            </div>
            <div id="w-node-_101655e3-b4a2-9c61-f6cf-7c9342c7152e-c3ee8008" class="portfolio-stat">
              <div class="w-layout-hflex portfolio-stat-header">
                <div class="portfolio-stat-title">
                  EigenLayer Points Earned
                </div>
                <div class="portfolio-stat-header-sub">
                  Points will start accruing 24 hours after deposit
                </div>
              </div>
              <div class="w-layout-hflex port-stats-value">
                <img alt="" class="port-stats-img" loading="lazy" src="@/assets/images/port-eigen.png" srcset="">
                <div class="portfolio-stats-value">
                  0 Pts
                </div>
              </div>
            </div>
            <div id="w-node-fafec070-6070-abdd-ac15-83083716ffda-c3ee8008" class="portfolio-stat">
              <div class="w-layout-hflex portfolio-stat-header">
                <div class="portfolio-stat-title">
                  Genaire ezPoints
                </div>
                <div class="portfolio-stat-header-sub">
                  Earn when you deposit ETH and refer your friends
                </div>
              </div>
              <div class="w-layout-hflex port-stats-value">
                <img alt="" class="port-stats-img" loading="lazy" src="@/assets/images/port-eth.png" srcset="">
                <div class="portfolio-stats-value">
                  0 Pts
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
                <div class="col-1 title">
                  <div>Assets</div>
                </div>
                <div id="w-node-c7824fcc-df1b-8857-ec70-433a04918b6b-c3ee8008" class="col-2 title">
                  <div>Chain</div>
                </div>
                <div id="w-node-_4e7c3b37-5baf-7973-67e9-3872106d0478-c3ee8008" class="col-3 title">
                  <div class="text-block-3">
                    Price
                  </div>
                </div>
                <div id="w-node-_187253c2-83ca-3118-6497-cbff56a64ef3-c3ee8008" class="col-4 title">
                  <div>Quantity</div>
                </div>
                <div id="w-node-f28d42bb-2260-e3fc-a1be-766d974a95f2-c3ee8008" class="col-5 title">
                  <div>Balance</div>
                </div>
                <div id="w-node-_5d701aac-f4c7-9d27-b60d-a19f5c58f319-c3ee8008" class="col-6 title">
                  <div>APR</div>
                </div>
              </div>
              <div class="w-layout-hflex port table-row">
                <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30bb-c3ee8008" class="col-1 row">
                  <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                  <div class="w-layout-vflex row-assets-name">
                    <div>Assets</div>
                    <div class="port-assets-name-sub">
                      ETH
                    </div>
                  </div>
                </div>
                <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30be-c3ee8008" class="col-2 row">
                  <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                  <div>Ethereum</div>
                </div>
                <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c1-c3ee8008" class="col-3">
                  <div>$3,157.73</div>
                </div>
                <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c4-c3ee8008" class="col-4">
                  <div>0.00</div>
                </div>
                <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c7-c3ee8008" class="col-5">
                  <div>0.00</div>
                </div>
                <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30ca-c3ee8008" class="col-6">
                  <NuxtLink class="small secondary w-button btn" to="#">
                    Restake
                  </NuxtLink>
                </div>
              </div>
              <div class="w-layout-hflex port table-row">
                <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814687-c3ee8008" class="col-1 row">
                  <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                  <div class="w-layout-vflex row-assets-name">
                    <div>Assets</div>
                    <div class="port-assets-name-sub">
                      ETH
                    </div>
                  </div>
                </div>
                <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca0781468e-c3ee8008" class="col-2 row">
                  <img alt="" class="port-row-img" loading="lazy" src="@/assets/images/eth_1.png" srcset="">
                  <div>Ethereum</div>
                </div>
                <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814692-c3ee8008" class="col-3">
                  <div>$3,157.73</div>
                </div>
                <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814695-c3ee8008" class="col-4">
                  <div>0.00</div>
                </div>
                <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814698-c3ee8008" class="col-5">
                  <div>0.00</div>
                </div>
                <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca0781469b-c3ee8008" class="col-6">
                  <NuxtLink class="small secondary w-button btn" to="#">
                    Restake
                  </NuxtLink>
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
