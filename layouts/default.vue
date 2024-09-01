<template>
  <v-app>
    <v-app-bar app class="theme-app-bar">
      <v-toolbar-title>My Nuxt App</v-toolbar-title>
      <v-spacer></v-spacer>
      <ThemeToggle />
    </v-app-bar>
    
    <!-- This slot is where the page content (like index.vue) will be rendered -->
    <v-main class="theme-main">
      <slot />
    </v-main>
    
  </v-app>
</template>

<script setup>
import ThemeToggle from '~/components/ThemeToggle.vue'
</script>

<style scoped>
.theme-app-bar {
  background-color: var(--v-primary-base);
  color: var(--v-text-base);
  box-shadow: 0 2px 4px var(--v-shadow-color);
}

.v-toolbar-title {
  color: var(--v-text-base);
}

.v-main {
  background-color: var(--v-background-base);
  color: var(--v-text-base);
}
</style>
