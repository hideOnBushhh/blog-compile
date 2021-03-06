// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Editor from './Editor'

/* eslint-disable no-new */
new Vue({
  el: '#editor',
  template: '<Editor/>',
  components: { Editor }
})
