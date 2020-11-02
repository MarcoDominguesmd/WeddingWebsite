import React from 'react'
import venueimg from '../items/venuepic.jpg'

const Info = () =>{
    return(
        <div>
            <h3 className="subtitles big">Saturday, 19<sup>th</sup> June 2021</h3>
            <h4 className="subtitles">Order of the day</h4>
            <p>15:00: Guests arrival</p>
            <p>16:00: Wedding Ceremony</p>
            <p>17:00: Drinks and group photos</p>
            <p>18:30: Dinner</p>
            <p>21:00: First Dance</p>   
            <p>22:30: Wedding Cake</p>
            <p id="infosub">We are going to celebrate in the beautiful Sorg-villa at Leányfalu, Hungary.</p>
            <p id="infoloc">Hungary, 2016 Leányfalu, Móricz Zsigmond út 115-117.</p>
            <a href="https://amberbride.hu/">amberbride.hu</a>
            <img src={venueimg} alt="" id='venueimg'/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7816.7517628200885!2d19.090825313734566!3d47.70454290572185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x656a2daea63cda58!2sSorg-villa!5e0!3m2!1sen!2suk!4v1602956647779!5m2!1sen!2suk" 
                    width="600" 
                    height="450" 
                    frameBorder="0" 
                    allowFullScreen="" 
                    aria-hidden="false" 
                    tabIndex="0" 
                    title="gmaps"
                    id="maps"
            ></iframe>
        </div>
    )
}

export default Info