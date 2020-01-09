<template>
    <div class="card">
        <b-card no-body class="overflow-hidden" >
            <b-row no-gutters>
                <b-col md="4">
                    <b-card-img :src="item.owner.avatar_url" height="100%" width="100%" ></b-card-img>
                </b-col>
                <b-col md="8">
                    <b-card-body :title="item.name">
                        {{ item.description }}
                    </b-card-body>
                    <b-card-body>
                        <a :href="item.html_url"
                           class="card-link">{{ item.html_url }}</a>
                    </b-card-body>
                </b-col>

            </b-row>
        </b-card>
    </div>
</template>

<script lang="ts" src="./Card.ts"></script>
<style src="./Card.css" scoped></style>
