import React from "react"
import $ from "jquery";

export function Main() {
  React.useEffect(() => {
    function copyCmd(content) {
      let $temp = $("<textarea>");
      $temp.css({
        'opacity': 0.1,
        'width': '1px',
        'height': '1px',
        'position': 'fixed',
        'top': 0,
        'left': 0
      })
      $("body").append($temp);
      $temp.val(content).select();
      document.execCommand("copy");
      $temp.remove();
    }

    $('.kui-codecopy').bind('click',function(){
      let $buttonContent = $(this).find('.kui-codecopy-content');
      copyCmd($buttonContent.attr('data-cmd'));
      $buttonContent.text('Copied');
      setTimeout(function(){
        $buttonContent.text($buttonContent.attr('data-cmd'));
      },2500);
    })

    $('.ibm-tabs').find('.ibm-tab').each(function(){
      $(this).find('a').bind('click',function(e){
        e.preventDefault();
        $('.ibm-tabs').find('.ibm-active').removeClass('ibm-active').removeAttr('aria-selected');
        let $this = $(this);
        $('.kui-video-subtitle').text($this.attr('data-subtitle'));
        $this.addClass('ibm-active').attr('aria-selected',true);
        playTutorial($this.attr('href'));
      })
    });
    $('.kui-video-player').find('video').each(function(){
      $(this).bind('ended',function(){
          let $ibmTabs = $('.ibm-tabs');
          let nextIdx = $ibmTabs.find('.ibm-active').parent().index()+1;
          console.log(nextIdx);
          let $ibmTab = $ibmTabs.find('.ibm-tab');
          if($ibmTab.eq(nextIdx).length > 0){
            $ibmTab.eq(nextIdx).find('a').click();
          } else {
            $ibmTab.eq(0).find('a').click();
          }
      })
    })

    function playTutorial(url){
      $('.kui-video-player').find('video').each(function(){
        let $this = $(this);
        let video = $this[0];
        if($this.hasClass('active')){
          video.src = url;
          video.currentTime = 0;
          video.load();
          video.play();
        }
      })
    }

    function getOS() {
        let userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'mac';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'win';
        } else if (!os && /Linux/.test(platform)) {
            os = 'lindeb';
        } else {
            os = 'win';
        }
        return os;
    }

    $('.kui-download-link').each(function(){
      if(getOS() == $(this).attr('data-os')){
        $(this).removeClass('hidden');
      }
    })

  }, [])
  return null
}
