<template>
  <div class="clickMeButton">
    <button>{{ message }}</button>
  </div>
</template>

<script>
export default {
  name: 'clickMeButton',
  props: ['message']
}
</script>
