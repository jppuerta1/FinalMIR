import React, {useState} from 'react'
import { SignUpView } from './SignUpView';
import axios from 'axios'

export const SignUpContainer = () => {
    const intialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(intialValues);
   

    const submitForm =()=>{
        console.log(formValues)
        axios.post('http://localhost:3001/signup',
        {
            email: formValues.email,
            password: formValues.password
        })
        .then((response) => {
            console.log(response.data.token)
            localStorage.setItem('token',response.data.token)
        })
    }
    
    const handleOnChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues,[name]: value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        submitForm()

    }
    return (
        <SignUpView
        email={formValues.email} 
        password = {formValues.password}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        />
    )
}
