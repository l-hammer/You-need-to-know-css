
# Line breaks

?> Background：:point_right: [Unicode](https://en.wikipedia.org/wiki/Unicode), [white-space](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)

In [Unicode](http://www.ssec.wisc.edu/~tomw/java/unicode.html), the character `0x000A` is specially designed to control line breaks. In CSS, we can write it as `000A` or `\A`. We can use it as the content of the pseudo-element `::after`, and append it to the specified element, to achieve line-breaking.

<vuep template="#line-breaks_tlp"></vuep>

<script v-pre type="text/x-template" id="line-breaks_tlp">
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
    <span class="key br">🌎Juejin:</span>
    <span class="bold">https://juejin.im/user/57a3dbb2d342d300574d8369</span>
  </main>
</template>
<script>
</script>
</script>

!> In the above code, there is a space in front of the comma added between the multiple `span.bold` elements through the pseudo-element. The negative margin `margin-left: -.25em;` is used to offset the gaps that appear.

### Browser Support

<iframe
  width="100%"
  height="431px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gencontent&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
