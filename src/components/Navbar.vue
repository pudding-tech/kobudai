<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useDarkModeStore } from "@/stores/darkModeStore";

  const router = useRouter();
  const darkModeStore = useDarkModeStore();
  const searchText = ref<string | null>(null);

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    if (isDarkMode) {
      darkModeStore.setDarkMode(false);
    }
    else {
      darkModeStore.setDarkMode(true);
    }
  };

  const gotoHome = () => {
    router.push({ name: "home" });
  };
</script>

<template>
  <div class="toolbar">
    <Toolbar>
      <template #start>
        <!-- <img src="../assets/logo.png" class="logo" /> -->
        <div class="kobudai" @click="gotoHome()">
          KOBUDAI・コブダイ
        </div>
      </template>
      <template #end>
        <Button :icon="darkModeStore.darkMode.value ? 'pi pi-moon' : 'pi pi-sun'" class="theme-selector" @click="toggleDarkMode()" />
        <!-- <ToggleSwitch v-model="darkModeStore.darkMode.value" class="theme-selector" @update:model-value="toggleDarkMode()">
          <template #handle="{ checked }">
            <i :class="['!text-xs pi', { 'pi-moon': checked, 'pi-sun': !checked }]" />
          </template>
        </ToggleSwitch> -->
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText v-model="searchText" placeholder="Search" disabled />
        </IconField>
      </template>
    </Toolbar>
  </div>
</template>

<style scoped>
.logo {
  position: relative;
  width: 32px;
  margin-right: 10px;
  bottom: 2px;
}

.theme-selector {
  margin-right: 10px;
}

.kobudai {
  font-weight: 500;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -5px;
    width: calc(100% + 10px);
		height: calc(100% + 20px);
    border-radius: var(--p-content-border-radius);
    transition: background-color 0.3s;
  }

  &:hover::before {
    background-color: var(--navbar-hover-color);
  }
}
</style>
