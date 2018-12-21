
# 水平垂直居中

?> 背景知识：:point_right: [display](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display), [calc()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc), [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

> “44 年前我们就把人类送上月球了，但现在我们仍然无法在 CSS 中实现垂直居中。”        [——James Anderson](/centering-known)

以下的所有实现方案，笔者都在项目中验证过，每种方法都有自己的利与弊，大家可以根据具体的需求，选择最适合的方案。

> `display: flex` + `margin: auto` 不限定宽高 :thumbsup:

<vuep template="#flex"></vuep>

<script v-pre type="text/x-template" id="flex">
<style>
  main{
    width: 100%;
    min-height: 152px;
    display: flex;
  }
  main > span {
    background: #b4a078;
    color: white;
    margin: auto;
    padding: .3em 1em .5em;
    border-radius: 3px;
    box-shadow: 0 0 .5em #b4a078;
  }
</style>
<template>
  <main>
    <span>Center me, please!</span>
  </main>
</template>
<script>  
</script>
</script>

> `display: grid` 不限定宽高 :thumbsup:

<vuep template="#grid"></vuep>

<script v-pre type="text/x-template" id="grid">
<style>
  main{
    width: 100%;
    min-height: 152px;
    display: grid;
    justify-content: center;
    align-items: center;
  }
  main > span {
    background: #b4a078;
    color: white;
    padding: .3em 1em .5em;
    border-radius: 3px;
    box-shadow: 0 0 .5em #b4a078;
  }
</style>
<template>
  <main>
    <span>Center me, please!</span>
  </main>
</template>
<script>  
</script>
</script>

> 绝对定位 `position: absolute` 限定宽高

<vuep template="#position"></vuep>

<script v-pre type="text/x-template" id="position">
<style>
  main{
    width: 100%;
    min-height: 152px;
    display: flex;
  }
  main > span {
    position: absolute;
    top: 50%; left: 50%;
    background: #b4a078;
    color: white;
    padding: .3em 1em .5em;
    border-radius: 3px;
    box-shadow: 0 0 .5em #b4a078;
    margin-top: -16px;
    margin-left: -72px;
  }
</style>
<template>
  <main>
    <span>Center me, please!</span>
  </main>
</template>
<script>  
</script>
</script>

> 绝对定位 `position: absolute` + `calc()` 限定宽高

<vuep template="#calc"></vuep>

<script v-pre type="text/x-template" id="calc">
<style>
  main{
    width: 100%;
    min-height: 152px;
    display: flex;
  }
  main > span {
    position: absolute;
    top: calc(50% - 16px); 
    left: calc(50% - 72px);
    background: #b4a078;
    color: white;
    padding: .3em 1em .5em;
    border-radius: 3px;
    box-shadow: 0 0 .5em #b4a078;
  }
</style>
<template>
  <main>
    <span>Center me, please!</span>
  </main>
</template>
<script>  
</script>
</script>

> 绝对定位 `position: absolute` + `translate` 不限定宽高 :thumbsup:

<vuep template="#translate"></vuep>

<script v-pre type="text/x-template" id="translate">
<style>
  main{
    width: 100%;
    min-height: 152px;
    display: flex;
  }
  main > span {
    position: absolute;
    top: 50%; left: 50%;
    background: #b4a078;
    color: white;
    padding: .3em 1em .5em;
    border-radius: 3px;
    box-shadow: 0 0 .5em #b4a078;
    transform: translate(-50%, -50%);
  }
</style>
<template>
  <main>
    <span>Center me, please!</span>
  </main>
</template>
<script>  
</script>
</script>

> 仿table布局 `display: table/table-cell` + `vertical-align: middle` 不限定宽高

<vuep template="#table"></vuep>

<script v-pre type="text/x-template" id="table">
<style>
  main {
    width: 100%;
    height: 152px;
    display: table;
  }
  main > div {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  main > div > span {
    width: 50%;
    background: #b4a078;
    color: white;
    padding: .3em 1em .5em;
    border-radius: 3px;
    box-shadow: 0 0 .5em #b4a078;
  }
</style>
<template>
  <main>
    <div><span>Center me, please!</span></div>
  </main>
</template>
<script>  
</script>
</script>

> 伪元素 `:after` + `vertical-align:middle` 不限定宽高

<vuep template="#after"></vuep>

<script v-pre type="text/x-template" id="after">
<style>
  main {
    width: 100%;
    height: 152px;
    text-align: center;
  }
  main::after {
    content:'';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  main > span {
    /* display: inline-block;
    vertical-align: middle; */
    background: #b4a078;
    color: white;
    padding: .3em 1em .5em;
    border-radius: 3px;
    box-shadow: 0 0 .5em #b4a078;
  }
</style>
<template>
  <main>
    <span>Center me, please!</span>
  </main>
</template>
<script>  
</script>
</script>

使用`vertical-align`实现居中时，居中元素`display`的值，必须为`inline-block/inline`，否则无法垂直居中，这是因为`vertical-align`只能用来指定行内元素`（inline）`或表格单元格`（table-cell）`元素的垂直对齐方式。更多请查看[MDN vertical-align](https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align)

### 浏览器支持

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=calc&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="480px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=flexbox&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="453px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-grid&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
