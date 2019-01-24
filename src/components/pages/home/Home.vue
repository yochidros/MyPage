<template>
  <div class="home">
    <div v-if="repos" class="repos-count">GitHub Repositries : <b>{{ repos.length }}</b></div>
    <CardCollection v-if="repos" :repoItems="repos" @onClickCollectionContent="onClickRepository"></CardCollection>

  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style src="./Home.css"></style>

