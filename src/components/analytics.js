import React from 'react';

export function Analytics() {
    React.useEffect(() => {
        
    //some default pre init
    const Countly = (window['Countly'] = window['Countly'] || {});
    Countly.q = Countly.q || [];

    //provide countly initialization parameters
    Countly.app_key = '3cb27b4529db2bf59eeeecd05a317135a640f1b4';
    Countly.url = 'https://analytics.iqs-events.us-south.containers.appdomain.cloud';

    Countly.q.push(['track_sessions']);
    Countly.q.push(['track_pageview']);
    Countly.q.push(['track_clicks']);
    Countly.q.push(['track_scrolls']);

    var cly = document.createElement('script'); cly.type = 'text/javascript';
    cly.async = true;
    //enter url of script here
    cly.src = 'https://cdnjs.cloudflare.com/ajax/libs/countly-sdk-web/18.8.2/countly.min.js';
    cly.onload = function(){ Countly.init() };
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cly, s);
        

        
    }, []);            
    return null;
}