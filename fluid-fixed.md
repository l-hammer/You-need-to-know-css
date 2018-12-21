
# Full background fixed content

?> Background：:point_right: [calc()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)

> Set the left and right padding of the element to 50% of the width of the parent element minus half of the content of the equal width. No need to set the width ~

<vuep template="#fluidFixed"></vuep>

<script v-pre type="text/x-template" id="fluidFixed">
<style>
  main{
    width: 100%;
  }
  h2.title {
    color: white;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  header{
    background: #b4a078;
    color: white;
  }
  footer{
    background: rgba(180,160,120,.05);
  }
  .main > header,
  .main > section,
  .main > footer{
      padding: .1em calc(50% - 329px);
      text-align: justify;
      hyphens: auto;
  }
</style>
<template>
  <main class="main">
    <header>
      <h2 class="title">You-need-to-know-css-tricks</h2>
    </header>
    <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
    <footer>
      <p>&copy; 2018 LHammer</p>
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
