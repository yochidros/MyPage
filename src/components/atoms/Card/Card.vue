<template>
    <div class="card">
        <b-card>
            <h3><b>{{ item.name }}</b></h3>
            <p class="card-text" style="color: #919191;">
                {{ item.description }}
            </p>
            <a :href="item.html_url"
               class="card-link">{{ item.html_url }}</a>
        </b-card>
    </div>
</template>

<script lang="ts" src="./Card.ts"></script>
<style src="./Card.css" scoped></style>
