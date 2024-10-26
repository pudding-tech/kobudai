<script setup lang="ts">
  import { useSlots } from "vue";

  const slots = useSlots();
</script>

<template>
  <div class="grammar-example">
    <div class="title">Example</div>
    <div class="container">
      <div class="example">
        <div>
          <slot name="example"></slot>
        </div>
      </div>
      <div v-if="slots.translation" class="translation">
        <div>
          <slot name="translation"></slot>
        </div>
      </div>
      <div v-if="slots.note" class="note">
        <div>
          <slot name="note"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grammar-example {
  padding: 10px;
  margin: 20px 0;
  border-radius: var(--p-content-border-radius);
  background-color: #2d2d2d;
}

.title {
  position: absolute;
  font-size: 0.9rem;
  opacity: 0.7;
}

.container {
  padding: 10px;
}

.example {
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
}

.translation {
  display: flex;
  justify-content: center;
  margin-top: 8px;
  opacity: 0.8;
}

.note {
  display: flex;
  justify-content: center;
  margin-top: 8px;
  opacity: 0.8;
  color: var(--p-primary-250);
}
</style>
