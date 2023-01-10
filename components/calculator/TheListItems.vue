<template>
  <section>
    <p>{{ list.title }}:</p>
    <div  class="grid grid-cols-4 h-[35rem]" :class="step === 0 ?'flex-col':'flex-row'">
      <ol v-for="(brand,index) in list.items" :key="index" class="pr-5">
        <li
          class="mt-4"
         :class="brand.step === 0 ?
          'text-green-400 list-disc'
          : 'text-gray-800 my-2 border border-transparent rounded w-fit p-2 hover:border-green-200 cursor-pointer'"
          @click.self="brand.step === 0? ()=>{return false} : addToListFilters(brand)">{{brand.name}}
          <ol>
            <li
                v-for="car in brand.listCar" :key="car.id"
                class="text-gray-800 my-2 border border-transparent rounded w-fit p-2
                hover:border-green-200 cursor-pointer" @click="addToListFilters(car)">
              {{ car.name }}
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ListItems',
  props:{
    list:{
      type: [Object,Array],
      required: true,
      default:()=>{
        return {
          title: '',
          items: []
        }
      }
    },
    step:{
      type: Number,
      required: true,
      default: 0
    },
  },
  methods:{
    addToListFilters(dataCar){
      const nextIndexStep= this.step+1
      this.$emit('updateFilters',dataCar,nextIndexStep)
    }
  }
}
</script>
