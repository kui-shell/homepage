import React from "react"
import MediaQuery from 'react-responsive';

export const KuiVideo = () => {
return (
    <video muted controls loop className="kui-hero-video">
        <MediaQuery query="(orientation: portrait)">
            <source src="videos/KUI_Vertical.mp4" type="video/mp4" />
        </MediaQuery>
        <MediaQuery query="(orientation: landscape)">
            <source src="videos/KUI_Horizontal.mp4" type="video/mp4" />
        </MediaQuery>
        Your browser does not support the video tag.
    </video>
    );
}