import React from "react"
import $ from "jquery";

export function Main() {
  React.useEffect(() => {
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
