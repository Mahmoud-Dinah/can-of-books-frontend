import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Books extends React.Component {
  render() {
    return (
      <>
        <h2 style={{ textAlign: 'center' }}>My Favorite Books</h2>
        {this.props.books.length &&
          this.props.books.map((book, idx) => (
            <div key={idx} style={{ textAlign: 'center', color: 'pa-primary' }}>
              <ListGroup>
                <ListGroup.Item>{book.name}</ListGroup.Item>
                <ListGroup.Item>{book.description}</ListGroup.Item>
                <ListGroup.Item>{book.status}</ListGroup.Item>
                <br></br>
              </ListGroup>
            </div>
          ))}
      </>
    );
  }
}

export default Books;
