<script setup lang="ts">
  import { useThemeStore, Theme } from "@/stores/themeStore";

  const open = defineModel<boolean>("open", { required: true });
  const selectedMainListValue = defineModel<string>("selectedListValue", { required: true });

  const emit = defineEmits(["changeTheme"]);
  const props = defineProps<{
    listOptions: { label: string; value: string }[];
  }>();

  const themeStore = useThemeStore();

  const closeDrawer = () => {
    open.value = false;
  };

  const changeTheme = () => {
    emit("changeTheme");
  };

  const changeGlassEffectsSetting = (value: boolean) => {
    if (value) {
      themeStore.setGlassEffects(true);
    }
    else {
      themeStore.setGlassEffects(false);
    }
  };

  const buttonStyle = {
    colorScheme: {
      light: {
        outlinedSecondaryBorderColor: "#b6babf"
      },
      dark: {
        outlinedSecondaryBorderColor: "var(--p-surface-700)"
      }
    }
  };
</script>

<template>
  <Drawer v-model:visible="open" position="top" :showCloseIcon="false" :blockScroll="true" class="options-drawer">
    <div class="container">
      <div class="close-section" v-ripple>
        <Button label="Close" variant="text" severity="secondary" size="small" class="close-button" @click="closeDrawer()" />
      </div>
      <div class="list-item top">
        <label for="resource-select">Change resource:</label>
        <Select
          inputId="resource-select"
          v-model="selectedMainListValue"
          :options="props.listOptions"
          option-label="label"
          option-value="value"
          class="list-select"
        />
      </div>
      <div class="list-item">
        <label>Change theme:</label>
        <Button :icon="themeStore.theme.value === Theme.DARK ? 'pi pi-moon' : 'pi pi-sun'" variant="outlined" severity="secondary" :dt="buttonStyle" class="theme-select" @click="changeTheme()" />
      </div>
      <div class="list-item bottom">
        <div>
          <label for="glass-effects">Glass effects:</label>
          <div class="glass-effects-note">May reduce performance on some devices</div>
        </div>
        <ToggleSwitch
          inputId="glass-effects"
          :model-value="themeStore.glassEffects.value"
          @update:model-value="changeGlassEffectsSetting($event)"
        />
      </div>
    </div>
  </Drawer>
</template>

<style scoped>
.container {
  padding-top: 21.25px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  &.top {
    padding-top: 20px;
  }

  &.bottom {
    padding-bottom: 20px;
  }
}

.list-select {
  width: 116px;
}

.theme-select {
  width: 60px;
}

.close-section {
  display: flex;
  background-color: var(--accordion-color);
  border-radius: var(--p-content-border-radius);

  .close-button {
    width: 100%;
    justify-content: center;
  }
}

.glass-effects-note {
  margin-top: 6px;
  font-size: 0.68rem;
  opacity: 0.6;
}
</style>

<style>
.options-drawer.p-drawer {
  height: fit-content !important;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.options-drawer .p-drawer-header {
  display: none;
}
</style>
