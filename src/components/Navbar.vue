<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useThemeStore } from "@/stores/themeStore";
  import { breakpointService } from "@/utils/breakpointService";

  const router = useRouter();
  const themeStore = useThemeStore();
  const searchText = ref<string | null>(null);

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
</script>

<template>
  <Toolbar :class="breakpointService.isMobile() ? 'mobile-navbar mobile-color' : 'navbar'">
    <template #start>
      <!-- <img src="../assets/logo.png" class="logo" /> -->
      <div class="container">
        <div v-ripple class="kobudai" @click="gotoHome()">
          KOBUDAI・コブダイ
        </div>
      </div>
    </template>
    <template #end>
      <Button v-if="!breakpointService.isMobile()" :icon="themeStore.darkMode.value ? 'pi pi-moon' : 'pi pi-sun'" class="theme-selector" @click="toggleDarkMode()" />
      <Button v-else :icon="themeStore.darkMode.value ? 'pi pi-moon' : 'pi pi-sun'" variant="text" severity="secondary" class="theme-selector" @click="toggleDarkMode()" />
      <!-- <Button v-else icon="pi pi-cog" variant="text" severity="secondary" class="theme-selector" @click="toggleDarkMode()" /> -->
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
      <Button v-else icon="pi pi-search" severity="secondary" style="width: 60px"/>
    </template>
  </Toolbar>
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

.theme-selector {
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

  &:hover {
    background-color: var(--navbar-hover-color);
  }
}
</style>
