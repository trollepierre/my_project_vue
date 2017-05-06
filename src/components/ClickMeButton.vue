<template>
  <div class="clickMeButton">
    <button v-on:click="onButtonClick">{{ message }}</button>
  </div>
</template>

<script>
export default {
  name: 'clickMeButton',
  props: ['message'],
  methods: {
    onButtonClick: function () {
      this.$emit('buttonHasBeenClicked')
    }
  }
}
</script>
