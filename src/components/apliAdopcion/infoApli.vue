<template>
    <div class = "popup-infoApli">
        <div class ="popup-inner">
            <h1>Bro momento</h1>
            <button>
                bro momento
            </button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    .popup-infoApli{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.2);
        display:flex;
        align-items:center;
        justify-content: center;

    }
    .popup-infoApli .popup-inner{
        background-color: red;
        padding: 32px;
    }
</style>