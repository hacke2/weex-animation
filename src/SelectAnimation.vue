<template>
    <div class="wrap">
        <text class="select-title">select animations:</text>
        <select @change="value => $emit('change', value)">
            <option v-for="animation in animations" :value="animation">{{animation}}</option>
        </select>
    </div>
</template>
<style scoped>
    .select-title {
        margin-bottom: 40px;
    }
</style>

<script>
  export default{
    name: 'select-animation',
    props: {
      animations: Array
    }
  }
</script>
