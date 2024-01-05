<template>
  <div>
    <div class="text-2xl font-medium">Revenue</div>
    <div class="flex justify-between items-center">
      <div class="flex">
        <div class="py-3">
          <div class="flex gap-1 items-center">
            <div class="bg-[#4151E8] w-[12px] h-[12px] rounded-sm"></div>
            <div class="text-gray-500 text-sm font-medium">Gross Valume</div>
          </div>

          <div class="flex gap-2">
            <div class="font-semibold text-2xl">$48,580</div>

            <div class="flex gap-1 items-end text-xs pb-1">
              <i class="material-icons text-xs text-green-500">north</i>
              <div class="text-green-500">3,12%</div>
              <div class="text-gray-500 text-xs font-medium">last year</div>
            </div>
          </div>
        </div>

        <div class="flex border-r-2 self-center h-[20px] mx-6"></div>

        <div class="py-3">
          <div class="flex gap-1 items-center">
            <div class="bg-[#bebebe] w-[12px] h-[12px] rounded-sm"></div>
            <div class="text-gray-500 text-sm font-medium">Net Volume</div>
          </div>

          <div class="flex gap-2">
            <div class="font-semibold text-2xl">$29,540</div>

            <div class="flex gap-1 items-end text-xs pb-1">
              <i class="material-icons text-xs text-green-500">north</i>
              <div class="text-green-500">1,54%</div>
              <div class="text-gray-500 text-xs font-medium">last year</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-3">
        <select
          class="w-fit bg-[#edeef0] px-4 py-2 pr-8 rounded-md focus:outline-none text-sm font-medium"
        >
          <option disabled value="">Chose date</option>
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <select
          class="w-fit bg-[#edeef0] px-4 py-2 pr-8 rounded-md focus:outline-none text-sm font-medium"
        >
          <option disabled value="">Chose status</option>
          <option
            v-for="(option, index) in options2"
            :key="index"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const options = [
  { label: "This year", value: "option1" },
  { label: "Last year", value: "option2" },
  { label: "3 years", value: "option3" },
];

const options2 = [
  { label: "Declined", value: "option1" },
  { label: "Approved", value: "option2" },
  { label: "Refunded", value: "option3" },
  { label: "New", value: "option4" },
];
</script>

<style scoped></style>
