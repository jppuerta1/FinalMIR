import React, {useState, useEffect} from 'react'
import { SignUpView } from './SignUpView';
import axios from 'axios'
import { Validation } from '../../Utils/Validation';

export const SignUpContainer = () => {
    const intialValues = { email: "", password: "", password2: "" };
    const [formValues, setFormValues] = useState(intialValues);
    const [errors, setErrors] = useState( { } )
   

    const submitForm =()=>{
        console.log(formValues)
        axios.post('http://localhost:3001/signup',
        {
            email: formValues.email,
            password: formValues.password
        })
        .then((response) => {
            console.log(response.data.token)
            localStorage.setItem('token', response.data.token)
        })
    }
    
    const handleOnChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues,[name]: value})
    }
    
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setErrors(Validation(formValues))
        if (Object.keys(errors).length === 0) {
            console.log(errors)
            submitForm()
        }
    }
    useEffect(() => {

    }, [])
    if (!errors) return <h1>Loading</h1>
    
    return (
        <SignUpView
        email={formValues.email} 
        password = {formValues.password}
        password2= {formValues.password2}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        errors = {errors}
        />
    )
    }