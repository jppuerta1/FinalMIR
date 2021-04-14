import React from 'react'
import {Form, Button} from 'react-bootstrap'

export const SignUpView = ({email, password, password2, errors ,handleOnSubmit, handleOnChange, handleOnBlur}) => {
    return (
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    {errors.email && <p className="alert alert-danger">{errors.email}</p>}
    <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={handleOnChange} onBlur={handleOnBlur}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    {errors.password && <p className="alert alert-danger">{errors.password}</p>}
    <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={handleOnChange} onBlur={handleOnBlur} />
    <Form.Label>Confirm Password</Form.Label>
    {errors.password2 && <p className="alert alert-danger" >{errors.password2}</p>}
    <Form.Control type="password" placeholder="Confirm Password" name='password2' value={password2} onChange={handleOnChange} onBlur={handleOnBlur} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleOnSubmit}>
    Submit
  </Button>
</Form>
    )
}
