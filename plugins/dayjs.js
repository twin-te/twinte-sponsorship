import 'dayjs/locale/ja'
import dayjs from 'dayjs'
import Vue from 'vue'

dayjs.locale('ja')

Vue.filter('formatDate', function (value) {
  return dayjs.unix(value).format('YYYY/MM/DD ')
})

Vue.prototype.$dayjs = dayjs
