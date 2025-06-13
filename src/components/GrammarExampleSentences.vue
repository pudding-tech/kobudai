<script setup lang="ts">
  import { useSlots } from "vue";
  import { breakpointService } from "@/services/breakpointService";

  const slots = useSlots();
</script>

<template>
  <div class="grammar-example-sentences">
    <div v-if="!breakpointService.isMobile()" class="title">Example</div>
    <div class="container">
      <slot />
      <div v-if="slots.note" class="example-note">
        <div class="note-inner">
          <slot name="note"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grammar-example-sentences {
  padding: 10px;
  margin: 20px 0;
  border-radius: var(--p-content-border-radius);
  background-color: var(--grammar-example-bg);
  word-break: normal;
}

.title {
  position: absolute;
  font-size: 0.9em;
  opacity: 0.7;
}

.container {
  padding: 10px;
}

.example-note {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  opacity: 0.8;
  color: var(--grammar-exaple-note-color);

  .note-inner {
    max-width: 700px;
    text-align: center;
  }
}
</style>
