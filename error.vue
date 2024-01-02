<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <div class="card w-1/4 h-fit mx-auto text-center p-7">
      <p class="mt-7 text-7xl font bold">{{ error.statusCode }}</p>
      <p class="mt-7 text-3xl">something wrong (◞‸◟；)</p>
      <p class="my-4 mt-10 text-xl">{{ error.message }}</p>
      <button class="btn text-xl" @click="handleClearError">
        Go home page
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
