<script lang="ts">
import "/src/css/card.css"

export default {
  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="card">
    <a :href="data.source_url" target="_blank">
      <img :src="data.url" alt="Neko Image" />
    </a>
    <div>
      <p>Artist: <a :href="data.artist_href" target="_blank">{{ data.artist_name }}</a></p>
    </div>
  </div>
</template>

<style scoped>

</style>