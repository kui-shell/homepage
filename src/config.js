const serverUrl = process.env.KUI_COUNTLY_SERVER || 'https://analytics.iqs-events.us-south.containers.appdomain.cloud';

const appKey = process.env.KUI_COUNTLY_KEY || '3cb27b4529db2bf59eeeecd05a317135a640f1b4';

const pixelUrl = `${serverUrl}/pixel.png?app_key=${appKey}&begin_session=1`;

export const config = {
    countly: {
        serverUrl,
        appKey,
        pixelUrl
    }
}