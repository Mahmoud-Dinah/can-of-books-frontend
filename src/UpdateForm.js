import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        {/* <form onSubmit={(e) => this.props.updateMyBook(e)}>
          <label>Update Book Name</label>
          <input
            value={this.props.bookNameUpdate}
            onChange={(e) =>
              this.props.updateBookNameUpdateForm(e.target.value)
            }
          ></input>
          <input type='submit' value='update book' />
        </form> */}
        <Form onSubmit={(e) => this.props.updateMyBook(e)}>
          <Form.Group>
            <Form.Label>Book name</Form.Label>
            <Form.Control
              onChange={(e) => this.props.bookNameUpdate(e)}
              type='text'
              value={this.props.updateBookNameUpdateForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => this.props.bookDescriptionUpdate(e)}
              type='text'
              value={this.props.updateBookDescriptionUpdateForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control
              onChange={(e) => this.props.bookStatusUpdate(e)}
              type='text'
              value={this.props.updateBookStatusUpdateForm}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

export default UpdateForm;
