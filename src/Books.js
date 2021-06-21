import React from 'react';

class Books extends React.Component {
  render() {
    return (
      <>
        <h2>My Favorite Books</h2>
        {this.props.books.length &&
          this.props.books.map((book, idx) => (
            <div key={idx}>
              {book.name}
              {book.description}
              {book.status}
            </div>
          ))}
      </>
    );
  }
}

export default Books;
