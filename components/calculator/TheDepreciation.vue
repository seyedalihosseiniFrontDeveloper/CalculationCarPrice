<template>
 <section>
  <div class="pt-1 h-[30rem] flex flex-col items-center justify-center">
    <div class="flex items-center gap-2">
      <label for="interDepreciation">km</label>
       <input id="interDepreciation" v-model="depreciation" class="w-[5rem] px-2 h-9 border border-gray-300 rounded text-center" />
      </div> 
  <div class="relative w-full">
    <input
    v-model="depreciation"
    type="range"
    class="
      form-range
      appearance-none
      w-full
      h-6
      p-0
      bg-transparent
      mt-8
      focus:outline-none focus:ring-0 focus:shadow-none
    "
    :min="min"
    :max="max"
  />
   <span class="absolute top-[60px] left-[2px]">{{min}}km</span>
   <span class="absolute  top-[60px] right-[2px]">{{max}}km</span>
  </div>
  
</div>
<button class="bg-green-500 px-4 py-2 rounded text-white text-lg float-left">ادامه</button>
 </section>
</template>

<script>
export default {
name: 'TheDepreciation',
props:{
  min:{
    type: Number,
    require: true,
    default: 0
  },
   max:{
    type: Number,
    require: true,
    default: 1000000
  }
},
data(){
  return{
    depreciation: 11580
  }
},
watch:{
  depreciation(value){
    this.$emit('update',{
      name: value,
      isDepreciation: true, 
      id:Math.random()*10000
    },4)
  }
}
}
</script>

<style>

</style>