<template>
<div>
    <h2 style="margin-bottom: 1px;">{{ title }}</h2>
    <p>{{ year }}, {{ genre }}</p>
    <slot></slot>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'MovieList',
  props: ['title', 'year', 'genre'],
  components: {
    HelloWorld
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-top: 4px;
}
</style>
