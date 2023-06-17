var posts=["2022/06/11/Hexo Butterfly主题下更换字体/","2023/06/12/MathJax语法/","2022/06/19/hexo博客之Butterfly主题优雅更换背景/","2021/08/02/最重要的人/","2023/06/10/hello-world/","2022/04/05/清明节/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://akilar.top/img/siteicon/favicon.png","descr":"期待您的光临！"},{"name":"小冰博客","link":"https://zfe.space","avatar":"https://zfe.space/images/headimage.png","descr":"做个有梦想的人！"},{"name":"瑾谦の博客","link":"https://lele08796.github.io","avatar":"https://z3.ax1x.com/2021/11/08/IJCf4U.jpg","descr":"路为纸，地成册，行做笔，心当墨。"},{"name":"anzhiyu主题","link":"https://anzhiy.cn/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"Youtube","link":"https://www.youtube.com/","avatar":"https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png","descr":"视频网站"},{"name":"Weibo","link":"https://www.weibo.com/","avatar":"https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png","descr":"中国最大社交分享平台"},{"name":"Twitter","link":"https://twitter.com/","avatar":"https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png","descr":"社交分享平台"}];
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