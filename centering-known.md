
# Centered

?> Background：:point_right: [display](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display), [calc()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc), [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

> "44 year ago we put a man on the moon,yet we still can't vertically centre things in CSS。"        [——James Anderson](/centering-known)

All the practices mentioned in the following part, I have experimented it on my own project. Those practices have both advantages and disadvantages. You guys can pick the most suitable solution according to your preference.

> `display: flex` + `margin: auto` no limit to width & height :thumbsup:

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

> `display: grid` no limit to width & height :thumbsup:

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

> absolute-positioned `position: absolute` limit the width & height

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

> absolute-positioned `position: absolute` + `calc()` limit the width & height

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

> absolute-positioned `position: absolute` + `translate` no limit to width & height :thumbsup:

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

> table-like layout `display: table/table-cell` + `vertical-align: middle` no limit to width & height

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

> pseudo-elements `:after` + `vertical-align:middle` no limit to width & height

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

When you are applying the `vertical-align` to achieve the goal of centering, please remeber to set the value of `display` element to `inline-block/inline`, otherwise, you cannot make it center vertically. The reason is that `vertical-align` is utilized to define the way of vertical alignment only for the inline or the table-cell element. Please click [MDN vertical-align](https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align) for more information.

### Browser Support

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
