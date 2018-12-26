<template>
    <div class="card-collection">
        <div class="card-collection-contents"
             v-for="(item, index) in cardItems"
             :key="`card-collection-contents-${index}`">
           <Card :item="item"></Card>
        </div>
    </div>
</template>

<script lang="ts" src="./CardCollection.ts"></script>

<style scoped>
    .card-collection {
        display: grid;
        height: auto;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
        padding: 9px;
    }
    .card-collection-contents {
        margin: 0 0;
    }
</style>
