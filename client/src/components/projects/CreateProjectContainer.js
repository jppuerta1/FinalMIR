import React, {useState} from 'react'
import axios from 'axios'
import { CreateProjectView } from './CreateProjectView'

export const CreateProjectContainer = ({history}) => {
    const token = localStorage.getItem('token')

    const intialValues = { title: "", description: "" };
    const [formValues, setFormValues] = useState(intialValues);   

    const submitForm =()=>{
        console.log(formValues)
        
        axios.post('http://localhost:3001/projects',
        {
            projectTitle: formValues.title,
            projectDescription: formValues.description
        },
        {headers: {
            'Authorization': token
          }}
       
        )
        .then((response) => {
            console.log(response.data)   
            if(response){
                history.replace('/MyProjects')
              }else{history.replace('/projects/create')}                     
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
    <CreateProjectView
    title={formValues.title} 
    description = {formValues.description}
    handleOnChange={handleOnChange}
    handleOnSubmit={handleOnSubmit}
    />
    
    )
}
