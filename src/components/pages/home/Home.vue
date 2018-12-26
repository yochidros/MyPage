<template>
  <div class="home">
    <img alt="My Icon" src="../../../assets/myIcon.png">
    <CardCollection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardCollection from '@/components/molecules/CardCollection/CardCollection'; // @ is an alias to /src

@Component({
  components: {
    CardCollection,
  },
})
export default class Home extends Vue {}
</script>
