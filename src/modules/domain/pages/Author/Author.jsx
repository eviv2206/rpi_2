import React from 'react';
import { useLocation } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import YouTube from 'react-youtube';
import color from '../../../../styles/_colors.scss';

const Author = () => {
    const man = useLocation().state;
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
    };
    return(
        <>
            <div><h2>{man.author.firstName} {man.author.surname}</h2></div>
            <div><h3>{man.author.birthDate}-{man.author.deadDate}</h3></div>
            <div><img src={man.pic} alt={man.author.surname}/></div>
            <VerticalTimeline
                lineColor={color.brown}
            >
                <VerticalTimelineElement 
                    date="2011-2016"
                    iconStyle={{ background: 'white', 'box-shadow': color.shadowBrown, border: `1px solid ${color.brown}`  }}
                >
                    <p>{man.author.biography}</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <YouTube videoId='dQw4w9WgXcQ'></YouTube>
            <YMaps>
                <Map defaultState={defaultState}>
                    <Placemark geometry={[55.684758, 37.738521]} />
                </Map>
            </YMaps>
        </>
    );
};


export default Author;