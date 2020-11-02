import React, { useState, useEffect } from 'react';
import image from '../items/homepic.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(()=> {
      // get target date and current date and make it's difference
      var now = new Date().getTime();
      const dateTarget = new Date("Jun 19, 2021 15:00:00").getTime();
      var distance = dateTarget - now;

     // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    }, 1000);
    return()=> clearInterval(timer)
  },[]);
  
  return (
    <div>
      <img id="back-img" src={image} alt="This couldn't be displayed"/>
      <section id='mainSection'>
        <p id="welcome-website">Welcome to our wedding website!</p>
        <div id="leave-pic"></div>
        <p>We’ve created this website as a convenient and interactive way to share all of the important details with you in the lead up to our wedding.</p>
        <p>You can also read more about our love story, get to know our awesome wedding party, and find more information at the Q&A section.</p>
        <p>So have fun, take a look around and don’t forget to RSVP!</p>
        <p>Finally – thank you for your ongoing love and support. We are so excited to share this day with you and look forward to dancing the night away with all of our favourite people!</p>
        <h2 id="locationTag">Leányfalu, Hungary</h2>
        <h3 className="grey-font">SATURDAY, 19<sup>th</sup> JUNE 2021</h3>
        <h3 className="grey-font">{days} DAYS {hours} HRS {minutes} MINS {seconds} SECS</h3>
        <button  id='rsvbtn'><Link to="/rsv">RSVP HERE</Link></button>
      </section>
    </div>
  ); 
}

export default Home;
