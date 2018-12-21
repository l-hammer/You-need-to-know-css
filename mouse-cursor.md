
# Mouse cursor

?> Background：:point_right: [cursor](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)

<vuep template="#mouse-cursor_tlp"></vuep>

<script v-pre type="text/x-template" id="mouse-cursor_tlp">
<style>
  main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  main > span {
    width: 100px; height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
    border-radius: 50%;
    font-weight: 600;
    transform: translate3d(0, 0, 0);
    transition: all .3s ease-in-out;
    background: #eee url("data:image/svg+xml,\
            <svg xmlns='http://www.w3.org/2000/svg' width='90' height='9'>\
                <rect width='90' height='8' fill='#f2f2f2'/>\
                <rect width='90' height='2' fill='#e7e7e7'/>\
                <rect y='2' width='90' height='3' fill='#ececec'/>\
            </svg>");
    background-size: 12px 12px;
  }
  main > span:hover {
    transform: translate3d(-1px, -1px, 0) scale(1.05);
    box-shadow: -2px -2px 6px 2px rgba(108, 108, 108, 0.1) inset, 
                0 0 0 5px rgba(255, 255, 255, .6) inset, 
                0 0 0 1px rgba(139, 139, 139, 0.1), 
                2px 2px 10px rgba(0,0,0,.2);
  }
  main > span:nth-of-type(1) {
    cursor: default;
  }
  main > span:nth-of-type(2) {
    cursor: crosshair;
  }
  main > span:nth-of-type(3) {
    cursor: help;
  }
  main > span:nth-of-type(4) {
    cursor: move;
  }
  main > span:nth-of-type(5) {
    cursor: pointer;
  }
  main > span:nth-of-type(6) {
    cursor: progress;
  }
  main > span:nth-of-type(7) {
    cursor: text;
  }
  main > span:nth-of-type(8) {
    cursor: wait;
  }
  main > span:nth-of-type(9) {
    cursor: e-resize;
  }
  main > span:nth-of-type(10) {
    cursor: ne-resize;
  }
  main > span:nth-of-type(11) {
    cursor: nw-resize;
  }
  main > span:nth-of-type(12) {
    cursor: n-resize;
  }
  main > span:nth-of-type(13) {
    cursor: se-resize;
  }
  main > span:nth-of-type(14) {
    cursor: sw-resize;
  }
  main > span:nth-of-type(15) {
    cursor: s-resize;
  }
  main > span:nth-of-type(16) {
    cursor: w-resize;
  }
  main > span:nth-of-type(17) {
    cursor: context-menu;
  }
  main > span:nth-of-type(18) {
    cursor: none;
    background: #eee url('data:image/svg+xml,\
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill-opacity=".15" >\
                <rect x="30" width="30" height="30" />\
                <rect y="30" width="30" height="30" />\
            </svg>');
    background-size: 18px 18px;
  }
  main > span:nth-of-type(19) {
    cursor: cell;
  }
  main > span:nth-of-type(20) {
    cursor: vertical-text;
  }
  main > span:nth-of-type(21) {
    cursor: alias;
  }
  main > span:nth-of-type(22) {
    cursor: copy;
  }
  main > span:nth-of-type(23) {
    cursor: no-drop;
  }
  main > span:nth-of-type(24) {
    cursor: not-allowed;
  }
  main > span:nth-of-type(25) {
    cursor: ew-resize;
  }
  main > span:nth-of-type(26) {
    cursor: ns-resize;
  }
  main > span:nth-of-type(27) {
    cursor: nesw-resize;
  }
  main > span:nth-of-type(28) {
    cursor: nwse-resize;
  }
  main > span:nth-of-type(29) {
    cursor: col-resize;
  }
  main > span:nth-of-type(30) {
    cursor: row-resize;
  }
  main > span:nth-of-type(31) {
    cursor: all-scroll;
  }
  main > span:nth-of-type(32) {
    cursor: zoom-in;
  }
  main > span:nth-of-type(33) {
    cursor: zoom-out;
  }
  main > span:nth-of-type(34) {
    cursor: -webkit-grab;
  }
  main > span:nth-of-type(35) {
    cursor: -webkit-grabbing;
  }
</style>
<template>
  <main>
    <span>default</span>
    <span>crosshair</span>
    <span>help</span>
    <span>move</span>
    <span>pointer</span>
    <span>progress</span>
    <span>text</span>
    <span>wait</span>
    <span>e-resize</span>
    <span>ne-resize</span>
    <span>nw-resize</span>
    <span>n-resize</span>
    <span>se-resize</span>
    <span>sw-resize</span>
    <span>s-resizes</span>
    <span>w-resize</span>
    <span>context-menu</span>
    <span>none</span>
    <span>cell</span>
    <span>vertical-text</span>
    <span>alias</span>
    <span>copy</span>
    <span>no-drop</span>
    <span>not-allowed</span>
    <span>ew-resize</span>
    <span>ns-resize</span>
    <span>nesw-resize</span>
    <span>nwse-resize</span>
    <span>col-resive</span>
    <span>row-resize</span>
    <span>all-scroll</span>
    <span>zoom-in</span>
    <span>zoom-out</span>
    <span>grab</span>
    <span>grabbing</span>
  </main>
</template>
<script>  
</script>
</script>

> Greate user experience should always go first as a habit ~

### Browser Support

<iframe
  width="100%"
  height="493px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css3-cursors&amp;periods=future_2,future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="471px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css3-cursors-newer&amp;periods=future_2,future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
