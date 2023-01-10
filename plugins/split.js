import Vue from "vue";

Vue.filter('split',  function(number) {
    const USDollar = new Intl.NumberFormat('ja-JP')
    return USDollar.format(number)
  },)