import React from 'react'
import {Card} from 'react-bootstrap'

export const ProjectsView = ({title, description}) => {
    return (
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{title}</Card.Title>

    <Card.Text>{description}</Card.Text>
  </Card.Body>
</Card>

    )
}
