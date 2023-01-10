<template>
  <section class="side-bar pl-4">
    <p class="text-lg">براساس
      <span class="text-pink-400 text-xl">{{ countContract| split(countContract) }}</span>
      معامله صورت گرفته</p>
    <card-filter
    v-for="filter in listFilter"
    :key="filter.id"
    :filter="filter" @click="removeFilter(filter)" />
    <p>کارکرد</p>
    <card-filter :filter="filterDepreciation" @click="removeFilter(filter)" />
  </section>
</template>

<script>
import CardFilter from '../base/CardFilter.vue'
export default {
  name: 'TheSideBar',
  components:{
    CardFilter
  },

  props: {
    countContract: {
      type: Number,
      require: true,
      default: 0
    },
    listFilter: {
      type: Array,
      default: () => {
        return []
      },
      require: true
    },
    step:{
      type: Number,
      require: true,
      default: 0
    },
    filterDepreciation: {
      type: Object,
      default: () => {
        return {}
      },
      require: true
    },
  },
  computed:{
    mainListFilters(){
      if(this.listFilter){
        if(this.listFilter.length>0){
          return this.listFilter.slice(0,this.listFilter.length-2)
        }
        else{
          return []
        }
      }else{
        return []
      }
    },
    depreciation(){
      if(this.listFilter){
        if(this.listFilter.length>0){
          return this.listFilter.slice(this.listFilter.length-2,this.listFilter.length-1)
        }
        else{
          return null
        }
      }else{
        return null
      }
    }
  },
  methods: {
    removeFilter(filter) {
      const previousIndexStep= this.step-1
      this.$emit('removeFilter', filter, previousIndexStep)
    }
  }
}
</script>

<style>

</style>
