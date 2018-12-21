
# 文本行斑马条纹

?> 背景知识：:point_right: [linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient)

<vuep template="#zebra-stripes"></vuep>

<script v-pre type="text/x-template" id="zebra-stripes">
<style>
  main {
    width: 100%;
  }
  pre {
    width: 100%;
    display: inline-flex;
    background: #f8f8f8;
    background-image: linear-gradient(rgba(18,18,18,.05) 50%, transparent 0);
    background-size: auto 48px;
    background-origin: content-box;
    font: 14px/24px Consolas, Monaco, monospace;
  }
  main pre > code {
    display: inline-block;
    padding: 0;
    color: #34495e;
    background-color: transparent;
    font: inherit;
  }
</style>
<template>
  <main class="main">
    <pre>
      <code class="language-js">
        const pull = (arr, ...args) => {
          let argState = Array.isArray(args[0]) ? args[0] : args;
          let pulled = arr.filter((v, i) => !argState.includes(v));
          arr.length = 0;
          pulled.forEach(v => arr.push(v));
        };
        let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
        pull(myArray, 'a', 'c');
        console.log(myArray);
      </code>
    </pre>
  </main>
</template>
<script>  
</script>
</script>

### 浏览器支持

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gradients&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
