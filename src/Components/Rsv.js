import React, {useState} from 'react';
import firebase from '../firebase/config'

const Rsv = () =>{
    const [values, setValues] = useState({
        fname: '',
        lname: '',
        email: '',
        attendance: '',
        plusone: '',
        message: ''
    })
    const [successmsg, setSuccessmsg] = useState('successMessage hide');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const submitForm = (e) =>{
        e.preventDefault();
        if(values.lname.trim() !== "" && values.fname.trim() !== ""  && values.email.trim() !== "" && values.attendance.trim() !== ""){
            setSuccessmsg('successMessage') 
            firebase
                .firestore()
                .collection('guests')
                .add({
                    ...values,
                    timeStamp: new Date()
                })
        }
        else{
            alert("Missing information, please fill first, last name, email, and attendance.")
        }
        
    };

    const closeForm = (e) =>{
        e.preventDefault();
        setSuccessmsg('successMessage hide');
        setValues({
            fname: '',
            lname: '',
            email: '',
            attendance:'',
            plusone:'',
            message:''
        })
    };
    
    return(
        <div>
            <p id="welcome-website">We are so excited to celebrate with you!</p>
            <p id='formp'>PLEASE KINDLY RESPOND BY 23<sup>RD</sup> APRIL 2021</p>
            <form id='rsvform' onSubmit={submitForm}>
                <label htmlFor="email">Email:</label>
                <br/>
                <input 
                    type="email" 
                    name='email' 
                    id='email' 
                    className='formfield'
                    placeholder='example@email.com'
                    value={values.email}
                    onChange={handleChange}   
                />
                <br/>
                <label htmlFor="fname">Name:</label><br/>
                <input 
                    type="text" 
                    name='fname' 
                    id='fname'
                    placeholder='First Name' 
                    className='formfield formname' 
                    value={values.fname}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name='lname' 
                    className='formfield formname' 
                    id='lname'
                    placeholder='Last Name'
                    value={values.lname}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="attendance">Are you attending?</label><br/>
                <input 
                    type="text" 
                    name='attendance' 
                    id='attendance' 
                    className='formfield'
                    placeholder="Say yes. :)"
                    value={values.attendance}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="plusone">Who is coming with you?</label><br/>
                <textarea 
                    type="text" 
                    name='plusone' 
                    id='plusone' 
                    className='formfield' 
                    placeholder="Girlfriend, boyfriend, wife, husband, children, cats etc?"
                    value={values.plusone}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="message">Message</label><br/>
                <textarea 
                    type="text" 
                    id='message' 
                    name='message' 
                    className='formfield' 
                    placeholder="Song requests, vegetarian option needed, any allergies, anything that you would like to mention or ask. :)"
                    value={values.message}
                    onChange={handleChange}
                />
                <br/>
                <button id='formbtn' type='submit' >Submit</button>
            </form>
            <div className={successmsg}>
                <h3>Thank you {values.fname}!</h3>
                <p>We will get back to you shortly confirming you the details</p>
                <button id='rsvbtn' onClick={closeForm}>Close</button>
            </div>
        </div>
    )
};



export default Rsv;