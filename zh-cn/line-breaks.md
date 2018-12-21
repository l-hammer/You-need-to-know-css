
# 插入换行

?> 背景知识：:point_right: [Unicode](https://en.wikipedia.org/wiki/Unicode), [white-space](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)

在[Unicode](http://www.ssec.wisc.edu/~tomw/java/unicode.html)中，`0x000A`字符是专门控制换行的。在`CSS`中，我们可以写为`\000A`或`\A`,我们可以用它来作为`::after`伪元素的内容，并将其添加到指定元素的尾部，实现换行效果。

<vuep template="#line-breaks"></vuep>

<script v-pre type="text/x-template" id="line-breaks">
<style>
  main{
    width: 100%;
    padding: 52px 39px;
    background: rgba(180,160,120,.1);
  }
  span.key {
    padding-right: 6px;
  }
  span.bold {
    line-height: 2em;
    font-weight: bold;
  }
  span.br::before {
    content: "\A";
    white-space: pre;
  }
  span.bold + span.bold::before {
    content: ", ";
    font-weight: 500;
    margin-left: -.25em;
  }    
</style>
<template>
  <main class="main">
    <span class="key">👦🏿Name:</span>
    <span class="bold">LHammer</span>
    <span class="key br">👨🏼‍💻GitHub:</span>
    <span class="bold">https://github.com/l-hammer</span>
    <span class="bold">https://gitee.com/lhammer</span>
    <span class="key br">🌎掘金:</span>
    <span class="bold">https://juejin.im/user/57a3dbb2d342d300574d8369</span>
  </main>
</template>
<script>
</script>
</script>

!> 上述代码中，通过伪元素在多个`span.bold`元素间添加的逗号前面会有一个空格，负外边距`margin-left: -.25em;`的作用是抵消所出现的空隙。

### 浏览器支持

<iframe
  width="100%"
  height="431px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gencontent&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
