<template>
    <div class="card">
        <h3 class="card-title" v-on:click="onClickRepository"> {{ item.name }} </h3>
    </div>
</template>

<script lang="ts" src="./Card.ts"></script>
<style src="./Card.css" scoped></style>
