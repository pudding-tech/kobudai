<script setup lang="ts">
  const model = defineModel<string>({ required: true });
  const props = defineProps<{
    options: { label: string; value: string }[];
  }>();
  const emits = defineEmits(["selected"]);

  const clicked = (value: string) => {
    model.value = value;
    emits("selected", value);
  };
</script>

<template>
  <div class="select-button">
    <template v-for="option in props.options" :key="option.value">
      <div
        v-ripple
        @click="clicked(option.value)"
        class="selection-element"
        :class="{ 'selected': model === option.value }"
      >
        {{ option.label }}
      </div>
    </template>
  </div>
</template>

<style scoped>
.select-button {
  display: flex;
  align-items: center;
}

.selection-element {
  padding: 10px 20px;
  border: 1px solid var(--custom-select-button-border-color);
  cursor: pointer;
  color: var(--custom-select-button-text);
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: var(--custom-select-button-text-hover);
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
