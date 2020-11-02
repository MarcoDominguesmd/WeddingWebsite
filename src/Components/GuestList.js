import React, { useState, useEffect } from 'react';
import firebase from '../firebase/config';
import { Link, useHistory  } from 'react-router-dom';
import { auth } from "../firebase/config"


function GetGuests(sortBy = 'fname'){
    const [guests, setGuests] = useState([])

    useEffect(()=>{
        const unsubscribe = 
            firebase
                .firestore()
                .collection('guests')
                .orderBy(sortBy, 'asc')
                .onSnapshot((snapshot)=>{
                    const newGuests = snapshot.docs.map((doc)=>({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setGuests(newGuests)
                })
        return () => unsubscribe()
    },[sortBy])
    return guests
}


const GuestList = () =>{
    const [sortBy, setSortBy] = useState('fname');
    const guests = GetGuests(sortBy);
    const history = useHistory()

    const handleLogout = (e) =>{
        e.preventDefault();
        auth.signOut().then(()=>{
            history.push("/");
        })
    }

    return(
        <div className="guest">
            <button id='rsvbtn'><Link to="/login">Log in</Link></button>
            <button id='rsvbtn' onClick={handleLogout}>Logout</button>
            <div>
                <label>Sort By: </label>{''}
                <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                    <option value='fname'>First Name</option>
                    <option value='lname'>Last Name</option>
                    <option value='timeStamp'>Time Stamp</option>
                    <option value='attendance'>Attendance</option>
                </select>
            </div>
            <div className="table">
                <p>First Name</p>
                <p>Last Name</p>
                <p>Email</p>
                <p>Attendance</p>
                <p>With</p>
                <p>Message</p>
            </div>
            {guests.map((guest)=>
                <div className="table" key={guest.id}>
                    <p>{guest.fname}</p>
                    <p>{guest.lname}</p>
                    <p>{guest.email}</p>
                    <p>{guest.attendance}</p>
                    <p>{guest.plusone}</p>
                    <p>{guest.message}</p>
                </div>
            )}
        </div>
    )
    
}


export default GuestList