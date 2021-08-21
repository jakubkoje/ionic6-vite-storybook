<template>
  <ion-router-outlet />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {IonRouterOutlet} from "@ionic/vue";

export default defineComponent({
  name: 'App',
  components: {
    IonRouterOutlet
  }
})
</script>
