<template>
  <li @click="delete_index">{{content}}</li>
</template>

<script>
export default {
  props : ['content','index'],
  methods : {
    delete_index : function () {
      this.$emit('deleteIndex',this.index)
    }
  }
}
</script>

<style scoped>

</style>
