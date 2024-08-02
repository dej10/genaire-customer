<template>
  <PageNav />
  <section class="page">
    <PageStats />
    <div class="w-layout-hflex page-content">
      <RestakeTabs />
      <div class="w-layout-vflex tab-content">
        <div class="defi-body">
          <div class="w-layout-hflex port-body-header">
            <div class="port-body-title">DeFi <span class="text-yellow">Integrations</span></div>
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
              <div id="w-node-c7824fcc-df1b-8857-ec70-433a04918b6b-edc3d6f5" class="col-2 title">
                <div>Chain</div>
              </div>
              <div id="w-node-_4e7c3b37-5baf-7973-67e9-3872106d0478-edc3d6f5" class="col-3 title">
                <div class="text-block-3">Assets</div>
              </div>
              <div id="w-node-_187253c2-83ca-3118-6497-cbff56a64ef3-edc3d6f5" class="col-4 title hide-mob">
                <div>TVL</div>
              </div>
              <div id="w-node-f28d42bb-2260-e3fc-a1be-766d974a95f2-edc3d6f5" class="col-5 title hide-mob">
                <div>Boost</div>
              </div>
            </div>
            <div class="w-layout-hflex table-row defi">
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30bb-edc3d6f5" class="col-1 row"><img src="/images/eth_2eth.png" loading="lazy" alt="" class="port-row-img">
                <div>Zircuit</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30be-edc3d6f5" class="col-2 row hide-mob"><img src="/images/eth_2eth.png" loading="lazy" alt="" class="port-row-img">
                <div>Ethereum</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c1-edc3d6f5" class="col-3">
                <div>ezETH</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c4-edc3d6f5" class="col-4">
                <div>$773,142,862</div>
              </div>
              <div id="w-node-_896415b8-dbe6-99e7-f43c-ad04b43b30c7-edc3d6f5" class="col-5">
                <div>1x</div>
              </div>
            </div>
            <div class="w-layout-hflex table-row defi">
              <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814687-edc3d6f5" class="col-1 row"><img src="/images/eth_2eth.png" loading="lazy" alt="" class="port-row-img">
                <div>Pendle</div>
              </div>
              <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca0781468e-edc3d6f5" class="col-2 row hide-mob"><img src="/images/eth_2eth.png" loading="lazy" alt="" class="port-row-img">
                <div>Ethereum</div>
              </div>
              <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814692-edc3d6f5" class="col-3">
                <div>ezETH</div>
              </div>
              <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814695-edc3d6f5" class="col-4">
                <div>$586,149,477</div>
              </div>
              <div id="w-node-b14302e6-d86a-68aa-10ed-d6ca07814698-edc3d6f5" class="col-5">
                <div>2x</div>
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
