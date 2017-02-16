<template>
<div id="filesystem">
  <span>请读取文件</span>
  <input :value="file" @change="updatefile" type='file' accept=".md" id='selefile' />
  <span>{{file}}</span>

</div>
</template>

<script>
export default {
  data() {
    return {
      file: ''
    }
  },
  methods: {
    updatefile: function(e) {
      this.file = e.target.value;
      filePath = e.target.value;
    }
  }
}
</script>
