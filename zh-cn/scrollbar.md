
# 自定义滚动条

?> 背景知识：:point_right: [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow), [::-webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)

<vuep template="#scrollbar"></vuep>

<script v-pre type="text/x-template" id="scrollbar">
<style>
  main{
    width: 100%;
    padding: 39px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scrollbar-main {
    width:60%; height: 299px;
    overflow: auto;
  }
  .scrollbar-main .row {
    display: inline-block;
    padding: 12px;
    background: rgba(180,160,120,.1);
    text-align: center;
    white-space: nowrap;
  }
  .scrollbar-main::-webkit-scrollbar {
    width: 8px;
    background: white;
  }
  .scrollbar-main::-webkit-scrollbar-corner, /* 滚动条角落 */
  .scrollbar-main::-webkit-scrollbar-thumb,
  .scrollbar-main::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  .scrollbar-main::-webkit-scrollbar-corner,
  .scrollbar-main::-webkit-scrollbar-track { /* 滚动条轨道 */
    background-color: rgba(180,160,120,.1);
    box-shadow: inset 0 0 1px rgba(180,160,120,.5);
  }
  .scrollbar-main::-webkit-scrollbar-thumb { /* 滚动条手柄 */
    background-color: rgb(180,160,120);
  }
</style>
<template>
  <main>
    <div class="scrollbar-main">
      <span v-for="row in rows" class="row">{{ row }}</span>
    </div>
  </main>
</template>
<script>
  export default {
    computed: {
      rows: function () {
        return Array.from({ length: 56 }).map((v, i) => Array(99).fill(i + 11).join(' '));
      }
    }
  }
</script>
</script>

!> 兼容性很差，并且很多样式不可控，建议在生产环境中采用类似 [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar) 的方案。

### 浏览器支持

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-scrollbar&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
