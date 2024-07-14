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
        <div class="w-layout-vflex eigenlayer tab-content">
          <div class="eigenlayer-title">
            Actively <span class="text-yellow">Validated Services</span>
          </div>
          <div class="eigen-body">
            <div id="w-node-_7b0309ba-5767-44df-7014-3964c4dd7f05-c3ee8006" class="eigen-service">
              <div class="w-layout-hflex portfolio-stat-header">
                <img id="w-node-e4637309-5693-9e21-ac45-771f682df08e-c3ee8006" alt="" class="eigenlayer-service-img" loading="lazy" src="@/assets/images/eigen_1eigen.png" srcset="">
                <div class="portfolio-stat-title">
                  EigenDA
                </div>
              </div>
              <div class="h-divider" />
              <div class="eigen-service-content">
                <div>EigenDA is a data availability store made by EigenLabs and built on top of EigenLayer.</div>
              </div>
              <div class="eiegenlayer-soon">
                <div>Rewards Coming soon</div>
              </div>
            </div>
            <div id="w-node-_2700cdc0-49f0-bfac-9e4f-03cd4f9a95a4-c3ee8006" class="eigen-service">
              <div class="w-layout-hflex portfolio-stat-header">
                <img id="w-node-_2700cdc0-49f0-bfac-9e4f-03cd4f9a95a6-c3ee8006" alt="" class="eigenlayer-service-img" loading="lazy" src="@/assets/images/eoracle_1eoracle.png" srcset="">
                <div class="portfolio-stat-title">
                  Eoracle
                </div>
              </div>
              <div class="h-divider" />
              <div class="eigen-service-content">
                <div>The modular and programmable oracle network secured by Ethereum, built with Eigenlayer.</div>
              </div>
              <div class="eiegenlayer-soon">
                <div>Rewards Coming soon</div>
              </div>
            </div>
            <div id="w-node-a24131cf-78cd-1f80-aaa6-445fa9f20d4f-c3ee8006" class="eigen-service">
              <div class="w-layout-hflex portfolio-stat-header">
                <img id="w-node-a24131cf-78cd-1f80-aaa6-445fa9f20d51-c3ee8006" alt="" class="eigenlayer-service-img" loading="lazy" src="@/assets/images/DA_1DA.png" srcset="">
                <div class="portfolio-stat-title">
                  EigenDA
                </div>
              </div>
              <div class="h-divider" />
              <div class="eigen-service-content">
                <div>AltLayer MACH is a fast finality AVS for OP Mainnet and Arbitrum One. As an AVS, users can delegate ETH or LSTs to any of the registered operators</div>
              </div>
              <div class="eiegenlayer-soon">
                <div>Rewards Coming soon</div>
              </div>
            </div>
            <div id="w-node-_9f91041d-25fb-ebd1-74ef-aef7b46e8393-c3ee8006" class="eigen-service">
              <div class="w-layout-hflex portfolio-stat-header">
                <img id="w-node-_9f91041d-25fb-ebd1-74ef-aef7b46e8395-c3ee8006" alt="" class="eigenlayer-service-img" loading="lazy" src="@/assets/images/lagrange_1lagrange.png" srcset="">
                <div class="portfolio-stat-title">
                  Lagrange
                </div>
              </div>
              <div class="h-divider" />
              <div class="eigen-service-content">
                <div>Lagrange State Committees are a ZK light client protocol for optimistic rollups that combine EigenLayer's restaked security with Lagrange's ZK Coprocessor.</div>
              </div>
              <div class="eiegenlayer-soon">
                <div>Rewards Coming soon</div>
              </div>
            </div>
            <div id="w-node-_29b415ff-90b1-eb63-e0d2-e009ef5cf10c-c3ee8006" class="eigen-service">
              <div class="w-layout-hflex portfolio-stat-header">
                <img id="w-node-_29b415ff-90b1-eb63-e0d2-e009ef5cf10e-c3ee8006" alt="" class="eigenlayer-service-img" loading="lazy" src="@/assets/images/coChain_1coChain.png" srcset="">
                <div class="portfolio-stat-title">
                  Brevis coChain AVS
                </div>
              </div>
              <div class="h-divider" />
              <div class="eigen-service-content">
                <div>Brevis is a Smart ZK Coprocessor For Blockchain run on EigenLayer.</div>
              </div>
              <div class="eiegenlayer-soon">
                <div>Rewards Coming soon</div>
              </div>
            </div>
            <div id="w-node-cb4b1476-4837-957e-b5bc-bff6380fb57a-c3ee8006" class="eigen-service">
              <div class="w-layout-hflex portfolio-stat-header">
                <img id="w-node-cb4b1476-4837-957e-b5bc-bff6380fb57c-c3ee8006" alt="" class="eigenlayer-service-img" loading="lazy" src="@/assets/images/witness_1witness.png" srcset="">
                <div class="portfolio-stat-title">
                  Witness Chain
                </div>
              </div>
              <div class="h-divider" />
              <div class="eigen-service-content">
                <div>AltLayer MACH is a fast finality AVS for OP Mainnet and Arbitrum One. As an AVS, users can delegate ETH or LSTs to any of the registered operators.vv</div>
              </div>
              <div class="eiegenlayer-soon">
                <div>Rewards Coming soon</div>
              </div>
            </div>
            <div id="w-node-_45ece4ae-e898-6494-7564-f473e6453f5d-c3ee8006" class="eigen-service">
              <div class="w-layout-hflex portfolio-stat-header">
                <img id="w-node-_45ece4ae-e898-6494-7564-f473e6453f5f-c3ee8006" alt="" class="eigenlayer-service-img" loading="lazy" src="@/assets/images/omni_1omni.png" srcset="">
                <div class="portfolio-stat-title">
                  Omni Network
                </div>
              </div>
              <div class="h-divider" />
              <div class="eigen-service-content">
                <div>Omni is an Ethereum-native interoperability protocol that establishes low latency communications across Ethereum’s rollup ecosystem.</div>
              </div>
              <div class="eiegenlayer-soon">
                <div>Coming soon</div>
              </div>
            </div>
            <div id="w-node-_131579cc-b5fb-2bfc-9895-82071e13b824-c3ee8006" class="eigen-service">
              <div class="w-layout-hflex portfolio-stat-header">
                <img id="w-node-_131579cc-b5fb-2bfc-9895-82071e13b826-c3ee8006" alt="" class="eigenlayer-service-img" loading="lazy" src="@/assets/images/brevis_1brevis.png" srcset="">
                <div class="portfolio-stat-title">
                  Brevis coChain AVS
                </div>
              </div>
              <div class="h-divider" />
              <div class="eigen-service-content">
                <div>Xterio is a Web3 game developer and publisher founded by veterans of the game industry.</div>
              </div>
              <div class="eiegenlayer-soon">
                <div>Coming soon</div>
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
