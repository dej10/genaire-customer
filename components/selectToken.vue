<template>
    <div class="w-layout-vflex select-token">
        <div class="w-layout-hflex select-token-modal-title">
            <div class="select-token-modal-title">Assets</div>
            <button @click="handleClose"><img src="/images/close.svg" loading="lazy" alt=""></button>
        </div>
        <div class="assets-container">
            <div id="w-node-_90ce93ec-a889-151d-4d06-4d80ca1e3a5c-edc3d6f8" class="asset-name">
                <div class="select-token-img-wrapper"><img src="/images/eth_2eth.png" loading="lazy" alt=""
                        class="select-token-img"></div>
                <div class="w-layout-vflex row-assets-name">
                    <div class="asset-title">Assets</div>
                    <div class="port-assets-name-sub">ETH</div>
                </div>
            </div>
            <div id="w-node-_90ce93ec-a889-151d-4d06-4d80ca1e3a5c-edc3d6f8" class="asset-name">
                <div class="select-token-img-wrapper"><img src="/images/eth_2eth.png" loading="lazy" alt=""
                        class="select-token-img"></div>
                <div class="w-layout-vflex row-assets-name">
                    <div class="asset-title">Assets</div>
                    <div class="port-assets-name-sub">ETH</div>
                </div>
            </div>
            <div id="w-node-_817bbebb-de27-9893-b798-0a3cf616a3dd-edc3d6f8" class="asset-name">
                <div class="select-token-img-wrapper"><img src="/images/eth_2eth.png" loading="lazy" alt=""
                        class="select-token-img"></div>
                <div class="w-layout-vflex row-assets-name">
                    <div class="asset-title">Assets</div>
                    <div class="port-assets-name-sub">ETH</div>
                </div>
            </div>
            <div id="w-node-_69aa4db4-76bf-dcf1-4eb9-4c450c3e81cd-edc3d6f8" class="asset-name">
                <div class="select-token-img-wrapper"><img src="/images/eth_2eth.png" loading="lazy" alt=""
                        class="select-token-img"></div>
                <div class="w-layout-vflex row-assets-name">
                    <div class="asset-title">Assets</div>
                    <div class="port-assets-name-sub">ETH</div>
                </div>
            </div>
            <div id="w-node-eb842d09-53e3-3a0c-a096-1f587fef7800-edc3d6f8" class="asset-name">
                <div class="select-token-img-wrapper"><img src="/images/eth_2eth.png" loading="lazy" alt=""
                        class="select-token-img"></div>
                <div class="w-layout-vflex row-assets-name">
                    <div class="asset-title">Assets</div>
                    <div class="port-assets-name-sub">ETH</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['close']);

const handleClose = () => {
    emit('close')
}

const handleOutsideClick = (event: MouseEvent) => {
    event.stopPropagation();
    if (!event.target?.classList.contains('select-token')) {
        handleClose()
}
}

onMounted(() => {
    document.addEventListener('click', handleOutsideClick, true)
})

onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick, true)
})
</script>

<style lang="css" scoped>
button {
    background-color: transparent;
}

.select-token {
    animation: slideOut 0.3s ease-in-out;
}

.assets-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-height: 240px;
    overflow: auto;
}

.asset-name {
    padding: 4px;
    border-radius: 8px;
    cursor: pointer;
}

.asset-name:hover {
    background-color: rgba(255,255,255,0.07);
}

@keyframes slideOut {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>
