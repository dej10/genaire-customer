<template>
  <div class="navbar-no-shadow">
    <div
      class="navbar-no-shadow-container w-nav"
      data-animation="default" data-collapse="medium"
      data-duration="400" data-easing="ease"
      data-easing2="ease" role="banner"
    >
      <div class="container-regular">
        <div class="navbar-wrapper-2">
          <a class="navbar-brand-2 w-nav-brand" href="#">
            <div class="nav-logo"><img alt="" class="image-3" loading="lazy" src="@/assets/images/genaire-logo.svg"></div>
          </a>
          <nav class="nav-menu-wrapper w-nav-menu" role="navigation">
            <ul class="nav-menu w-list-unstyled" role="list">
              <li>
                <div class="nav-dropdown-2 w-dropdown" data-delay="0" data-hover="false">
                  <div class="nav-dropdown-toggle w-dropdown-toggle">
                    <div class="nav-dropdown-icon-2 w-icon-dropdown-toggle" />
                    <div class="text-block">
                      Developers
                    </div>
                  </div>
                  <nav class="nav-dropdown-list shadow-three mobile-shadow-hide w-dropdown-list">
                    <a class="nav-dropdown-link-2 w-dropdown-link" href="#">Resource Link 1</a>
                    <a class="nav-dropdown-link-2 w-dropdown-link" href="#">Resource Link 2</a>
                    <a class="nav-dropdown-link-2 w-dropdown-link" href="#">Resource Link 3</a>
                  </nav>
                </div>
              </li>
              <li>
                <div class="nav-dropdown-2 w-dropdown" data-delay="0" data-hover="false">
                  <div class="nav-dropdown-toggle w-dropdown-toggle">
                    <div class="nav-dropdown-icon-2 w-icon-dropdown-toggle" />
                    <div class="text-block">
                      Community
                    </div>
                  </div>
                  <nav class="nav-dropdown-list shadow-three mobile-shadow-hide w-dropdown-list">
                    <a class="nav-dropdown-link-2 w-dropdown-link" href="#">Resource Link 1</a>
                    <a class="nav-dropdown-link-2 w-dropdown-link" href="#">Resource Link 2</a>
                    <a class="nav-dropdown-link-2 w-dropdown-link" href="#">Resource Link 3</a>
                  </nav>
                </div>
              </li>
              <li class="mobile-margin-top">
                <div class="nav-button-wrapper">
                  <NuxtLink class="small primary w-button btn" to="/restake">
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
</template>

<script lang="ts" setup>

</script>

<style>

</style>
