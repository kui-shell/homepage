/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react");
const { Analytics } = require("./src/components/analytics");

exports.wrapRootElement = ({ element }) => {
    return (
        <>
            {element}
            <noscript><img alt="analytics" src='https://analytics.iqs-events.us-south.containers.appdomain.cloud/pixel.png?app_key=3cb27b4529db2bf59eeeecd05a317135a640f1b4&begin_session=1'/></noscript>
            <Analytics/>
        </>
    );
}

exports.onRouteUpdate = ({ location }) => {
    console.log('route update');
    const Countly = window['Countly'];
    if (Countly) {
        window['Countly'].q.push(['track_pageview', location.pathname]);
    }    
}
