<template>
    <v-btn @click="toggleTheme" class="theme-toggle-btn" icon>
        <v-icon>{{ isDarkMode ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
</template>

<script setup>
const colorMode = useColorMode();

const isDarkMode = computed(() => colorMode.preference === 'dark');

const toggleTheme = () => {
    colorMode.preference = isDarkMode.value ? 'light' : 'dark';
};
</script>

<style scoped>
.theme-toggle-btn {
  background-color: var(--v-secondary-base);
  color: var(--v-text-base);
  border-radius: 50%; /* Makes the button circular */
  width: 48px; /* Set a fixed width */
  height: 48px; /* Set a fixed height */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px var(--v-shadow-color); /* Adds a soft shadow for depth */
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: var(--v-hover-background-color);
    box-shadow: 0 6px 12px var(--v-shadow-color); /* Slightly more pronounced shadow on hover */
  }
}

.v-icon {
  color: var(--v-accent-base);
  font-size: 24px; /* Adjust the size of the icon */
}
</style>
