<script setup lang="ts">
  import { ref } from "vue";
  import { breakpointService } from "@/services/breakpointService";

  const props = withDefaults(defineProps<{
    showPolite?: boolean
  }>(), {
    showPolite: false
  });

  const emit = defineEmits(["politenessChange"]);

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

  const headerMobile = ref({
    header: {
      padding: "1.125rem",
      first: {
        topBorderRadius: "0",
      },
      last: {
        bottomBorderRadius: "0",
      }
    },
    colorScheme: {
      light: {
        header: {
          background: "{zinc.200}", //#f8f9fa
          hoverBackground: "{zinc.200}",
          activeBackground: "{zinc.200}",
          activeHoverBackground: "{zinc.200}",
        },
        content: {
          background: "#f7f7f7"
        }
      },
      dark: {
        header: {
          background: "#212121",
          hoverBackground: "#212121",
          activeBackground: "#212121",
          activeHoverBackground: "#212121",
        },
        content: {
          background: "var(--p-accordion-content-background)"
        }
      }
    }
  });
</script>

<template>
  <div v-if="!breakpointService.isMobile()" class="container">
    <div class="bg">
      <div class="corner">
        <RouterLink :to="{ name: 'home' }">
          <Button icon="pi pi-arrow-left" text rounded severity="secondary" size="large" v-ripple />
        </RouterLink>
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
                    <SelectButton v-if="props.showPolite" v-model="isPolite" :options="options" option-label="label" option-value="value" :allow-empty="false" @update:model-value="politenessChange()" />
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
  <div v-else class="mobile">
    <div class="header-mobile">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="subtitle">
        <slot name="subtitle"></slot>
      </div>
    </div>
    <Accordion :value="['0']" multiple :dt="headerMobile">
      <AccordionPanel value="0">
        <AccordionHeader>Structure</AccordionHeader>
        <AccordionContent>
          <div class="structure" :class="{ 'big-text': isZoom }">
            <div class="buttons">
              <Button :icon="isZoom ? 'pi pi-arrow-down-left-and-arrow-up-right-to-center' : 'pi pi-arrow-up-right-and-arrow-down-left-from-center'" severity="secondary" @click="zoomChange()" />
              <SelectButton v-if="props.showPolite" v-model="isPolite" :options="options" option-label="label" option-value="value" :allow-empty="false" @update:model-value="politenessChange()" />
            </div>
            <slot name="structure"></slot>
          </div>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>Related</AccordionHeader>
        <AccordionContent>
          <div class="related">
            <slot name="related"></slot>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
    <div class="explanation mobile-explanation">
      <slot name="explanation"></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  font-size: 18px;
}

.bg {
  background-color: var(--grammar-structure-bg);
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
  background-color: var(--grammar-structure-header);
  height: 10rem;

  .title {
    font-size: 3rem;
    word-break: keep-all;
  }
  .subtitle {
    font-size: 1.3rem;
    opacity: 0.7;
    word-break: keep-all;
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
  border: 1px solid var(--grammar-card-border);

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
  font-size: 1em;
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
  word-break: keep-all;
}

.mobile {
  .header-mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--grammar-structure-header-mobile);
    padding-top: 20px;
    padding-bottom: 20px;
    /* font-family: "Yu Gothic", "Hiragino Sans", Meiryo, sans-serif; */

    .title {
      font-size: 2.4rem;
      line-height: 1.3;
      max-width: 80vw;
      text-align: center;
      word-break: keep-all;
    }
    .subtitle {
      font-size: 1.3rem;
      opacity: 0.7;
      max-width: 90vw;
      text-align: center;
      margin-top: 10px;
      word-break: keep-all;
    }
  }

  .structure {
    padding: 1.125rem 10px 0;
    line-height: 1.4;
    transition: font-size 0.1s;

    .buttons {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    &.big-text {
      font-size: 1.7rem;
    }
  }

  .related {
    padding: 10px 10px 0;
    line-height: 1.6;
  }

  .mobile-explanation {
    background-color: var(--grammar-structure-bg-mobile);
    padding: 20px 16px;
  }
}
</style>
