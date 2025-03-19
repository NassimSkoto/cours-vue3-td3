<script setup>

    import { computed, ref } from "vue";
    import { useRouter } from "vue-router";
    const router = useRouter();
    const username = ref("");
    const email = ref("");
    const password = ref("");

    const isFormValid = computed(()=> {
        return username.value.trim() && email.value.trim() && password.value.trim();
    });

    function register(){
        console.log(username + "    " + email + "      " + password)
        //setTimeout(() => {
        //    router.push("/"); 
        //}, 1000);
        fetch("https://posts-crud-api.vercel.app/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username:username.value,
                email:email.value,
                password:password.value,
            })
        }).then((response) => response.json())
            .then((data) => {
                localStorage.setItem("user",JSON.stringify(data));
                router.push("/");
            })
    }
</script>

<template>
    <form action="/register" @submit.prevent="register">
  <ul>
    <li>
      <label for="name">Nom d'utilisateur&nbsp;:</label>
      <input type="text" id="username" name="user_name" v-model="username" />
    </li>
    <li>
      <label for="mail">E-mail&nbsp;:</label>
      <input type="email" id="email" name="user_email" v-model="email"/>
    </li>
    <li>
      <label for="mdp">Mot de passe&nbsp;:</label>
      <input type="text" id="password" name="user_password" v-model="password"/>
    </li>
    <button :disabled ="!isFormValid" type="submit">Envoyer le message</button>
  </ul>
</form>
  </template>