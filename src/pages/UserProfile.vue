<script setup>
    import { useRoute} from "vue-router";

    const {params} = useRoute();
    const title = "User profile"
    const username = params.username;
</script>

<template>
    <h1>{{ title }}</h1>
    <h2>{{ $route.params.username }}</h2>
</template>
