<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { id } = useRoute().params;

const { data: product } = await useFetch(
  "https://fakestoreapi.com/products/" + id
);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "We do not sell this product yet...",
    fatal: true,
  });
}
</script>

<style scoped>
p {
  margin: 20px 0;
}
</style>
