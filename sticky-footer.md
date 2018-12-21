
# Sticky Footer

?> Background：:point_right: [calc()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc), [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

### What is "Sticky Footer"

The so-called `Sticky Footer` refers to a web page effect. If the page content is not long enough, the footer is closely attached to the bottom of the viewport; if the content is long enough, the footer is immediately below the content. The effect is roughly as shown:

<div align="center"><img src="static/sticky-footer.jpeg" width="100%" align="center"/></div>

> Use calc() to calculate (window height - header height - footer height) the minimum height of the content area that are applyed.

<vuep template="#sticky-calc"></vuep>

<script v-pre type="text/x-template" id="sticky-calc">
<style>
  main{
    width: 100%; height: 392px;
  }
  section input:checked ~ p{ 
    display: none
  }
  .main > header,
  .main > section,
  .main > footer{
    padding: .1em calc(50% - 329px);
    text-align: justify;
    hyphens: auto;
  }
  header{
    text-align: center;
  }
  section {
    box-sizing: border-box;
    min-height: calc(100% - 59px - 107px);
  }
  footer{
    color: white;
    background: #747e7f;
  }
</style>
<template>
  <main class="main">
    <header>
      <h1>Site Header</h1>
    </header>
    <section>
      <input id="con-1" type="checkbox" checked/>
      <label for="con-1"><b>Toggle contents</b></label>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. Non consectetur a erat nam at lectus urna duis convallis. Urna neque viverra justo nec ultrices dui sapien. At augue eget arcu dictum varius duis. Porta nibh venenatis cras sed felis eget velit.</p>
      <p>Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Elit at imperdiet dui accumsan sit amet. Ornare quam viverra orci sagittis eu volutpat. Viverra mauris in aliquam sem fringilla ut. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Nec nam aliquam sem et tortor. In hendrerit gravida rutrum quisque non tellus orci ac. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Arcu dui vivamus arcu felis. Aliquam eleifend mi in nulla posuere. Nibh praesent tristique magna sit amet purus. Dictumst quisque sagittis purus sit amet. Porta non pulvinar neque laoreet. Integer feugiat scelerisque varius morbi. Sapien et ligula ullamcorper malesuada proin libero nunc consequat.</p>
      <p>Amet volutpat consequat mauris nunc congue. Porttitor lacus luctus accumsan tortor posuere ac. Netus et malesuada fames ac turpis egestas integer eget. Ligula ullamcorper malesuada proin libero nunc. Egestas purus viverra accumsan in nisl nisi. Elementum sagittis vitae et leo duis ut diam quam. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Massa tincidunt nunc pulvinar sapien et. Consequat semper viverra nam libero justo laoreet sit amet cursus. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
    </section>
    <footer>
      <p>© 2018 LHammer</p>
      <p>CSS Tricks need to know for web developer.</p>
    </footer>
  </main>
</template>
<script>  
</script>
</script>

> Flexbox `display: flex`:thumbsup:

<vuep template="#sticky-flex"></vuep>

<script v-pre type="text/x-template" id="sticky-flex">
<style>
  main{
    width: 100%; height: 392px;
    display: flex;
    flex-direction: column;
  }
  section input:checked ~ p{ 
    display: none
  }
  .main > header,
  .main > section,
  .main > footer{
    padding: .1em calc(50% - 329px);
    text-align: justify;
    hyphens: auto;
  }
  header{
    text-align: center;
  }
  section {
    flex: 1;
  }
  footer{
    color: white;
    background: #747e7f;
  }
</style>
<template>
  <main class="main">
    <header>
      <h1>Site Header</h1>
    </header>
    <section>
      <input id="con-2" type="checkbox" />
      <label for="con-2"><b>Toggle contents</b></label>
      <p>In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Velit ut tortor pretium viverra. Blandit turpis cursus in hac habitasse platea. Ornare massa eget egestas purus. Ac ut consequat semper viverra. Odio morbi quis commodo odio aenean. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Porttitor leo a diam sollicitudin. Sit amet tellus cras adipiscing enim eu turpis egestas. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Proin nibh nisl condimentum id venenatis a condimentum vitae. Et netus et malesuada fames ac turpis egestas sed.</p>
      <p>In hendrerit gravida rutrum quisque non tellus orci ac. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Arcu dui vivamus arcu felis. Aliquam eleifend mi in nulla posuere. Nibh praesent tristique magna sit amet purus. Dictumst quisque sagittis purus sit amet. Porta non pulvinar neque laoreet. Integer feugiat scelerisque varius morbi. Sapien et ligula ullamcorper malesuada proin libero nunc consequat.</p>
      <p>Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Posuere ac ut consequat semper viverra nam libero justo. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. In dictum non consectetur a erat nam.</p>
    </section>
    <footer>
      <p>© 2018 LHammer</p>
      <p>CSS Tricks need to know for web developer.</p>
    </footer>
  </main>
</template>
<script>  
</script>
</script>

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
