<template>
    <div class="spinner">
        <pulse-loader class="load-spinner" :loading="isLoading" :color="spinnerColor" :width="spinnerWidth" :height="spinnerHeight"></pulse-loader>
    </div>
</template>

<script lang="ts" src="./Spinner.ts"></script>
<style scoped>
    .spinner {
        width: 100%;
        height: 800px;
        margin-top: 0;
    }
    .load-spinner {
        height: 100%;
        margin-top: 20%;
    }
</style>
