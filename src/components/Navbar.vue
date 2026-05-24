<script setup lang="ts">
  import { computed, ref, watch } from "vue";
  import { getMainLists } from "@/lists";
  import { useListStore } from "@/stores/listStore";
  import { useThemeStore, Theme } from "@/stores/themeStore";
  import { breakpointService } from "@/services/breakpointService";
  import { scrollService } from "@/services/scrollService";
  import { search } from "@/services/searchService";
  import { useRoute } from "vue-router";
  import MobileSettings from "./MobileSettings.vue";
  import SearchResults from "./SearchResults.vue";
  import CustomInputText from "./CustomInputText.vue";

  const listStore = useListStore();
  const themeStore = useThemeStore();
  const route = useRoute();
  const searchText = ref<string>("");
  const settingsOpen = ref(false);
  const searchMobileOpen = ref(false);
  const searchComponent = ref();

  const mainLists = ref(getMainLists());
  const mainListOptions = ref(mainLists.value.map(list => ({ label: list.name, value: list.value })));
  const selectedMainListValue = computed({
    get: () => listStore.getMainList.value,
    set: (newValue: string) => listStore.setMainList(newValue)
  });

  const isList = computed(() => {
    return route.name === "list" || route.name === "home";
  });

  watch(searchText, (query) => {
    search(query ?? "");
  });

  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    if (isDarkMode) {
      themeStore.setTheme(Theme.LIGHT);
    }
    else {
      themeStore.setTheme(Theme.DARK);
    }
  };

  const openSettings = () => {
    settingsOpen.value = true;
  };

  const openSearchComponent = (event: MouseEvent) => {
    searchComponent.value.show(event);
  };

  const closeSearchComponent = () => {
    searchComponent.value.hide();
    resetSearch();
  };

  const openMobileSearch = () => {
    searchMobileOpen.value = true;
  };

  const closeMobileSearch = () => {
    searchMobileOpen.value = false;
    resetSearch();
  };

  const resetSearch = () => {
    searchText.value = "";
  };

  const mobileSearchPT = {
    content: {
      style: {
        height: "100%"
      }
    }
  };
</script>

<template>
  <Toolbar
    class="navbar"
    :class="[
      breakpointService.isMobile() ?
        ['mobile-navbar', 'mobile-color', isList ? 'sticky' : '']
        : 'desktop-navbar',
      { 'hide-sticky': scrollService.hideSticky() }
    ]"
  >
    <template #start>
      <div class="container">
        <RouterLink :to="{ name: 'home' }" v-ripple class="kobudai">
          <div :class="{ 'move-up': breakpointService.isMobile() === false }">KOBUDAI<span class="jp">・コブダイ</span></div>
        </RouterLink>
      </div>
      <Select v-if="!breakpointService.isMobile()" v-model="selectedMainListValue" :options="mainListOptions" option-label="label" option-value="value" class="main-list-selector" />
    </template>
    <template #end>
      <Button v-if="!breakpointService.isMobile()" :icon="themeStore.theme.value === Theme.DARK ? 'pi pi-moon' : 'pi pi-sun'" class="mr-10" @click="toggleTheme()" />
      <Button v-else icon="pi pi-bars" variant="text" severity="secondary" class="mr-10" @click="openSettings()" />
      <IconField v-if="!breakpointService.isMobile()">
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <CustomInputText v-model="searchText" placeholder="Search" style="width: 250px" @click="openSearchComponent($event)" @reset="resetSearch()" />
      </IconField>
      <Button v-else icon="pi pi-search" severity="secondary" style="width: 60px" @click="openMobileSearch()" />
    </template>
  </Toolbar>
  <Popover ref="searchComponent" :pt="{ root: { class: 'search-popover' }, content: { class: 'search-popover-content'} }">
    <SearchResults :search-text="searchText" @goto-grammar="closeSearchComponent()" />
  </Popover>
  <!-- Mobile -->
  <MobileSettings v-model:open="settingsOpen" v-model:selected-list-value="selectedMainListValue" :list-options="mainListOptions" @change-theme="toggleTheme()" />
  <Dialog v-model:visible="searchMobileOpen" modal :closable="false" dismissable-mask :showHeader="false" :pt="mobileSearchPT" style="width: 90vw; height: 70vh">
    <div class="dialog-mobile">
      <div class="search-section-mobile">
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <CustomInputText v-model="searchText" autofocus placeholder="Search" @reset="resetSearch()" />
        </IconField>
      </div>
      <SearchResults :search-text="searchText" :mobile="true" @goto-grammar="closeMobileSearch()" />
    </div>
  </Dialog>
</template>

<style scoped>
.navbar {
  background: var(--surface-glass-strong);
  border: 1px solid var(--surface-border-strong);
  box-shadow: var(--surface-shadow-soft);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
}

.desktop-navbar {
  margin: 30px;
}

.mobile-navbar {
  border-width: 0 0 1px 0;
  border-radius: 0;

  &.sticky {
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  :global(:root[data-mobile-glass-effects="false"] &) {
    background: var(--mobile-simple-surface-bg);
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
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

  .move-up {
    position: relative;
    bottom: 2px;
  }

  .jp {
    font-weight: 340;
  }
}

.main-list-selector {
  margin-left: 180px;
  width: 116px;
}

.dialog-mobile {
  display: flex;
  flex-direction: column;
  height: 100%;

  .search-section-mobile {
    flex-shrink: 0;
    padding: 20px;
    background: var(--mobile-simple-surface-muted-bg);
    border-radius: var(--p-dialog-border-radius) var(--p-dialog-border-radius) 0 0;
    border-bottom: 1px solid var(--mobile-search-section-border-color);
  }
}

@media (hover: hover) and (pointer: fine) {
  .kobudai:hover {
    background-color: var(--navbar-hover-color);
  }
}
</style>

<style>
.search-popover {
  width: 500px;
  height: 600px;
  border-radius: 20px;

  &::before {
    visibility: hidden;
  }
  &::after {
    visibility: hidden;
  }
}

.search-popover-content {
  overflow: auto;
  height: 598px;
}
</style>
