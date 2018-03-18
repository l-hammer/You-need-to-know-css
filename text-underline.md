# 自定义文字下划线

?> 背景知识：:point_right: [linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient), [text-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow), [text-decoration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)

通过`text-decoration: underline`实现的下划线存在很多问题，比如无法控制位置、无法实现避让（`text-decoration-skip`浏览器几乎都不支持）、更重要的是无法满足`强迫症患者`的需求，并且不同语言有不同的对齐习惯，中文以中心对齐，英文以基线对齐，所以建议通过自定义来实现下划线。

> `box-shadow`模拟下划线效果

<vuep template="#underline-solid-cn-shadow"></vuep>

<script v-pre type="text/x-template" id="underline-solid-cn-shadow">
<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 39px 0;
    user-select: none;
    font: 14px / 1 Helvetica, sans-serif;
  }
  p {
    line-height: 18px;
    box-shadow: 0 -1px 0 0 gray inset;
  }
</style>
<template>
  <main ref="main">
    <p>请给我添加一条能看能看能看的下划线！</p>
  </main>
</template>
<script>
</script>
</script>

缺点：flex布局下只适合单行文本

> `linear-gradient`模拟下划线效果

<vuep template="#underline-solid-cn"></vuep>

<script v-pre type="text/x-template" id="underline-solid-cn">
<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 39px 0;
    user-select: none;
    font: 14px / 1.5 Helvetica, sans-serif;
  }
  p {
    line-height: 1.5em; /* 避免样式干扰 */
    background: linear-gradient(#34495e, #34495e) no-repeat;
    background-size: 100% 1px;
    background-position: 0 18px;
  }
  p:hover {
    animation: text-underline-slideInLeft 1.2s linear infinite forwards;
  }
</style>
<template>
  <main ref="main">
    <p>请给我添加一条能看能看能看的下划线！</p>
  </main>
</template>
<script>
</script>
</script>

> `linear-gradient` + `text-shadow`模拟`solid`型下划线效果

<vuep template="#underline-solid"></vuep>

<script v-pre type="text/x-template" id="underline-solid">
<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 39px 0;
    user-select: none;
    font: 18px / 1 Helvetica, sans-serif;
  }
  p {
    background: linear-gradient(#34495e, #34495e) no-repeat;
    background-size: 100% 1px;
    background-position: 0 21px;
    text-shadow: .05em 0 white, -.05em 0 white; /* 避让超出基线以下的部分*/
  }
  p:hover {
    animation: text-underline-slideInLeft 1.2s linear infinite forwards;
  }
</style>
<template>
  <main ref="main">
    <p>CSS tricks web developerperpers need to know!</p>
  </main>
</template>
<script>
</script>
</script>

> `linear-gradient` + `text-shadow`模拟`dashed`型下划线效果

<vuep template="#underline-dashed"></vuep>

<script v-pre type="text/x-template" id="underline-dashed">
<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 39px 0;
    user-select: none;
    font: 18px / 1 Helvetica, sans-serif;
  }
  p {
    background: linear-gradient(90deg, #34495e 66%, transparent 0) repeat-x;
    background-size: .3em 1px;
    background-position: 0 21px;
    text-shadow: .05em 0 white, -.05em 0 white; /* 避让超出基线以下的部分*/
  }
</style>
<template>
  <main ref="main">
    <p>CSS tricks web developerperpers need to know!</p>
  </main>
</template>
<script>
</script>
</script>

> `linear-gradient` + `text-shadow`模拟`wavy`型下划线效果

<vuep template="#underline-wavy-gradient"></vuep>

<script v-pre type="text/x-template" id="underline-wavy-gradient">
<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 39px 0;
    user-select: none;
    font: 18px / 1 Helvetica, sans-serif;
  }
  p {
    background: linear-gradient(45deg, transparent 45%, #34495e 45%, #34495e 60%, transparent 0),
                linear-gradient(-45deg, transparent 45%, #34495e 45%, #34495e 60%, transparent 0);
    background-repeat: repeat-x;
    background-size: .3em .15em;
    background-position: 0 21px, .2em 21px;
    text-shadow: .05em 0 white, -.05em 0 white; /* 避让超出基线以下的部分*/
  }
</style>
<template>
  <main ref="main">
    <p>CSS tricks web developerperpers need to know!</p>
  </main>
</template>
<script>
</script>
</script>

> `text-decoration: underline wavy #34495e`实现`wavy`型下划线效果

<vuep template="#underline-wavy"></vuep>

<script v-pre type="text/x-template" id="underline-wavy">
<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 39px 0;
    user-select: none;
    font: 18px / 1 Helvetica, sans-serif;
  }
  p {
    text-decoration: underline wavy #34495e;
  }
</style>
<template>
  <main ref="main">
    <p>CSS tricks web developerperpers need to know!</p>
  </main>
</template>
<script>
</script>
</script>

缺点：`text-decoration: underline wavy #34495e`几乎没有得到浏览器支持，并且波浪线大小无法单独控制。

> 创造良好的用户体验应当养成一种习惯~

### 浏览器支持

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gradients&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="436px"></iframe>

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-textshadow&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="436px"></iframe>

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=text-decoration&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="545px"></iframe>
