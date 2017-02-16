<template>
<div id="editor">
  <textarea :value="input" @input="update"></textarea>
  <div id='show' v-html="compiledMarkdown"></div>
  <div>{{compiledMarkdown}}
    <div>
      <Filesystem/>
    </div>
</template>

<script>
import Filesystem from './components/Filesystem'
export default {
  data() {
    return {
      input: '### 在此输入Markdown代码',
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input)
    }
  },
  methods: {
    update: function(e) {
      this.input = e.target.value;
    }
  },
  components: {
    Filesystem
  }
}
</script>
