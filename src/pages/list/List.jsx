import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import './list.css';

export const List = () => {
    const {data, loading } = useFetch(`https://nameless-waters-45397.herokuapp.com/lessons`);

    return (
        <div>
            <div id='banner'>
                <h2 className='mainTitle' >About</h2>
                <div className='mainBanner'>
                    <div className='bannerDescription'>
                        <p className='bannerContent' >Looking for a class in Yoga? body balance? Tai-chi? Pilates? With over 400 registered teachers on our platform, you can find any class you like!</p>
                        <p className='bannerContent'>
                            Make sure you register with us before checking out our lessons.  Below you will be able to find all online lessons available to you worldwide!
                            If you would like to apply to be a teacher and organize your own classes, please register and send an email to: ...
                        </p>
                    </div>
                    <img alt='ladies doing yoga banner' className='bannerImg' src='https://media.self.com/photos/587e8bc713e257b344659432/master/w_960,c_limit/sky-ting-yoga-downward-dog-pose.jpg'/>
                </div>
            </div>
            <div className='mainTitleContainer'>
                <h2 className='mainTitle'>Upcoming Lessons</h2>
            </div>
            {loading ? (
                'Loading, please wait.'
                ) : (
                <div className='lessonList'>
                    {data.map(lesson => {
                        return <div key={lesson._id} className='listContainer' >
                            <div >
                                <img alt='default placehodler of group stretching' className='lessonImg' src='https://i0.wp.com/www.yogabasics.com/yogabasics2017/wp-content/uploads/2014/12/gentle-yoga-class.jpeg?w=1080&ssl=1'></img>
                            </div>
                            <Link className='lessonTitle' to={`/lessons/${lesson._id}`} >
                                {lesson.title}
                            </Link>
                            <div className='lessonContent'>
                                <div className='contentBlock'>
                                    <p className='lessonText'>Date: </p> 
                                    <p>{lesson.date.slice(0,10)}</p>
                                </div>
                                <div className='contentBlock'>
                                    <p className='lessonText'>Teacher: </p> 
                                    <p>{lesson.creator}</p>
                                </div>
                                <div className='contentBlock'>
                                    <p className='lessonText'>Paticipants: </p> 
                                    {lesson.participants.map(el => {
                                        return <p key={el} >{el}</p>
                                    })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                )}
        </div>
    )
};
