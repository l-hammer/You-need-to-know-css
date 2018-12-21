# Text underline

?> Background：:point_right: [linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient), [text-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow), [text-decoration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)

There are many problems with the underscores effect implemented by `text-decoration: underline`, such as the inability to control the location, the inability to avoid (the `text-decoration-skip`, browser is almost unsupported), and more importantly, it really annoys the `obsessive-compulsive disorder`. In addition, different languages ​​have different alignment habits, Chinese is center-aligned, and English is aligned with the baseline, so it is highly recommended to implement customized underscores.

> `box-shadow` simulate underline effect

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
    font: 16px / 1 Helvetica, sans-serif;
  }
  p > a {
    box-shadow: 0 -1px 0 0 #b4a078 inset;
  }
</style>
<template>
  <main ref="main">
    <p><a>please add beauuuuuuuutiful underline effect</a></p>
  </main>
</template>
<script>
</script>
</script>

> pseudo element `after` simulate underline effect

<vuep template="#underline-solid-cn-after"></vuep>

<script v-pre type="text/x-template" id="underline-solid-cn-after">
<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 39px 0;
    user-select: none;
    font: 16px / 1 Helvetica, sans-serif;
  }
  p > a {
    position: relative;
  }
  p > a:after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0; right: 0; left: 0;
    border-bottom: 1px solid #b4a078;
  }
</style>
<template>
  <main ref="main">
    <p><a>Please add beauuuuuuuutiful underline effect</a></p>
  </main>
</template>
<script>
</script>
</script>

> `linear-gradient`simulate underline effect :thumbsup:

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
    font: 16px / 1.5 Helvetica, sans-serif;
  }
  p > a {
    padding-bottom: 1px;
    background: linear-gradient(#b4a078, #b4a078) no-repeat;
    background-size: 100% 1px;
    background-position: 0 18px;
  }
  p > a:hover{
    animation: text-underline-slideInLeft 1.2s linear infinite forwards;
  }
  @keyframes text-underline-slideInLeft {
    from {
      background-position-x: -432px;
    }
    50% {
      background-position-x: 0;
    }
    to {
      background-position-x: 432px;
    }
  }
</style>
<template>
  <main ref="main">
    <p><a>please add beauuuuuuuutiful underline effect!</a></p>
  </main>
</template>
<script>
</script>
</script>

> `linear-gradient` + `text-shadow` simulate `solid` underline effect

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
    font: 16px / 1 Helvetica, sans-serif;
  }
  p > a {
    background: linear-gradient(#b4a078, #b4a078) no-repeat;
    background-size: 100% 1px;
    background-position: 0 1em;
    text-shadow: .05em 0 white, -.05em 0 white; /* avoid parts below the baseline*/
  }
  p > a:hover{
    animation: text-underline-slideInLeft 1.2s linear infinite forwards;
  }
  @keyframes text-underline-slideInLeft {
    from {
      background-position-x: -432px;
    }
    50% {
      background-position-x: 0;
    }
    to {
      background-position-x: 432px;
    }
  }
</style>
<template>
  <main ref="main">
    <p><a>CSS tricks web developerperpers need to know!</a></p>
  </main>
</template>
<script>
</script>
</script>

> `linear-gradient` + `text-shadow` simulate `dashed` underline effect :thumbsup:

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
    font: 16px / 1 Helvetica, sans-serif;
  }
  p > a {
    background: linear-gradient(90deg, #b4a078 66%, transparent 0) repeat-x;
    background-size: .3em 1px;
    background-position: 0 1em;
    text-shadow: .05em 0 white, -.05em 0 white; /* avoid parts below the baseline*/
  }
</style>
<template>
  <main ref="main">
    <p><a>CSS tricks web developerperpers need to know!</a></p>
  </main>
</template>
<script>
</script>
</script>

> `linear-gradient` + `text-shadow` simulate `wavy` underline effect

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
    font: 16px / 1 Helvetica, sans-serif;
  }
  p > a {
    background: linear-gradient(45deg, transparent 45%, #b4a078 45%, #b4a078 60%, transparent 0),
                linear-gradient(-45deg, transparent 45%, #b4a078 45%, #b4a078 60%, transparent 0);
    background-repeat: repeat-x;
    background-size: .3em .15em;
    background-position: 0 1em, .2em 1em;
    text-shadow: .05em 0 white, -.05em 0 white; /* avoid parts below the baseline*/
  }
</style>
<template>
  <main ref="main">
    <p><a>CSS tricks web developerperpers need to know!</a></p>
  </main>
</template>
<script>
</script>
</script>

> `text-decoration: underline wavy #34495e` achieve `wavy` underline effect

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
    font: 16px / 1 Helvetica, sans-serif;
  }
  p > a {
    text-decoration: underline wavy #b4a078;
  }
</style>
<template>
  <main ref="main">
    <p><a>CSS tricks web developerperpers need to know!</a></p>
  </main>
</template>
<script>
</script>
</script>

Cons: Hardly do any browsers support `text-decoration: underline wavy #34495e`, besides, we cannot control the size of wavy line separately.

> Greate user experience should always go first as a habit ~

### Browser Support

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gradients&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-textshadow&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="480px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=text-decoration&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
