<template>
<div>
  <div>
    <input type="text" v-model="inputValue">
    <button @click="handleSubmit">提交</button>
  </div>
  <ul>
    <todo-item v-for="(item,index) of list" :content="item" :index="index" @deleteIndex="deleteItem"></todo-item>
  </ul>
</div>
</template>

<script>
// 在此引入局部组件
import TodoItem from './components/TodoItem'
export default {
  components:{
    'todo-item': TodoItem,  // 在这个组建中注册子组件
  },
  data : function () {
    return {
      inputValue : "",
      list : [],
    }
  },
  methods: {
    handleSubmit : function () {
      this.list.push(this.inputValue);
      this.inputValue = "";
    },
    deleteItem : function (index) {
      this.list.splice(index,1)
    }
  }
}
</script>

<style>

</style>
