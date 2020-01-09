<template>
    <div class="card-collection">
        <div class="card-collection-contents"
             v-for="(repo, index) in repoItems"
             :key="`card-collection-contents-${index}`">
            <div class="card-row">
                <Card :item="repo" @onClickRepository="onClickCollectionContent"></Card>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CardCollection.ts"></script>

<style scoped>
    .card-collection {
        padding: 8px;
        margin: 0 20%;
    }
    .card-collection-contents {
        margin: 0 auto;
    }
    .card-row {
        margin: 10px 0;
    }
    @media (max-width: 600px) {
        .card-collection {
            height: auto;
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
