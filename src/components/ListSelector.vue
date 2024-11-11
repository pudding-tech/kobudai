<script setup lang="ts">
  import { useListStore } from "@/stores/listStore";

  const model = defineModel<string>({ required: true });
  const props = defineProps<{
    options: { label: string; value: string }[] | undefined;
  }>();

  const listStore = useListStore();

  const changeSublist = (value: string) => {
    model.value = value;
    listStore.setSublist(value);
  };
</script>

<template>
  <div class="list-selector">
    <template v-for="option in props.options" :key="option.value">
      <div
        v-ripple
        @click="changeSublist(option.value)"
        class="selection-element"
        :class="{ 'selected': model === option.value }"
      >
        {{ option.label }}
      </div>
    </template>
  </div>
</template>

<style scoped>
.list-selector {
  display: flex;
  align-items: center;
}

.selection-element {
  padding: 10px 20px;
  border: 1px solid #52525b;
  cursor: pointer;
  color: var(--list-selector-text);
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  &.selected {
    background-color: #e9e9e9;
    background-color: #88d8bb;
    color: black;
  }

  &:first-child {
    border-top-left-radius: var(--p-content-border-radius);
    border-bottom-left-radius: var(--p-content-border-radius);
  }

  &:last-child {
    border-top-right-radius: var(--p-content-border-radius);
    border-bottom-right-radius: var(--p-content-border-radius);
  }

  &:not(:first-child) {
    border-left: none;
  }
}
</style>
