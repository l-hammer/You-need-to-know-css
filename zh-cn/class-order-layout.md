
# 类订单布局

?> 背景知识：:point_right: [水平垂直居中](/centering-known)

此布局一般的需求为左侧高度不固定，右侧自适应高度并且居中。

<div align="center" style="border: 1px solid #f5f5f5"><img src="static/interesting-layout-1.jpeg" width="100%" align="center"/></div>

> 伪元素 `:after` + `vertical-align:middle` 方案

<vuep template="#class-order-layout"></vuep>

<script v-pre type="text/x-template" id="class-order-layout">
<style>
  main {
    width: 100%;
    padding: 39px 29px;
    font-size: 12px;
  }
  section {
    width: 100%;
    box-shadow: 0 0 0 1px #eee;
    overflow: hidden;
  }
  section > span{
    width: 20%;
    display: inline-block;
    vertical-align: middle;
    margin-left: -3px;
    padding-left: 12px;
  }
  section::after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .left {
    width: 45%;
    margin-left: 0;
    padding: 12px;
  }
  .center {
    width: 35%;
    border: 1px solid #eee;
    padding-top: 999px;       /* h */
    padding-bottom: 999px;    /* a */
    margin-top: -999px;       /* c */
    margin-bottom: -999px;    /* k */
    position: relative;
  }
  .left .item {
    width: 100%; height: 85px;
    text-align: center;
    line-height: 85px;
    background: rgba(180,160,120,.1);
    position: relative;
  }
  .left .item:not(:first-child) {
    margin-top: 24px;
  }
  .left .item:not(:first-child)::before {
    content: '';
    position: absolute;
    top: -12px; right: -12px; left: -12px;
    border-top: 1px solid #eee;
  }
</style>
<template>
  <main class="main">
    <section>
      <span class="left">
        <div
          v-for="ele in elements"
          @click="handleClick"
          class="item">
          {{symbol}}
        </div>
      </span>
      <span class="center">Vertical centering<br>Vertical centering Vertical centering</span>
      <span class="right">Vertical centering</span>
    </section>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: Array(2).fill(1),
        symbol: '➕'
      }
    },
    methods: {
      handleClick () {
        this.elements.length == 2 ? (_ => {
          this.elements.push(1);
          this.symbol = '➖';
        })() : (_ => {
          this.elements.pop();
          this.symbol = '➕';
        })()
      }
    }
  }
</script>
</script>

### 浏览器支持

<iframe
  width="100%"
  height="453px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-sel3&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

> 伪元素 `display: flex` 方案

<vuep template="#layout-flexbox"></vuep>

<script v-pre type="text/x-template" id="layout-flexbox">
<style>
  main {
    width: 100%;
    padding: 39px 29px;
    font-size: 12px;
  }
  section {
    width: 100%;
    box-shadow: 0 0 0 1px #eeeeee;
    display: flex;
    overflow: hidden;
  }
  section > span {
    width: 20%;
    padding: 12px;
    align-self: center;
  }
  .left {
    width: 45%;
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
  }
  .center {
    width: 35%;
    padding-top: 999px;       /* h */
    padding-bottom: 999px;    /* a */
    margin-top: -999px;       /* c */
    margin-bottom: -999px;    /* k */
    border: 1px solid #eee;
  }
  .left .item {
    text-align: center;
    line-height: 85px;
    background: rgba(180,160,120,.1);
    position: relative;
    margin-bottom: 12px;
  }
</style>
<template>
  <main class="main">
    <section>
      <span class="left">
        <div
          v-for="ele in elements"
          @click="handleClick"
          class="item">
          {{symbol}}
        </div>
      </span>
      <span class="center">vertical centering<br>vertical centering</span>
      <span class="right">vertical centering</span>
    </section>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: Array(2).fill(1),
        symbol: '➕'
      }
    },
    methods: {
      handleClick () {
        this.elements.length == 2 ? (_ => {
          this.elements.push(1);
          this.symbol = '➖';
        })() : (_ => {
          this.elements.pop();
          this.symbol = '➕';
        })()
      }
    }
  }
</script>
</script>

### 浏览器支持

<iframe
  width="100%"
  height="418px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=flexbox&amp;periods=future_1,current,past_1,past_2&amp;accessible-colours=false">
</iframe>

> 伪元素 `display: grid` 方案 :thumbsup:

<vuep template="#layout-grid"></vuep>

<script v-pre type="text/x-template" id="layout-grid">
<style>
  main {
    width: 100%;
    padding: 39px 29px;
    font-size: 12px;
  }
  section {
    display: grid;
    align-items: center;
    grid-template-columns: 45% 35% calc(20% - 2px);
    grid-column-gap: 1px;
    background: #eeeeee;
    box-shadow: 0 0 0 1px #eeeeee;
  }
  section > span {
    height: 100%;
    padding: 12px;
    display: grid;
    align-items: center;
    background: white;
  }
  .left {
    display: grid;
    grid-row-gap: 12px;
  }
  .left .item {
    text-align: center;
    line-height: 85px;
    background: rgba(180,160,120,.1);
  }
</style>
<template>
  <main class="main">
    <section>
      <span class="left">
        <div
          v-for="ele in elements"
          @click="handleClick"
          class="item">
          {{symbol}}
        </div>
      </span>
      <span class="center">vertical centering<br>vertical centering</span>
      <span class="right">vertical centering</span>
    </section>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: Array(2).fill(1),
        symbol: '➕'
      }
    },
    methods: {
      handleClick () {
        this.elements.length == 2 ? (_ => {
          this.elements.push(1);
          this.symbol = '➖';
        })() : (_ => {
          this.elements.pop();
          this.symbol = '➕';
        })()
      }
    }
  }
</script>
</script>

### 浏览器支持

<iframe
  width="100%"
  height="418px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-grid&amp;periods=future_1,current,past_1,past_2&amp;accessible-colours=false">
</iframe>
