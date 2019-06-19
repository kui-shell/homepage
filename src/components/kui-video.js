import React from "react"
import MediaQuery from 'react-responsive';

export const KuiVideo = () => {
return (
    <div className="ibm-grid-col-lg-16-14">
        <MediaQuery query="(orientation: portrait)">
            <video muted controls className="kui-hero-video" poster="images/title-video-portrait.jpg">
            <source src="videos/KUI_Vertical.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </MediaQuery>
        <MediaQuery query="(orientation: landscape)">
            <video muted controls className="kui-hero-video" poster="images/title-video-landscape.jpg">
            <source src="videos/KUI_Horizontal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </MediaQuery>
    </div>
    );
}