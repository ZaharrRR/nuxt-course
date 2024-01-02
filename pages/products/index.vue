<template>
  <div>
    <h1>Our products</h1>

    <div class="grid grid-cols-4 gap-5">
      <div v-for="item in products">
        <ProductCard :product="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});
</script>

<style scoped>
p {
  margin: 20px 0;
}
</style>
