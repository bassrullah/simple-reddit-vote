import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button,} from 'reactstrap'

export default class AddPost extends Component {
  render() {
    return (
      <Container className="py-5">
        <Form>
          <FormGroup className="d-flex align-items-center ">
            <Input
              placeholder="Type your topic here.."
              name="title"
              maxLength="255"
            />
            <Button className="ml-3 nowrap" color="primary" type="submit">Add Topic</Button>
          </FormGroup>
        </Form>
        <hr/>
      </Container>
    )
  }
}
