<template>
    <div class="card-collection">
        <div class="card-collection-contents"
             v-for="(repo, index) in repoItems"
             :key="`card-collection-contents-${index}`">
           <Card :item="repo" @onClickRepository="onClickCollectionContent"></Card>
        </div>
    </div>
</template>

<script lang="ts" src="./CardCollection.ts"></script>

<style scoped>
    .card-collection {
        display: grid;
        height: auto;
        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)) ;
        grid-gap: 10px;
        padding: 9px;
        margin-left: 20%;
        margin-right: 20%;
    }
    .card-collection-contents {
        margin: 0 0;
        justify-content: center;
    }
    @media (max-width: 600px) {
        .card-collection {
            display: grid;
            height: auto;
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 9px;
            margin-left: 0;
            margin-right: 0;
            justify-content: center;
        }
        .card-collection-contents {
            width: 80%;
            justify-self: center;
        }
    }
</style>
