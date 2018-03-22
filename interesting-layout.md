
# 类订单布局

?> 背景知识：:point_right: [水平垂直居中](/centering-known)

此布局一般的需求是左侧高度不固定，右侧自适应高度并且居中。

<div align="center" style="border: 1px solid #f5f5f5"><img src="static/interesting-layout-1.jpeg" width="100%" align="center"/></div>

> 伪元素 `:after` + `vertical-align:middle` 方案

<vuep template="#demo1"></vuep>

<script v-pre type="text/x-template" id="demo1">
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
    position: relative;
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
    padding-top: 999px;
    padding-bottom: 999px;
    margin-top: -999px;
    margin-bottom: -999px;
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
    <section class="">
      <span class="left">
        <div v-for="ele in elements" @click="handleClick" class="item">{{symbol}}</div>
      </span>
      <span class="center">垂直居中<br>垂直居中垂直居中垂直居中</span>
      <span class="right">垂直居中</span>
    </section>
  </main>
</template>
<script>
  module.exports = {
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

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-sel3&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="502px"></iframe>
