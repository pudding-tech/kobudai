<script setup lang="ts">
  import { breakpointService } from "@/services/breakpointService";
  import type { GrammarPoint } from "@/types/types";

  const props = withDefaults(defineProps<{
    grammarPoint: GrammarPoint;
    mobile?: boolean;
  }>(), {
    mobile: false
  });
</script>

<template>
  <RouterLink
    :to="{ name: 'grammarLoader', params: { slug: props.grammarPoint.slug } }"
    v-ripple
    class="list-item"
    :class="{ 'mobile': props.mobile }"
  >
    <div class="inner-left">
      <div v-if="!props.mobile" class="icon">
        <i class="pi pi-circle-fill" style="font-size: 0.5rem; opacity: 50%;" />
      </div>
      <div>
        <div class="title" v-html="props.grammarPoint.title"></div>
        <div class="subtitle">{{ props.grammarPoint.subtitle }}</div>
      </div>
    </div>
    <div class="level" :class="{ 'mobile': breakpointService.isMobile() }">
      {{ props.grammarPoint.level }}
    </div>
  </RouterLink>
</template>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  border-radius: var(--p-content-border-radius);
  background-color: var(--list-item-bg);
  transition: background-color 0.08s ease-in;
  line-height: 1.34;

  &:not(.mobile) {
    min-width: 60rem;
    cursor: pointer;
  }

  &:hover {
    background-color: var(--list-item-bg-hover);
  }
}

.inner-left {
  display: flex;
  align-items: center;
}

.icon {
  margin-right: 20px;
}

.title {
  font-size: 1.2rem;
  font-weight: 340;
  word-break: keep-all;
}

.subtitle {
  font-size: 1rem;
  opacity: 0.8;
  word-break: keep-all;
}

.level {
  position: relative;
  color: var(--list-item-level-color);
  font-size: 17px;
  border: 1px solid var(--list-item-level-border-color);
  padding: 4px 8px;
  border-radius: 4px;
  margin-left: 2px;

  &.mobile {
    font-size: 13px;
    right: -4px;
  }
}
</style>
