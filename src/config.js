const serverUrl = process.env.KUI_COUNTLY_SERVER || 'https://analytics.thesoftpotatos.com';

const appKey = process.env.KUI_COUNTLY_KEY || 'ebba657ab9271652f02eb343e83a54063f3de841';

const pixelUrl = `${serverUrl}/pixel.png?app_key=${appKey}&begin_session=1`;

export const config = {
    countly: {
        serverUrl,
        appKey,
        pixelUrl
    }
}