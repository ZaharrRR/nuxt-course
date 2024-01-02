export default defineEventHandler(async () => {
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_BTyn5yHEmZ4a9eFMcBKbjbgYGklA1ya8Er0wZFxd"
  );
  return data;
});
