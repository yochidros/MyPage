<template>
    <div>
        <b-card>
            <h3><b>{{ item.name }}</b></h3>
            <p class="card-text" style="color: #919191;">
                Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
            </p>
            <a :href="item.html_url"
               class="card-link">{{ item.html_url }}</a>
        </b-card>
    </div>
</template>

<script lang="ts" src="./Card.ts"></script>
<style src="./Card.css" scoped></style>
