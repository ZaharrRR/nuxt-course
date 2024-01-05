<template>
  <div class="flex h-screen w-screen p-3">
    <div
      :class="{
        'w-full': !showRightSide,
        'w-4/5 m-4 mx-6 mr-8': showRightSide,
      }"
    >
      <div>
        <Header title="Finance"></Header>
      </div>
      <slot />
    </div>

    <div v-if="showRightSide" class="bg-gray-200 w-1/5 rounded-xl"></div>
  </div>
</template>

<script setup>
const showRightSide = ref(true);
</script>

<style scoped></style>
