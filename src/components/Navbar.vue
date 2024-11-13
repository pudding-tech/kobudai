<script setup lang="ts">
  import { ref, watch } from "vue";
  import { useRouter } from "vue-router";
  import { useListStore } from "@/stores/listStore";
  import { useThemeStore } from "@/stores/themeStore";
  import { breakpointService } from "@/utils/breakpointService";
  import { search } from "@/utils/searchService";
  import { genkiList } from "@/grammar/lists/genkiList";
  import { jlptList } from "@/grammar/lists/jlptList";
  import MobileSettings from "./MobileSettings.vue";
  import SearchResults from "./SearchResults.vue";
  import type { MainList } from "@/types/types";

  const router = useRouter();
  const listStore = useListStore();
  const themeStore = useThemeStore();
  const searchText = ref<string | null>(null);
  const settingsOpen = ref(false);
  const searchMobileOpen = ref(false);

  const mainLists = ref<MainList[]>([genkiList, jlptList]);
  const mainListOptions = ref(mainLists.value.map(list => ({ label: list.name, value: list.value })));
  const selectedMainListValue = ref<string>(listStore.getMainList().value);

  watch(selectedMainListValue, (newValue) => {
    const selected = mainLists.value.find(list => list.value === newValue);
    if (selected) {
      listStore.setMainList(newValue);
    }
  });

  watch(searchText, (query) => {
    search(query ?? "");
  });

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    if (isDarkMode) {
      themeStore.setDarkMode(false);
    }
    else {
      themeStore.setDarkMode(true);
    }
  };

  const gotoHome = () => {
    router.push({ name: "home" });
  };

  const openSettings = () => {
    settingsOpen.value = true;
  };

  const openMobileSearch = () => {
    searchMobileOpen.value = true;
  };

  const closeMobileSearch = () => {
    searchMobileOpen.value = false;
    searchText.value = "";
  };

  const handleReset = () => {
    searchText.value = "";
  };
</script>

<template>
  <Toolbar :class="breakpointService.isMobile() ? 'mobile-navbar mobile-color' : 'navbar'">
    <template #start>
      <div class="container">
        <div v-ripple class="kobudai" @click="gotoHome()">
          KOBUDAI・コブダイ
        </div>
      </div>
      <Select v-if="!breakpointService.isMobile()" v-model="selectedMainListValue" :options="mainListOptions" option-label="label" option-value="value" class="main-list-selector" />
    </template>
    <template #end>
      <Button v-if="!breakpointService.isMobile()" :icon="themeStore.darkMode.value ? 'pi pi-moon' : 'pi pi-sun'" class="mr-10" @click="toggleDarkMode()" />
      <Button v-else icon="pi pi-bars" variant="text" severity="secondary" class="mr-10" @click="openSettings()" />
      <!-- <ToggleSwitch v-model="darkModeStore.darkMode.value" class="theme-selector" @update:model-value="toggleDarkMode()">
        <template #handle="{ checked }">
          <i :class="['!text-xs pi', { 'pi-moon': checked, 'pi-sun': !checked }]" />
        </template>
      </ToggleSwitch> -->
      <IconField v-if="!breakpointService.isMobile()">
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText v-model="searchText" placeholder="Search" disabled />
      </IconField>
      <Button v-else icon="pi pi-search" severity="secondary" style="width: 60px" @click="openMobileSearch()" />
    </template>
  </Toolbar>
  <!-- Mobile -->
  <MobileSettings v-model:open="settingsOpen" v-model:selected-list-value="selectedMainListValue" :list-options="mainListOptions" @change-theme="toggleDarkMode()" />
  <Dialog v-model:visible="searchMobileOpen" modal :closable="false" dismissable-mask :showHeader="false" style="width: 90vw; height: 70vh" :pt="{ content: { style: { height: '100%' } } }">
    <div class="dialog">
      <div class="search-section">
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText v-model="searchText" autofocus placeholder="Search" class="search-bar" />
          <div class="clear-icon" @click="handleReset()" :class="{ 'hidden': !searchText }">
            <i class="pi pi-times" />
          </div>
        </IconField>
      </div>
      <SearchResults @close-dialog="closeMobileSearch()" />
    </div>
  </Dialog>
</template>

<style scoped>
.navbar {
  margin: 30px;
}

.mobile-navbar {
  border-width: 0 0 1px 0;
  border-radius: 0;
}

.logo {
  position: relative;
  width: 32px;
  margin-right: 10px;
  bottom: 2px;
}

.mr-10 {
  margin-right: 10px;
}

.container {
  position: absolute;
}

.kobudai {
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 174px;
  border-radius: var(--p-content-border-radius);
  transition: background-color 0.3s;
  left: -6px;
}

.main-list-selector {
  margin-left: 180px;
  width: 116px;
}

@media (hover: hover) and (pointer: fine) {
  .kobudai:hover {
    background-color: var(--navbar-hover-color);
  }
}

.dialog {
  display: flex;
  flex-direction: column;
  height: 100%;

  .search-section {
    flex-shrink: 0;
    padding: 20px;
    border-bottom: 1px solid #2d2d2d;

    .search-bar {
      width: 100%;
    }

    .clear-icon {
      position: absolute;
      top: 11px;
      right: 10px;
      color: #5d5d5d;

      &.hidden {
        display: none;
      }
    }
  }
}
</style>
