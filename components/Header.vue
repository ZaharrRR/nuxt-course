<template>
  <div class="flex justify-between">
    <div class="flex items-center justify-center gap-3">
      <i class="material-icons">menu</i>
      <i class="material-icons bg-[#4BCA7E] text-white p-2 rounded-lg"
        >{{ currentCategory?.iconName }}
      </i>
      <div class="font-bold text-lg">{{ title }}</div>
    </div>

    <div class="flex items-center justify-center gap-3">
      <img
        :src="currentUser.imgUrl"
        alt="avatar img"
        class="h-[30px] w-[30px] rounded-full"
      />
      <div class="font-bold text-lg">{{ currentUser.userName }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Category {
  title: string;
  iconName: string;
}

const { title } = defineProps(["title"]);

const categories: Category[] = [
  { title: "Finance", iconName: "wallet" },
  { title: "To-do", iconName: "event_available" },
];

const currentCategory = categories.find((category) => category.title === title);

const currentUser = {
  imgUrl: "https://avatars.githubusercontent.com/u/5399488?s=400&v=4",
  userName: "Andrew Vlasov",
};
</script>

<style scoped></style>
