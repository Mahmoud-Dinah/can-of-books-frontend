import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class CreateForm extends Component {
  render() {
    return (
      <Form
        onSubmit={(e) => {
          this.props.createMyBook(e);
        }}
      >
        <Form.Group>
          <Form.Label>Book name</Form.Label>
          <Form.Control
            onChange={(e) => this.props.updateBookName(e.target.value)}
            type='text'
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={(e) => this.props.updateBookDescription(e.target.value)}
            type='text'
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Control
            onChange={(e) => this.props.updateBookStatus(e.target.value)}
            type='text'
          />
        </Form.Group>
        <Button variant='primary' type='submit' value='create book'>
          ADD
        </Button>
      </Form>
    );
  }
}

export default CreateForm;
