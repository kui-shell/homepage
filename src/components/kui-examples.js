import React from "react"
import ReactPlayer from 'react-player'

export const KuiExamples = (props) => {
    const firstChildren = React.Children.toArray(props.children)[0].props;
    const [tabsState, setTabsState] = React.useState({
        currentIndex: 0,
        currentVideo: firstChildren.reference,
        currentSubtitle: firstChildren.subtitle
    });

    const registerTabChangeEvent = (index) => {
        const Countly = (window["Countly"] = window["Countly"] || {});
        Countly.q = Countly.q || [];

        Countly.q.push(['add_event',{
            "key": `landing-tab`,
            "count": 1,
            "segmentation": {
                "item": index
            }
        }]);
    }

    const handleTabClick = (e, index) => {
        e.preventDefault();

        const currentChildren = React.Children.toArray(props.children)[index].props;

        setTabsState({
            currentIndex: index,
            currentVideo: currentChildren.reference,
            currentSubtitle: currentChildren.subtitle
        }); 

        registerTabChangeEvent(currentChildren.title);
    }

    return (
        <div className="kui-examples-bg">
            <section className="ibm-grid-container kui-examples-container">
                <div className="ibm-grid-col-lg-16-1"></div>
                <div className="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4 ibm-grid-col-sm-4-3">
                <h2 className="ibm-type-e">With Kui, you can save up to 5x of your time by running a single command.</h2>
                </div>
                <div className="ibm-grid-col-lg-11"></div>
                <div className="ibm-grid-col-lg-16-1"></div>
                <div className="ibm-grid-col-lg-16-14 kui-examples-tabs">
                <div className="ibm-text-tabs">
                    <ul role="tablist" className="ibm-tabs" aria-label="Tab navigation">
                        {React.Children.map(props.children, (child, index) => {
                            return React.cloneElement(child, {
                                index: index,
                                active: index === tabsState.currentIndex,
                                onClick: handleTabClick
                            });
                        })}
                    </ul>
                </div>
                </div>
                <div className="ibm-grid-col-lg-16-1"></div>
                <div className="ibm-grid-col-lg-16-1"></div>
                <div className="ibm-grid-col-lg-16-14">
                <ReactPlayer url={tabsState.currentVideo} width="100%" height="auto" playing muted controls className="kui-video-player" />
                <p className="kui-video-subtitle">{tabsState.currentSubtitle}</p>
                </div>
                <div className="ibm-grid-col-lg-16-1"></div>
                <div className="ibm-grid-col-lg-16-1"></div>
            </section>
        </div>
    )
}

export const Tab = ({title, index, active, reference, subtitle, onClick}) => {
    return (
        <li className="ibm-tab" role="presentation" onClick={e => onClick(e, index)} index={index}>
            <a 
                {...(active ? {'aria-selected': 'true', 'className' : 'ibm-active'} : {})}
                role="tab" 
                href={reference}
                data-subtitle={subtitle}>
                {title}
            </a>
        </li>
    );
}
