import React from 'react'
import picStory from '../items/picStory.jpg';

const Story = () =>{
    return(
        <div id='storydiv'>
            <img id="picStory" src={picStory} alt="This couldn't be displayed"/>
            <p id="welcome-website">Our Story</p>
            <p className="pstory">Our love story began in London, back in 2016 when we were both working in a hotel. Even though
                                mismatched schedules and different departments (Marco, sometimes worked night shifts at the
                                reception and Monika, opening the restaurant, worked mornings) tried to keep us apart, after a few
                                weeks of dating we became pretty much inseparable.
            </p>
            <p className="pstory">We love to travel and explore cities together, have homemade pizza on Saturday nights and watch
                                Netflix. We share the love for our families in Portugal and in Hungary. And we are both stubborn but
                                love each other to the moon and back. 
            </p>
            <p className="pstory">On a sunny day in May 2018 during our holiday Marco proposed in a beautiful small town called Éze
                                in France. Monika said yes, and a very detailed, super organised wedding planning had began. Even
                                though we really wanted to celebrate in 2020 unfortunately ‘the positions of the stars’ were not right,
                                so we have decided to postpone our wedding day to 2021.
            </p>
            <p className="pstory">The rest is history.</p>
            <p className="pstory">So here we are again and we are so looking forward to starting this new chapter, and can’t wait to
                                celebrate with all of our favourite people.
            </p>
        </div>
    )
}

export default Story