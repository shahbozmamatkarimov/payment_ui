<template>
  <div
    :style="`height: ${l_height}`"
    class="is_loading table_loading h-[60px]"
  ></div>
</template>

<script lang="ts" setup>
defineProps({
  l_height: String,
});
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
});
</script>

<style lang="scss" scoped></style>
