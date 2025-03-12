<script setup>
import { TrashIcon, HeartIcon } from "@heroicons/vue/24/outline";
defineProps(["post"]);
const emit = defineEmits(["delete", "like"]);
</script>

<template>
  <article :id="post.id" class="card">
    <header>
      <img :src="post.author.avatarUrl" alt="Avatar" width="36" height="36" class="avatar" />
      <RouterLink :to="{ name :'user', params:{username: post.author.username} }"> {{ post.author.username }}</RouterLink>
    </header>
    <p>{{ post.content }}</p>

    <footer>
      <button class="btn-icon trash-icon" @click="emit('delete', post.id)">
        <TrashIcon />
      </button>

      <button
        :class="['btn-icon', 'heart-icon', { liked: post.liked }]"
        @click="emit('like', post.id)"
      >
        <HeartIcon />
      </button>
    </footer>
  </article>
</template>