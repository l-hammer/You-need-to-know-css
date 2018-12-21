
# 通过阴影弱化背景

?> 背景知识：:point_right: [css-boxshadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/css-boxshadow), HTML < [dialog](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dialog) >

<vuep template="#shadow-weaken-background"></vuep>

<script v-pre type="text/x-template" id="shadow-weaken-background">
<style>
  main {
    width: 100%;
    user-select: none;
    font: 14px / 1 Helvetica, sans-serif;
  }
  main > h5 {
    margin: 30px 30px 15px;
  }
  main > section {
    width: 100%;
    padding: 16px;
    overflow: hidden;
    position: relative;
  }
  main > section:nth-of-type(1) .overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, .8);
  }
  main > section .lightbox {
    width: 60%; height: 51px;
    background-color: #FFF;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  main > section:nth-of-type(1) .lightbox {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  main > section:nth-of-type(2) .lightbox {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 50vmax rgba(0, 0, 0, .8);
  }
  main > section dialog{
    width: 400px; height: 130px;
    margin: auto;
    padding: 53px 151px;
  }
  main > section dialog::backdrop {
    background: rgba(0, 0, 0, .8)
  }
</style>
<template>
  <main>
    <h5>1️⃣ 增加遮罩层方案</h5>
    <section>
      <p>Bacon ipsum dolor amet consectetur short loin ut tri-tip alcatra ground round jowl beef meatloaf in pork. Elit
          chicken ea spare ribs. Shank andouille ex boudin picanha turkey esse. Do doner fugiat tongue.
      </p>
      <p>Chuck filet mignon flank pork chop mollit enim veniam sed pork loin aliquip sausage prosciutto in deserunt. Nostrud
          porchetta non nulla sunt. Cupim et velit picanha laborum salami capicola exercitation alcatra sausage cillum
          shoulder minim esse. Pig boudin aliquip aute, tail ut cow incididunt short loin aliqua.
      </p>
      <p>Doner alcatra pastrami pig, strip steak eu in frankfurter occaecat in filet mignon chuck short loin nulla meatloaf.
          Adipisicing aliqua kielbasa nulla proident. Ground round meatloaf kevin, shank adipisicing pork frankfurter
          t-bone spare ribs cupidatat. Sed ham non duis enim, in ipsum fugiat est tongue short ribs ad bresaola prosciutto.
          Non minim picanha, ad in occaecat fugiat veniam dolor deserunt.
      </p>
      <div class="overlay">
          <div class="lightbox">You-need-to-know-css-tricks</div>
      </div>
    </section>
    <h5>2️⃣ box-shadow方案</h5>
    <section>
      <p>Bacon ipsum dolor amet consectetur short loin ut tri-tip alcatra ground round jowl beef meatloaf in pork. Elit
          chicken ea spare ribs. Shank andouille ex boudin picanha turkey esse. Do doner fugiat tongue.
      </p>
      <p>Chuck filet mignon flank pork chop mollit enim veniam sed pork loin aliquip sausage prosciutto in deserunt. Nostrud
          porchetta non nulla sunt. Cupim et velit picanha laborum salami capicola exercitation alcatra sausage cillum
          shoulder minim esse. Pig boudin aliquip aute, tail ut cow incididunt short loin aliqua.
      </p>
      <p>Doner alcatra pastrami pig, strip steak eu in frankfurter occaecat in filet mignon chuck short loin nulla meatloaf.
          Adipisicing aliqua kielbasa nulla proident. Ground round meatloaf kevin, shank adipisicing pork frankfurter
          t-bone spare ribs cupidatat. Sed ham non duis enim, in ipsum fugiat est tongue short ribs ad bresaola prosciutto.
          Non minim picanha, ad in occaecat fugiat veniam dolor deserunt.
      </p>
      <div class="lightbox">You-need-to-know-css-tricks</div>
    </section>
    <h5>3️⃣ backdrop方案</h5>
    <section>
      <button onclick="document.querySelector('#modal').showModal()">Click me</button>
      <dialog id="modal">
        Hello!
        <button onclick="this.parentNode.close()">Close</button>
      </dialog>
    </section>
  </main>
</template>
<script>  
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
