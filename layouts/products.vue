<template>
  <div>
    <header class="shadow-t-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="logo text-xl font-bold"
          >Nuxt Dojo Merch</NuxtLink
        >
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="border-t-2">
      <div class="container mx-auto p-4 flex justify-between">
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: aquamarine;
}

.logo {
  color: black;
}
</style>
