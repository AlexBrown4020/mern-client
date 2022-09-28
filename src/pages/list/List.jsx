import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import './list.css';

export const List = () => {
    const {data, loading } = useFetch(`https://nameless-waters-45397.herokuapp.com/lessons`);

    return (
        <div>
            <div className='mainBanner'>
                <div className='bannerDescription'>
                    <h2 className='bannerTitle' >Welcome to Life in Balance!</h2>
                    <p className='bannerContent' >Looking for a class in Yoga? body balance? Tai-chi? Pilates? With over 400 registered teachers on our platform, you can find any class you like!</p>
                    <p className='bannerContent'>Have a look at our list of classes below, join up, and look out for the session details in your email</p>
                    <p>Dev Note: Data may not be shown and login information unusuable due to a separate backend API hosted with Heroku.  Try loading up the server on the following URL to have access to the database:</p>
                    <a href='https://nameless-waters-45397.herokuapp.com/'>Heroku API</a>
                    <p>Once data is accessible, you can create your own account, but non-admin users cannot access the create lesson page.</p>
                </div>
                <img alt='ladies doing yoga banner' className='bannerImg' src='https://media.self.com/photos/587e8bc713e257b344659432/master/w_960,c_limit/sky-ting-yoga-downward-dog-pose.jpg'/>
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
