<template>
  <div>
    <HomeNav />
    <section class="hero-section">
      <div class="w-layout-vflex hero-content">
        <h1 class="h1">
          ezETH Restaking
        </h1>
        <div class="hero-subtext">
          <div class="text-32">
            The EigenLayer Liquid Restaking Hub
          </div>
        </div>
        <NuxtLink class="primary w-button btn" to="/restake">
          Restake
        </NuxtLink>
      </div>
    </section>
    <section class="card-section">
      <div class="card-intro">
        <div class="text-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div class="w-layout-hflex card-group">
        <div class="card">
          <div class="card-image">
            <img alt="" loading="lazy" src="@/assets/images/eth.png" srcset="">
          </div>
          <div class="card-title">
            Deposit ETH Anywhere
          </div>
          <div class="card-content">
            ezETH holders receive 100% of EigenLayer points.
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img alt="" loading="lazy" src="@/assets/images/bnb.png" srcset="">
          </div>
          <div class="card-title">
            Deposit wBETH on Mainnet
          </div>
          <div class="card-content">
            Depositors receive 1 ezETH per 1 wBETH deposit and 100% of EigenLayer points.
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img alt="" loading="lazy" src="@/assets/images/lido.png" srcset="">
          </div>
          <div class="card-title">
            Deposit stETH on Mainnet
          </div>
          <div class="card-content">
            Depositors receive 1 ezETH per 1 stETH deposit and 100% of EigenLayer points.
          </div>
        </div>
      </div>
    </section>
    <section class="details">
      <div class="w-layout-hflex eingenlayer">
        <div class="detail-image">
          <img alt="" class="image-2" loading="lazy" sizes="(max-width: 767px) 90vw, 512px" src="@/assets/images/Untitled-Eigenlayer-1.png" srcset="">
        </div>
        <div class="content eigenlayer">
          <div class="text-44 eigenlayer">
            What is <span class="highlight">EigenLayer</span> ?
          </div>
          <div class="text-20 eigenlayer">
            A new DeFi primitive, restaking, that allows Ethereum users to stake their ETH and secure Actively Validated Services (AVSs) that generate rewards in addition to staking rewards.
          </div>
          <NuxtLink class="secondary w-button btn" to="#">
            EigenLayer Docs
          </NuxtLink>
        </div>
      </div>
      <div class="w-layout-hflex renzo">
        <div class="content renzo">
          <div class="text-44 renzo">
            What is <span class="highlight">Renzo</span> ?
          </div>
          <div class="text-20 renzo">
            Renzo is a Liquid Restaking Token (LRT) and Strategy Manager for EigenLayer. It is the interface to the EigenLayer ecosystem securing Actively Validated Services (AVSs) and offering a higher yield than ETH staking.The protocol abstracts all complexity from the end-user and enables easy collaboration between users and EigenLayer node operators.
          </div>
          <NuxtLink class="secondary w-button btn" to="#">
            Renzo Docs
          </NuxtLink>
        </div>
        <div class="detail-image">
          <img alt="" class="image" loading="lazy" sizes="(max-width: 479px) 164.9375px, 309.2578125px" src="@/assets/images/Renzo-1.png" srcset="">
        </div>
      </div>
    </section>
    <section class="investor-section">
      <div class="gradient-border top" />
      <div class="investor-title">
        <div class="text-32">
          INVESTORS
        </div>
      </div>
      <div class="investor-group">
        <div class="investor">
          <img alt="" class="investor-img" loading="lazy" src="@/assets/images/Untitled-karatage.png" srcset="">
        </div>
        <div class="investor">
          <img alt="" class="investor-img" loading="lazy" sizes="(max-width: 479px) 160px, 300px" src="@/assets/images/Untitled-from-Figma-1.png" srcset="">
        </div>
        <div class="investor">
          <img alt="" class="investor-img" loading="lazy" src="@/assets/images/Untitled-from-Figma.png" srcset="">
        </div>
      </div>
      <div class="gradient-border btm" />
    </section>
    <section class="footer-section">
      <div class="logo">
        <img alt="" class="image-4" loading="lazy" src="@/assets/images/genaire-logo.svg" srcset="">
      </div>
      <div class="footer-links">
        <div class="column">
          <NuxtLink class="footer-link w-inline-block" to="#">
            Twitter
          </NuxtLink>
          <NuxtLink class="footer-link w-inline-block" to="#">
            Documentation
          </NuxtLink>
          <NuxtLink class="footer-link w-inline-block" to="#">
            GitHub
          </NuxtLink>
        </div>
        <div class="column">
          <NuxtLink class="footer-link w-inline-block" to="#">
            Bug Bounty
          </NuxtLink>
          <NuxtLink class="footer-link w-inline-block" to="#">
            Audits
          </NuxtLink>
          <NuxtLink class="footer-link w-inline-block" to="#">
            Lore ipsum
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script  setup lang="ts">

</script>

<style scoped>

</style>
