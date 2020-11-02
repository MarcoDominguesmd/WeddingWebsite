import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from "../firebase/config"


export default function Login() {
    const history = useHistory()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const submitForm = (e) =>{
        e.preventDefault();
        try {
            auth.signInWithEmailAndPassword(values.email, values.password).then(()=>{
                history.push("/guestlist");
            })
        } 
        catch {
            alert("Failed to log out");
        }
        
        
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    return (
        <div>
            <form action="" id='rsvform' onSubmit={submitForm}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label><br/>
                <input 
                    type="email" 
                    className="formfield"
                    name='email'
                    value={values.email}
                    onChange={handleChange}  
                />
                <br/>
                <label htmlFor="password">Password</label><br/>
                <input 
                    type="password" 
                    className="formfield"
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                />
                <br/>
                <button id='formbtn' type="submit">Submit</button>
            </form>
        </div>
    )
}
