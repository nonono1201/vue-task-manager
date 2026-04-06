<template>
    <v-container v-if="commonStore.errorMessage.length > 0">
      <v-card color="red">
        <v-card-item>
          <div v-for="message in commonStore.errorMessage">
            {{ message }}
          </div>
        </v-card-item>
      </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/commonStore';

const commonStore = useCommonStore();
</script>