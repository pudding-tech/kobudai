<script setup lang="ts">
  import { useAttrs } from "vue";

  const model = defineModel<string>({ required: true });
  const props = withDefaults(defineProps<{
    autofocus?: boolean,
    placeholder?: string
  }>(), {
    autofocus: false
  });

  const emit = defineEmits(["reset"]);
  const $attrs = useAttrs();
</script>

<template>
  <InputText
    v-model="model"
    :autofocus="props.autofocus"
    :placeholder="props.placeholder"
    class="input-text"
    v-bind="$attrs"
  />
  <div class="clear-icon" @click="emit('reset')" :class="{ 'hidden': !model }">
    <i class="pi pi-times" />
  </div>
</template>

<style scoped>
.input-text {
  width: 100%;
}

.clear-icon {
  position: absolute;
  padding: 4px 4px 0;
  top: 7px;
  right: 8px;
  cursor: pointer;
  color: #5d5d5d;
  transition: color 100ms;

  &.hidden {
    display: none;
  }

  &:hover {
    color: #8a8a8a;
  }
}
</style>
