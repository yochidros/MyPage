<template>
  <div class="home">
    <Timeline class="twitter-timeline" :id="'ych_dp'" :source-type="'profile'" :options="{ tweetLimit: '3' }"></Timeline>
    <div v-if="!repos">
      <Spinner :isLoading="isLoading"></Spinner>
    </div>
    <div v-if="repos">
      <div v-if="repos" class="repos-count">GitHub Repositries : <b>{{ repos.length }}</b></div>
      <CardCollection v-if="repos" :repoItems="repos" @onClickCollectionContent="onClickRepository"></CardCollection>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style src="./Home.css"></style>

