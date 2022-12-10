import React from 'react';
import { useLocation } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import s from './Author.module.scss';
import 'react-vertical-timeline-component/style.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import YouTube from 'react-youtube';
import color from '../../../../styles/_colors.scss';
import { Carousel } from 'react-responsive-carousel';

const GALLERY_LABEL = 'Галерея';

const Author = () => {
    const man = useLocation().state;

    const defaultState = {
        center: [53.9, 27.5667],
        zoom: 7,
        controls: ['zoomControl'],
    };

    const yandexModules = ['control.ZoomControl', 'geoObject.addon.balloon'];

    return (
        <>
            <div className={s.Container}>
                <div className={s.Container_author_name}>
                    <h2>{man.author.firstName} {man.author.surname}</h2>
                </div>
                <div className={s.Container_years_of_life}>
                    <h3>{man.author.birthDate}-{man.author.deadDate}</h3>
                </div>
                <div className={s.Container_author_pic}>
                    <img src={man.pic} alt={man.author.surname}/>
                </div>
                <VerticalTimeline
                    lineColor={color.brown}
                >
                    {man.author.timeline.map(person => (
                        <VerticalTimelineElement
                            key={person.id}
                            date={person.period}
                            iconStyle={{
                                background: 'white',
                                'box-shadow': color.shadowBrown,
                                border: `1px solid ${color.brown}`
                            }}
                        >
                            <p>{person.bio}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
                <div>
                    <h2>{GALLERY_LABEL}</h2>
                </div>
                <Carousel width="300px" autoPlay="true">
                    {
                        man.gallery.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`author book ${index}`}
                                />
                            </div>
                        ))
                    }
                </Carousel>
                <YouTube 
                    className={s.Container_youtube} 
                    videoId={man.author.youtube}
                />
                <YMaps>
                    <Map defaultState={defaultState} modules={yandexModules} width="100%">
                        {
                            man.author.timeline.map((person) => (
                                <Placemark
                                    key={person.id}
                                    geometry={person?.location}
                                    options={{ hasBalloon: true }}
                                    properties={{ balloonContent: person?.description }}
                                />
                            ))
                        }
                    </Map>
                </YMaps>
            </div>
        </>
    );
};


export default Author;