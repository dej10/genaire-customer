<template>
  <PageNav />
  <section class="page">
    <PageStats />
    <div class="w-layout-hflex page-content">
     <RestakeTabs />
      <div class="w-layout-vflex tab-content referral-program">
        <div class="portfolio-title">Discover <span class="text-yellow"> Genaire</span></div>
        <div id="w-node-_2cbbd4fc-65ce-b648-e6ac-62fa2b57c180-edc3d6f4" class="w-layout-hflex portfolio-stats">
          <div id="w-node-_7b0309ba-5767-44df-7014-3964c4dd7f05-edc3d6f4" class="portfolio-stat">
            <div class="w-layout-hflex portfolio-stat-header">
              <div class="portfolio-stat-title">Wallet Balance</div>
              <div class="portfolio-stat-header-sub">Assets supported by Genaire</div>
            </div>
            <div class="eigen-service-content">
              <div class="portfolio-stats-value">$0.00 </div>
            </div>
          </div>
          <div id="w-node-_101655e3-b4a2-9c61-f6cf-7c9342c7152e-edc3d6f4" class="portfolio-stat">
            <div class="w-layout-hflex portfolio-stat-header">
              <div class="portfolio-stat-title">EigenLayer Points Earned</div>
              <div class="portfolio-stat-header-sub">Points will start accruing 24 hours after deposit</div>
            </div>
            <div class="w-layout-hflex port-stats-value"><img src="/images/port-eigen_1port-eigen.png" loading="lazy" alt="" class="port-stats-img">
              <div class="portfolio-stats-value">0 Pts</div>
            </div>
          </div>
          <div id="w-node-fafec070-6070-abdd-ac15-83083716ffda-edc3d6f4" class="portfolio-stat">
            <div class="w-layout-hflex portfolio-stat-header">
              <div class="portfolio-stat-title">Genaire ezPoints</div>
              <div class="portfolio-stat-header-sub">Earn when you deposit ETH and refer your friends</div>
            </div>
            <div class="w-layout-hflex port-stats-value"><img src="/images/port-eth_1port-eth.png" loading="lazy" alt="" class="port-stats-img">
              <div class="portfolio-stats-value">0 Pts</div>
            </div>
          </div>
        </div>
        <div class="portfolio-body">
          <div class="w-layout-hflex port-body-header">
            <div class="port-body-title">My <span class="text-yellow">Portfolio</span></div>
            <div class="port-table-actions">
              <div class="w-layout-hflex port-table-filter">
                <div>Filter by: </div>
                <div>All Chains</div>
              </div>
              <div class="table-actions-divider"></div>
              <div class="w-layout-hflex port-table-bals">
                <div class="check-box"></div>
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
                <div class="text-block-3">Price</div>
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
            <div class="w-layout-hflex table-row port">
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30bb-edc3d6f4" class="col-1 row"><img src="/images/eth_2eth.png" loading="lazy" alt="" class="port-row-img">
                <div class="w-layout-vflex row-assets-name">
                  <div>Assets</div>
                  <div class="port-assets-name-sub">ETH</div>
                </div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30be-edc3d6f4" class="col-2 row hide-mob"><img src="/images/eth_2eth.png" loading="lazy" alt="" class="port-row-img">
                <div>Ethereum</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c1-edc3d6f4" class="col-3">
                <div>$3,157.73</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c4-edc3d6f4" class="col-4 hide-mob">
                <div>0.00</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c7-edc3d6f4" class="col-5">
                <div>0.00</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30ca-edc3d6f4" class="col-6">
                <a href="#" class="btn small secondary port w-button">Restake</a>
              </div>
            </div>
            <div class="w-layout-hflex table-row port">
              <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814687-edc3d6f4" class="col-1 row"><img src="/images/eth_2eth.png" loading="lazy" alt="" class="port-row-img">
                <div class="w-layout-vflex row-assets-name">
                  <div>Assets</div>
                  <div class="port-assets-name-sub">ETH</div>
                </div>
              </div>
              <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca0781468e-edc3d6f4" class="col-2 row"><img src="/images/eth_2eth.png" loading="lazy" alt="" class="port-row-img">
                <div>Ethereum</div>
              </div>
              <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814692-edc3d6f4" class="col-3">
                <div>$3,157.73</div>
              </div>
              <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814695-edc3d6f4" class="col-4">
                <div>0.00</div>
              </div>
              <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814698-edc3d6f4" class="col-5">
                <div>0.00</div>
              </div>
              <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca0781469b-edc3d6f4" class="col-6">
                <a href="#" class="btn small secondary port w-button">Restake</a>
              </div>
            </div>
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
