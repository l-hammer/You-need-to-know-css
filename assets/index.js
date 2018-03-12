/**
 * cover caniuse iframe css
 */
window.$docsify = {
  name: 'You-need-to-know-css',
  repo: 'https://github.com/l-hammer/You-need-to-know-css',
  auto2top: true,
  loadSidebar: true,
  subMaxLevel: 2,
  homepage: 'README.md',
  ga: 'UA-111446331-1',
  search: {
    noData: {
      '/': '找不到结果!'
    },
    paths: 'auto',
    placeholder: {
      '/': '搜索'
    }
  },
  plugins: [
    function(hook, vm) {
      // var browserCompatibility = [
      //   '<p class="ciu_embed" data-feature="once-event-listener" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">',
      //   '<a href="http://caniuse.com/#feat=once-event-listener">Can I Use once-event-listener?</a> Data on support for the once-event-listener feature across the major browsers from caniuse.com.',
      //   '</p>'
      // ].join('');

      hook.beforeEach(function (html) {
        var url = 'https://github.com/l-hammer/You-need-to-know-css/blob/master/' + vm.route.file;
        var editHtml = '[📝 EDIT DOCUMENT](' + url + ')\n';
        
        return editHtml + html;
      })

      hook.doneEach(function(){
        var label = vm.route.path.split('/').join('');
        var domObj = Docsify.dom;
        var main = domObj.getNode("#main");

        /**
         * render gittalk
         */
        Array.apply(null,document.querySelectorAll("div.gitalk-container")).forEach(function(ele){
          ele.remove();
        });

        var divEle = domObj.create("div");
        divEle.id = "gitalk-container-" + label;
        divEle.className = "gitalk-container";
        divEle.style = "width: " + main.clientWidth + "px; margin: 0 auto 20px;";
        domObj.appendTo(domObj.find(".content"), divEle);

        var gitalk = new Gitalk({
          clientID: '8b7cffeb4ae285e0e3e4',
          clientSecret: '58d06f5220e953d6dac7d6723daf225177cc7bb3',
          repo: 'You-need-to-know-css',
          owner: 'l-hammer',
          admin: ['l-hammer'],
          id: !label ? "home" : label,
          distractionFreeMode: false
        })
        gitalk.render('gitalk-container-' + label)
      })
    }
  ]
}