# 半透明边框

<vuep template="#demo1"></vuep>

<script v-pre type="text/x-template" id="demo1">
<style>
  main{
    width: 100%;
    padding: 100px;
    display: flex;
    background: #4fc08d;
  }
  div{
    margin: auto;
    border: 10px solid hsla(0, 0%, 100%, .5);
    background: white;
    background-clip: padding-box;
    padding: 12px;
  }
</style>

<template>
  <main>
    <div>
      semi-transparent borders?<br>
      semi-transparent borders?<br>
      semi-transparent borders?<br>
      Pretty pleaseå<br>
    </div>
  </main>
</template>

<script>  
</script>
</script>
