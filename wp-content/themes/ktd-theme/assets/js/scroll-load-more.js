jQuery.noConflict();
(function($) {   
  $(document).ready(function() {
    // Instantiate ScrollTrigger
    var scrollTrigger = new ScrollTrigger.default();

    addTriggers();
    
    function addTriggers()
    {
      scrollTrigger.add('[data-triggerView]', {
        once: false,
        offset: {
          element: { y: 200 },
          viewport: { y: 0.3 }
        },
        toggle: {
          callback: {
            in: triggerView
          }
        }
      });
      scrollTrigger.add('[data-triggerLoadArticle]', {
        once: true,
        offset: {
          element: { y: -200 }
        },
        toggle: {
          callback: {
            in: loadArticle,
          }
        }
      });
    }

    function triggerView(trigger) {
      var triggerElement = trigger.element;
      var url = triggerElement.dataset.url;

      // Update URL in address bar
      window.history.replaceState(null, null, url);
    }

    function loadArticle(trigger) {
      var start = parseInt(trigger.element.dataset.article);
      $.ajax({
        async: false,
        type: 'GET',
        dataType: 'text',
        url: infiniteArticles[start-1] + '?infinite=1&skip=' + start,
        success: function(response) {
          $('.loaded-articles').append(response);
		  //dpause2();
          initGallery();
          setTimeout(function() { 
            loadInfiniteAd(start); 
          }, 2000);		  
		  // Retrack Example when new data is present
			window.monetateQ = window.monetateQ || [];
			window.monetateQ.push([
			  "setPageType",
			  "article"
			]);			
			window.monetateQ.push([
			  "trackData"
			]);
          // Unbind previous article from ScrollTrigger so it will not trigger loadArticle() again
          trigger.element.removeAttribute('data-triggerLoadArticle');
          scrollTrigger.remove('[data-triggerView]');
          // Bind new article to ScrollTrigger
          addTriggers();
		 
        }
      });
    }
	
	
	function dpause2(){
	 var contentMap = {};
    $('.ew-embed, .facebook-responsive-video').filter(function(){
        contentMap[this.class] = $(this).html();
       // var src = $(this).attr('src');
        var src = $('iframe',this).attr('src');
		if(src){
        if (src.indexOf("dailymotion") >= 0)
        {
        src=src.slice(0, -1)
        src=src+'1';
     //  $('iframe',this).attr('src',src);
       }
		}
    });  
  }
    
    // Google DFP Ad
    function loadInfiniteAd(slotid) {
      var output = '#content-right-' + slotid + ' .output-container';
      $(output).html('<h3>Loading...</h3>');
      $(output).html('');

      // Amazon affliate script
      //var affliateScript = '<div class="content_padd">&nbsp;</div><div class="amzsidebarprdlist"></div>';
      //$(output).html('<h1>Loading...</h1>');
      //$(output).html(affliateScript);

      setTimeout(function() {
        var slotSidebarMPU1 = 'adslot-sidebar-mpu1-' + slotid;
        var slotSidebarMPU2 = 'adslot-sidebar-mpu2-' + slotid;
        var slotLeaderboardFooter = 'adslot-leaderboard-footer-' + slotid;
        var slotInsideAd = 'adslot-insidead-' + slotid;

        //AD: MPU1
        googletag.cmd.push(function() {
          var slot = googletag.defineSlot('/78059622/Responsive-Article-MPU-1',[[336,280],[300,250]], slotSidebarMPU1).addService(googletag.pubads());
          googletag.display(slotSidebarMPU1);
          googletag.pubads().refresh([slot]);
        });
        //AD: MPU2
        googletag.cmd.push(function() {
          var slot = googletag.defineSlot('/78059622/Responsive-Article-MPU-2',[[336,280],[300,250]], slotSidebarMPU2).addService(googletag.pubads());
          googletag.display(slotSidebarMPU2);
          googletag.pubads().refresh([slot]);
        });
        //AD: Leaderboard Footer
        googletag.cmd.push(function() {
          var slot = googletag.defineSlot('/78059622/Responsive-Article-Leaderboard-footer',[[970,250],[320,100]], slotLeaderboardFooter).addService(googletag.pubads());
          googletag.display(slotLeaderboardFooter);
          googletag.pubads().refresh([slot]);
        });
        //AD: InsideAd
        googletag.cmd.push(function() {
          var slot = googletag.defineSlot('/78059622/Responsive-Article-Inarticle-MPU',[[336,280],[300,250]], slotInsideAd).addService(googletag.pubads());
          googletag.display(slotInsideAd);
          googletag.pubads().refresh([slot]);
        });
      }, 250);
    }
  });
})(jQuery)
