var posts=["2022/06/11/Hexo Butterfly主题下更换字体/","2023/06/12/MathJax语法/","2023/07/05/hello-world/","2022/06/19/hexo博客之Butterfly主题优雅更换背景/","2021/08/09/害怕😱恐惧😨/","2021/08/02/最重要的人/","2022/04/05/清明节/","2023/06/25/高考成绩/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://akilar.top/img/siteicon/favicon.png","descr":"期待您的光临！"},{"name":"小冰博客","link":"https://zfe.space","avatar":"https://zfe.space/images/headimage.png","descr":"做个有梦想的人！"},{"name":"Heo","link":"https://blog.zhheo.com/","avatar":"https://img.zhheo.com/i/2022/08/19/62ff32fa28da1.png","descr":"荆棘之路，劈风斩浪。"},{"name":"瑾谦の博客","link":"https://lele08796.github.io","avatar":"https://z3.ax1x.com/2021/11/08/IJCf4U.jpg","descr":"路为纸，地成册，行做笔，心当墨。"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"爱吃肉的猫","link":"https://meuicat.com/","avatar":"https://s1.ax1x.com/2023/05/26/p9qChjI.jpg","descr":"有肉有猫有生活."},{"name":"Rootlex","link":"https://blog.nalex.top","avatar":"https://bu.dusays.com/2023/01/25/63d130a6ce9ea.jpg","descr":"寒蝉黎明之时，便是重生之日"},{"name":"轻笑Chuckle","link":"https://www.qcqx.cn","avatar":"https://www.qcqx.cn/img/head.webp","descr":"漫天倾尘,风中轻笑","siteshot":"https://www.qcqx.cn/img/chuckle.webp"},{"name":"Ariasakaの小窝","link":"https://yisous.xyz","avatar":"https://bu.dusays.com/2022/12/15/639a9ebbbc1ad.jpg","descr":"人有悲欢离合 月有阴晴圆缺","siteshot":"https://vercel.yisous.xyz/img/siteshot.png"},{"name":"Adil","link":"https://blog.adil.com.cn","avatar":"https://tucdn.wpon.cn/2023/04/06/15dbbb2004b44.jpg","descr":"BW/HANA顾问,BI工程师,数据分析师,数据科学家。","top_img":"https://tucdn.wpon.cn/2023/04/06/126fba2e88c54.png"},{"name":"Shine","link":"https://blog.shineyu.cn/","avatar":"https://blog.shineyu.cn/img/shineyu_avatar.webp","descr":"热爱生活点滴，分享时刻精彩。","siteshot":"https://blog.shineyu.cn/img/website.webp"},{"name":"葱苓","link":"https://blog.itciraos.cn","avatar":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.webp","descr":"Dare && Do","siteshot":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/site-shot.webp"},{"name":"风记星辰","link":"https://www.thyuu.com","avatar":"https://std.thyuu.com/logo.webp","descr":"热爱你来过的每一份温度"},{"name":"一蓑烟雨","link":"https://easyf12.top/","avatar":"https://img.easyf12.top/images/2022/10/15/634a8b4186889.webp","descr":"竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。","siteshot":"https://img.easyf12.top/images/2022/12/19/639fcb39327a2.png"},{"name":"豆豆 / Amos","link":"https://amoshk.top","avatar":"https://amoshk.top/img/avatar.png","descr":"终身学习的👦，记录一些生活片段"},{"name":"Youtube","link":"https://www.youtube.com/","avatar":"https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png","descr":"视频网站"},{"name":"Weibo","link":"https://www.weibo.com/","avatar":"https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png","descr":"中国最大社交分享平台"},{"name":"Twitter","link":"https://twitter.com/","avatar":"https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png","descr":"社交分享平台"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };