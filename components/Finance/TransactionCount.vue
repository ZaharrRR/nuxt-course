<template>
  <div class="flex gap-3">
    <div
      v-for="transaction in transactions"
      class="w-1/4 border-2 rounded-md p-3"
    >
      <div class="text-gray-500 text-sm font-bold mb-2">
        {{ transaction.type }} Transactions
      </div>

      <div class="flex">
        <div class="font-semibold text-2xl">{{ transaction.count }}</div>

        <div
          v-if="transaction.isGrow === true"
          class="flex text-xs items-end mb-1 ms-2 text-green-500"
        >
          <i class="material-icons text-xs">north</i>
          {{ transaction.growRate }}
        </div>

        <div
          v-if="transaction.isGrow === false"
          class="flex text-xs items-end mb-1 ms-2 text-red-500"
        >
          <i class="material-icons text-xs">south</i>
          {{ transaction.growRate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Transaction {
  type: string;
  count: number;
  isGrow: boolean;
  growRate: string;
}

const transactions: Transaction[] = [
  {
    type: "Approved",
    count: 1748,
    isGrow: true,
    growRate: "3,54%",
  },
  {
    type: "Declined",
    count: 224,
    isGrow: true,
    growRate: "1,23%",
  },
  {
    type: "Refunded",
    count: 87,
    isGrow: false,
    growRate: "2,51%",
  },
  {
    type: "New",
    count: 344,
    isGrow: false,
    growRate: "1,47%",
  },
];
</script>

<style scoped></style>
