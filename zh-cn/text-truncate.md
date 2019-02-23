
# 文本截断

<vuep template="#text-effects"></vuep>

<script v-pre type="text/x-template" id="text-effects">
<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    width: 329px;
    text-align: justify;
    hyphens: auto;
    overflow: hidden;
    line-height: 1.5em;
  }
  p:nth-of-type(1) {
    white-space: nowrap;
    word-wrap: normal;
    text-overflow: ellipsis;
  }
  p:nth-of-type(2) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
<template>
  <main>
    <p>A paragraph of filler text. La la la de dah de dah de dah de la.</p>
    <p>A paragraph of filler text. La la la de dah de dah de dah de la la la de dah de dah de dah de lala la de dah de dah de dah de lala la de dah de dah de dah de lala la de dah de dah de dah de lala la de dah de dah de dah de lala la de dah de dah de dah de lala la de dah de dah de dah de la.</p>
  </main>
</template>
<script>  
</script>
</script>