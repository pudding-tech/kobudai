<script setup lang="ts">
  import { useThemeStore } from "@/stores/themeStore";

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
</script>

<template>
  <Drawer v-model:visible="open" position="top" :showCloseIcon="false" :blockScroll="true" class="options-drawer">
    <div class="container">
      <div class="close-section" v-ripple>
        <Button label="Close" variant="text" severity="secondary" size="small" class="close-button" @click="closeDrawer()" />
      </div>
      <div class="list-item">
        <label>Change resource:</label>
        <Select v-model="selectedMainListValue" :options="props.listOptions" option-label="label" option-value="value" class="list-select" />
      </div>
      <div class="list-item">
        <label>Change theme:</label>
        <Button :icon="themeStore.darkMode.value ? 'pi pi-moon' : 'pi pi-sun'" variant="outlined" severity="secondary" class="theme-select" @click="changeTheme()" />
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
  padding: 20px 0;
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
