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
          <div class="ref-header">
            <div class="ref-title">
              You <span class="text-yellow">earn 10% </span>of the points your <span class="text-yellow">friends make</span>
            </div>
            <div class="ref-body">
              Referral deposits are supported on Ethereum mainnet and Layer 2s. To activate the referral, users need to use the referral link and deposit ETH on mainnet to start accruing referral points. Once a referral is active, the referring user will accrue 10% of all points, across all chains.
            </div>
          </div>
          <div id="w-node-_7b0309ba-5767-44df-7014-3964c4dd7f05-c3ee8007" class="referral-points">
            <div class="w-layout-hflex portfolio-stat-header">
              <div class="portfolio-stat-title">
                Referral points
              </div>
            </div>
            <div class="eigen-service-content">
              <div class="referral-points-value">
                0 Pts
              </div>
            </div>
          </div>
          <NuxtLink class="small primary w-button btn" to="#">
            Copy referral link
          </NuxtLink>
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
