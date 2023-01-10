<template>
  <div class="calculator ">
    <div class="title mt-4">
      <span class="font-bold text-xl">ماشین حساب</span>
      |
      <span class="text-md">محاسبه قیمت خودرو کارکرده</span>
    </div>
    <div class="content grid grid-cols-12 justify-center h-[80vh] mt-8">
      <div class="col-span-2 border-l border-gray-600 h-full">
        <the-side-bar
          :step="activeStep"
          :count-contract="875054"
          :list-filter="listFilters"
          :filter-depreciation="filterDepreciation"
          @removeFilter="removeFilter"/>
      </div>
      <div class="col-span-10 px-4">
        <the-list-items
          v-if="!isShowDepreciation"
          :step="activeStep"
          :list="ListItemStep"
          @updateFilters="updateFilters"/>
          <the-depreciation
            v-else
            :min="0"
            :max="20000"
            @update="handleFilterDepreciation" />
      </div>
      <div class="col-span-2"></div>
      <section class="description col-span-10 mt-6">
        <ol class="list-disc">
          <li>
            قیمت خودرو ها بر اساس پایش،تجمیع و تحلیل قیمت های اعلام شده از سوی نمایندگی ها،قیمت
            معاملات
            انجام شده در بیش
            از 150 نمایشگاه فعال سطح کشور و مراکز خرید و فروش پایتخت و نیز بررسی های میدانی در بازار خودرو به صورت
            روزانه
            استخراج می شود.
          </li>
        </ol>
      </section>
    </div>
  </div>
</template>

<script>
import TheSideBar from "./TheSideBar.vue";
import TheListItems from "./TheListItems.vue";
import TheDepreciation from "./TheDepreciation.vue";
import listOfCarBrand from "~/moduls/list-brands";
import listModels from "~/moduls/list-models";
import listTrim from "~/moduls/list-trim";
import listYears from "~/moduls/list-years";

export default {
  name: 'TheCalculator',
  components:{
    TheSideBar,
    TheListItems,
    TheDepreciation
  },
  data() {
    return {
      steps:['ChooseBrand','ChooseModel','ChooseTrim','ChooseYear','ChooseDepreciation'],
      activeStep: 0,
      listFilters: [],
      filterDepreciation: {},
      ListItemStep: [],
      isShowDepreciation: false,
    }
  },
  watch:{
    activeStep: function (value) {
      let nameLastItemFilter
      if (this.activeStep !== 0) {
         nameLastItemFilter = this.listFilters[this.listFilters.length - 1].name
      }
      switch (value) {
        case 0:
          this.ListItemStep = listOfCarBrand
          this.isShowDepreciation = false
          break
        case 1:
          this.ListItemStep = listModels(nameLastItemFilter)
          this.isShowDepreciation = false
          break
        case 2:
          this.ListItemStep = listTrim(nameLastItemFilter)
          this.isShowDepreciation = false
          break
        case 3:
          this.ListItemStep = listYears(nameLastItemFilter)
          this.isShowDepreciation = false
          break
        case 4:
          this.isShowDepreciation = true
          break
      }
    }
  },
  mounted() {
    this.ListItemStep = listOfCarBrand
  },
  methods: {
    removeFilter(item,index) {
      this.listFilters = this.listFilters.filter((filter) => {
        return filter.id !== item.id
      })
      this.changeStep(index)
    },
    updateFilters(detail,index) {
      this.listFilters.push(detail)
      this.changeStep(index)
    },
    changeStep(stepIndex){
      this.activeStep = stepIndex
    },
    handleFilterDepreciation(value){
     this.filterDepreciation = value
    }
  }
}
</script>

