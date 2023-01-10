<template>
  <div
      v-if="filter && filter.name"
      class="card flex items-center justify-between h-[35px] my-3 p-2 bg-gray-300 cursor-pointer"
      >
      <p>
        <span>{{ filter.isDepreciation ? (filter.name| split(filter.name)) : filter.name}}</span>
        <span v-if="filter.isDepreciation">کیلومتر</span>
      </p>
      <span>
       <svg
         xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x"
         viewBox="0 0 16 16">
         <path
           d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0
           1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5
           0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
       </svg>
     </span>
    </div>
</template>

<script>
export default {
    props:['filter'],
    methods:{
    split(number) {
        const USDollar = new Intl.NumberFormat('ja-JP')
    return USDollar.format(number)
    }
  }
}
</script>
