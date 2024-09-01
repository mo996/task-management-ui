<!-- index.vue -->
<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="8" class="text-center">
        <h1>Welcome to My Nuxt App</h1>
        <p>This is the homepage of your Nuxt application.</p>
        <p>Use the theme toggle button in the top right corner to switch between light and dark mode.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { VContainer, VRow, VCol } from 'vuetify/components'
</script>
