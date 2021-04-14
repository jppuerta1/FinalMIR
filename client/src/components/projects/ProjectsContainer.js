import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import { ProjectsView } from './ProjectsView'

export const ProjectsContainer = () => {
  const [projects, setProjects] = useState()

    const token = localStorage.getItem('token')

    useEffect(() => {
    axios.get('http://localhost:3001/projects',
    {headers: {
        'Authorization': token
      }})
      .then((res) => {
        console.log(res.data)
        setProjects(res.data)
        
      })
    },[] )

    if (!projects) return <h1>Loading</h1>
   
    return (
    <div className='container'>
    <div className='row'>
      {projects.map(project => (
        <div className='col-md-4' key={project.id}>
          <ProjectsView title={project.projectTitle} description={project.projectDescription} />
        </div>))}
    </div>
    </div>
    )
}

/*<div className='container'>
<div className='row'>
  {projects.map(project => (
    <div className='col-md-4' key={project.id}>
      <ProjectsView title={project.projectTitle} description={project.projectDescription} />
    </div>))}
</div>
</div>*/