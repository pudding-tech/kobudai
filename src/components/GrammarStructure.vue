<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { lastRoute } from "@/router/router";

  const props = withDefaults(defineProps<{
    showPolite?: boolean,
    polite?: boolean
  }>(), {
    showPolite: false,
    polite: false
  });

  const emit = defineEmits(["politenessChange"]);
  const router = useRouter();

  const isPolite = ref(false);
  const isZoom = ref(false);

  const options = [
    { label: "Standard", value: false },
    { label: "Polite", value: true },
  ];

  const zoomChange = () => {
    isZoom.value = !isZoom.value;
  };

  const politenessChange = () => {
    emit("politenessChange", isPolite.value);
  };

  const goHome = () => {
    if (lastRoute?.name === "home") {
      router.back();
    }
    else {
      router.push({ name: "home" });
    }
  };
</script>

<template>
  <div class="container">
    <div class="bg">
      <div class="corner">
        <Button icon="pi pi-arrow-left" text rounded severity="secondary" size="large" @click="goHome" />
      </div>
      <div class="header">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="subtitle">
          <slot name="subtitle"></slot>
        </div>
      </div>
      <div class="content">
        <div class="top-row">
          <Card :class="['card', 'top-left', { 'expanded': isZoom }]">
            <template #title>
              <div class="info-title">
                <div class="structure">
                  <div>Structure</div>
                  <div>
                    <Button :icon="isZoom ? 'pi pi-arrow-down-left-and-arrow-up-right-to-center' : 'pi pi-arrow-up-right-and-arrow-down-left-from-center'" severity="secondary" :class="{ 'zoom-button': showPolite }" @click="zoomChange()" />
                    <SelectButton v-if="props.showPolite" v-model="isPolite" :options="options" option-label="label" option-value="value" :allowEmpty="false" @update:model-value="politenessChange()" />
                  </div>
                </div>
              </div>
            </template>
            <template #content>
              <div class="structure-content" :class="{ 'big-text': isZoom }">
                <slot name="structure"></slot>
              </div>
            </template>
          </Card>
          <Card class="card top-right" :class="{ 'hidden': isZoom }">
            <template #title>
              <div class="info-title mg-bottom">Related</div>
            </template>
            <template #content>
              <div class="related-content">
                <slot name="related"></slot>
              </div>
            </template>
          </Card>
        </div>
        <Card class="card bottom">
          <template #content>
            <div class="explanation">
              <slot name="explanation"></slot>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.bg {
  background-color: var(--grammar-card-bg);
  min-width: 1200px;
  max-width: 1200px;
  border-radius: var(--p-content-border-radius);
  overflow: hidden;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #393939;
  height: 10rem;

  .title {
    font-size: 3rem;
  }
  .subtitle {
    font-size: 1.3rem;
    opacity: 0.7;
  }
}

.content .top-row {
  display: flex;

  .card {
    width: 100%;
  }
}

.card {
  margin: 1rem 1rem 0 1rem;
  border: 1px solid rgba(73, 73, 73, 0.74);

  &.top-left {
    margin-right: 0.5rem;

    &.expanded {
      margin-right: 1rem;
    }
  }

  &.top-right {
    margin-left: 0.5rem;
    transition: width 0.2s, margin 0.2s, visibility 0.2s, opacity 0.2s;
    overflow: hidden;
    white-space: nowrap;

    &.hidden {
      width: 0 !important;
      visibility: hidden;
      opacity: 0;
      margin-left: 0 !important;
      margin-right: 0 !important;
      border: 0;
    }
  }

  &.bottom {
    margin-bottom: 1rem;
  }
}

.info-title {
  font-size: 1.2rem;
  opacity: 0.8;
  
  &.mg-bottom {
    margin-bottom: 5px;
  }

  .structure {
    display: flex;
    justify-content: space-between;
  }
}

.structure-content {
  font-size: 1rem;
  line-height: 1.6;
  transition: font-size 0.2s;

  &.big-text {
    font-size: 2rem;
  }
}

.related-content {
  white-space: nowrap;
  line-height: 1.6;
}

.corner {
  position: absolute;
  margin-left: 2px;
  margin-top: 2px;
}

.zoom-button {
  margin-right: 10px;
}

.explanation {
  line-height: 1.5;
}
</style>
