<template>
  <div>
    {{ t("test") }}
    {{ locale }}
    <button @click="switchLocale(to)">switch language</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const to = computed(() => (locale.value === "en" ? "de" : "en"));

const switchLocale = (to) => {
  locale.value = to;
};
</script>

<i18n locale="en">
{
  "test": "hello world"
}
</i18n>

<i18n locale="de">
{
  "test": "Hallo Welt!"
}
</i18n>
