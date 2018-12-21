# 通过模糊弱化背景

?> 背景知识：:point_right: [css-boxshadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/css-boxshadow), HTML < [dialog](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dialog) >

<vuep template="#blurry-weaken-background"></vuep>

<script v-pre type="text/x-template" id="blurry-weaken-background">
<style>
  main {
    width: 100%;
    user-select: none;
    font: 14px / 1 Helvetica, sans-serif;
  }
  main {
    position: relative;
    padding: 30px 50px;
    hyphens: auto;   
    text-align: justify; 
    transition: .6s filter;
  }
  article.de-emphasized{
    filter: blur(5px);
  }
  article .btn{
    padding: 6px 1em;
    border-radius: 3px;
    outline: none;
  }
  dialog{
    width: 400px; height: 120px;
    text-align: center;
    line-height: 84px;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 .1em .2em rgba(0,0,0,.5), 0 0 0 50vmax rgba(0,0,0,.3);
    z-index: 99;
  }
  dialog:not([open]){
    display: none;
  }
</style>
<template>
  <main>
    <article ref="article">
      <button class="btn" @click="handleBtnClick($event)">Show dialog</button>
      <p>Bacon ipsum dolor amet consectetur short loin ut tri-tip alcatra ground round jowl beef meatloaf in pork. Elit chicken
          ea spare ribs. Shank andouille ex boudin picanha turkey esse. Do doner fugiat tongue.
      </p>
      <p>Chuck filet mignon flank pork chop mollit enim veniam sed pork loin aliquip sausage prosciutto in deserunt. Nostrud
          porchetta non nulla sunt. Cupim et velit picanha laborum salami capicola exercitation alcatra sausage cillum
          shoulder minim esse. Pig boudin aliquip aute, tail ut cow incididunt short loin aliqua.
      </p>
      <p>Doner alcatra pastrami pig, strip steak eu in frankfurter occaecat in filet mignon chuck short loin nulla meatloaf.
          Adipisicing aliqua kielbasa nulla proident. Ground round meatloaf kevin, shank adipisicing pork frankfurter t-bone
          spare ribs cupidatat. Sed ham non duis enim, in ipsum fugiat est tongue short ribs ad bresaola prosciutto. Non
          minim picanha, ad in occaecat fugiat veniam dolor deserunt.
      </p>
    </article>
    <dialog ref="dialog" @click="handleDialogClick($event)">
      Hi~ I'm a dialog. Click to close.
    </dialog>
  </main>
</template>
<script>
  export default {
    methods: {
      handleBtnClick(e) {
        const { dialog, article } = this.$refs;
        dialog.show();
        article.classList.add('de-emphasized');
      },
      handleDialogClick(e) {
        const { dialog, article } = this.$refs;
        dialog.close && dialog.close();
        article.classList.remove('de-emphasized');
      }
    }
  }
</script>
</script>

> 创造良好的用户体验应当养成一种习惯~

### 浏览器支持

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-boxshadow&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="528px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=dialog&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
