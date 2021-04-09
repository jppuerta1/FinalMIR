import React from 'react'
import {Form, Button} from 'react-bootstrap'

export const CreateProjectView = ({title, description, handleOnChange, handleOnSubmit}) => {
    return (
<Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Project title</Form.Label>
    <Form.Control type="text" placeholder="Project title" name='title' value={title} onChange={handleOnChange}/>
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="textarea" placeholder="Description" name='description' value={description} onChange={handleOnChange} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleOnSubmit}>
    Submit
  </Button>
</Form>
      
    )
}
