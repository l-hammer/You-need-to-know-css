
# Holy grail layout

General requirments fot this layout is that three-column with two sides are equally wide and the adaptive middle part.

<vuep template="#holy-grail-layout_tlp"></vuep>

<script v-pre type="text/x-template" id="holy-grail-layout_tlp">
<style>
  main {
    width: 100%;
    padding: 39px 29px;
    font-size: 12px;
  }
  section {
    padding: 0 129px;
    box-shadow: 0 0 0 1px #eee;
  }
  section::after {
    content: '';
    display: block;
    clear: both;
  }
  section > div {
    height: 229px;
    line-height: 1.5em;
    padding: 29px 12px;
    text-align: center;
    float: left;
    color: white;
    background: #b4a078;
  }
  section .left, section .right {
    position: relative;
    width: 119px;
  }
  section .left {
    left: -129px;
    margin-left: -100%;
  }
  section .center {
    width: 100%;
    text-align: justify;
    hyphens: auto;
  }
  section .right {
    left: 129px;
    margin-left: -119px;
  }
  /* input range */
  input[type="range"] {
    width: 100%;
    cursor: ew-resize;
  }
</style>
<template>
  <main class="main">
    <input ref="range" type="range" value="100">
    <section :style="{ width }">
      <div class="center">Nam aliquam sem et tortor. Neque interdum consectetur libero id.</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </section>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        width: "100%"
      }
    },
    mounted() {
      this.$refs.range.oninput = ({ target: { value } }) => {
        this.width = `${60 + value * .4}%`;
      }
    }
  }
</script>
</script>
