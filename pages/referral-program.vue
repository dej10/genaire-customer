<template>
  <PageNav />
   <section class="page">
    <PageStats />
    <div class="w-layout-hflex page-content">
      <RestakeTabs />
      <div class="w-layout-vflex tab-content referral-program">
        <div class="ref-header">
          <div class="ref-title">You <span class="text-yellow">earn 10% </span>of the points your <span class="text-yellow">friends make</span></div>
          <div class="ref-body">Referral deposits are supported on Ethereum mainnet and Layer 2s. To activate the referral, users need to use the referral link and deposit ETH on mainnet to start accruing referral points. Once a referral is active, the referring user will accrue 10% of all points, across all chains.</div>
        </div>
        <div id="w-node-_7b0309ba-5767-44df-7014-3964c4dd7f05-edc3d6f3" class="referral-points">
          <div class="w-layout-hflex portfolio-stat-header">
            <div class="portfolio-stat-title">Referral points</div>
          </div>
          <div class="eigen-service-content">
            <div class="referral-points-value">0 Pts</div>
          </div>
        </div>
        <a href="#" class="btn small primary w-button">Copy referral link</a>
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
