import React from 'react'
import {Form, Button} from 'react-bootstrap'

export const LoginView = ({email, password, errors ,handleOnSubmit, handleOnChange, handleOnBlur}) => {
    return (
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={handleOnChange} onBlur={handleOnBlur}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={handleOnChange} onBlur={handleOnBlur} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleOnSubmit}>
    Submit
  </Button>
</Form>
    )
}
//{errors.email && <p className="alert alert-danger">{errors.email}</p>}
//{errors.password && <p className="alert alert-danger">{errors.password}</p>}