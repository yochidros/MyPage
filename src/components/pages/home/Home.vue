<template>
  <div class="home">
    <div v-if="user"
         class="github-info"
    >
      <img alt="My Icon"
           src="../../../assets/myIcon.png"
           v-bind:src="user.avatar_url">
      <div>
        <h1 class="name">{{ user.name }} <b-badge variant="primary">New</b-badge></h1>
        <p class="bio"> {{ user.bio }}</p>
      </div>
    </div>

    <div v-if="repos" class="repos-count"> Repositries : <b>{{ repos.length }}</b></div>
    <CardCollection v-if="repos" :repoItems="repos" @onClickCollectionContent="onClickRepository"></CardCollection>

    <div v-if="user"
         class="user-info">
      <div>
        GitHub: <a v-bind:href="user.html_url">{{ user.html_url }}</a>
      </div>
      <div v-if="user.blog">
        Twitter: <a v-bind:href="user.blog">{{ user.blog }}</a>
      </div>
      <div v-if="user.email">
        Contact: <a v-bind:href="'mailto:' + 'user.email'"> user.email </a>
      </div>
      <div v-if="user.updated_at">
        Updated: {{ user.updated_at }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style src="./Home.css"></style>

