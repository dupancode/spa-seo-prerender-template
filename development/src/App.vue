<template>
  <nav class="flex items-center gap-3 text-emerald-600 p-3 w-full bg-black">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/project/vue">Project 1</router-link>
  </nav>

  <router-view />
</template>
<style>
nav {
  padding: 3px;
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

router.isReady().then(() => {
  updateMeta(router.currentRoute.value);

  document.dispatchEvent(new Event("render-event"));
});

// fallback runtime saat navigasi SPA
router.afterEach((to) => updateMeta(to));

function updateMeta(route) {
  if (route.meta.title) document.title = route.meta.title;

  let desc = document.querySelector("meta[name='description']");
  if (!desc) {
    desc = document.createElement("meta");
    desc.setAttribute("name", "description");
    document.head.appendChild(desc);
  }
  if (route.meta.description)
    desc.setAttribute("content", route.meta.description);
}
</script>
