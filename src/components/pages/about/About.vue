<template>
  <div class="about">
      <div v-if="!user">
          <Spinner :isLoading="isLoading"></Spinner>
      </div>
    <div v-if="user"
         class="github-info"
    >
      <img alt="My Icon"
           src="../../../assets/myIcon.png"
           v-bind:src="user.avatar_url">
      <div>
        <h1 class="name">{{ user.name }} </h1>
        <p class="bio"> {{ user.bio }}</p>
      </div>
    </div>

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
        <b-badge variant="primary">Updated</b-badge>
        {{ user.updated_at  | formatDate }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./About.ts"></script>
<style src="./About.css" scoped></style>
