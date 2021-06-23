import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Books from './Books';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.auth0.user.name,
      userEmail: this.props.auth0.user.email,
      userPicture: this.props.auth0.user.picture,
      serverUrl: process.env.REACT_APP_SERVER_URL,
      booksData: [],
      bookName: '',
      bookDescription: '',
      bookStatus: '',
      showUpdateForm: false,
      bookNameUpdate: '',
      bookDescriptionUpdate: '',
      bookStatusUpdate: '',
      bookIndex: 0,
    };
  }

  updateBookName = (bookName) => this.setState({ bookName });
  updateBookDescription = (bookDescription) =>
    this.setState({ bookDescription });
  updateBookStatus = (bookStatus) => this.setState({ bookStatus });

  // updateBookNameUpdateForm = (bookName) =>
  //   this.setState({ bookNameUpdate: bookName });
  // updateBookDescriptionUpdateForm = (bookDescription) =>
  //   this.setState({ bookDescriptionUpdate: bookDescription });
  // updateBookStatusUpdateForm = (bookStatus) =>
  //   this.setState({ bookStatusUpdate: bookStatus });

  showUpdateForm = (bookObject, idx) =>
    this.setState({
      showUpdateForm: !this.state.showUpdateForm,
      bookNameUpdate: bookObject.name,
      bookIndex: idx,
    });

  creatMyBook = (e) => {
    e.preventDefault();
    const reqBody = {
      name: this.state.bookName,
      email: this.state.userEmail,
      description: this.state.bookDescription,
      status: this.state.bookStatus,

    };
console.log("insde creat myBook");
    axios
      .post(`${this.state.serverUrl}/book`, reqBody)
      .then((response) => {
        console.log(response);
        this.setState({
          booksData: response.data.book,
        });

      })
      .catch((error) => alert(error.message));
  };

  updateMyBook = (e) => {
    e.preventDefault();
    const reqBody = {
      bookName: this.state.bookNameUpdate,
      userEmail: this.state.userEmail,
    };

    axios
      .put(`${this.state.serverUrl}/book/${this.state.bookIndex}`, reqBody)
      .then((response) => {
        this.setState({
          booksData: response.data.book,
        });
      })
      .catch((error) => alert(error.message));
  };

  deleteMyBook = (index) => {
    axios
      .delete(
        `${this.state.serverUrl}/book/${index}?email=${this.state.userEmail}`
      )
      .then((response) => {
        this.setState({
          booksData: response.data.book,
          showUpdateForm: false,
        });
      })
      .catch((error) => alert(error.message));
  };

  componentDidMount = () => {
    axios
      .get(`${this.state.serverUrl}/books?email=${this.state.userEmail}`)
      .then((response) => {
        this.setState({
          booksData: response.data.books,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  render() {
    console.log(this.props.auth0);
    return (
      <div>
        <div className='profile-container'>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src={this.state.userPicture}
              alt={this.state.userName}
            />
            <Card.Body>
              <div>
                <CreateForm
                  updateBookName={this.updateBookName}
                  createMyBook={this.creatMyBook}
                  updateBookDescription={this.updateBookDescription}
                  updateBookStatus={this.updateBookStatus}
                />
              </div>
              {this.state.showUpdateForm && (
                <div>
                  <UpdateForm
                    updateMyBook={this.updateMyBook}
                    updateBookNameUpdateForm={this.updateBookNameUpdateForm}
                    bookNameUpdate={this.state.bookNameUpdate}
                    updateBookDescriptionUpdateForm={
                      this.updateBookDescriptionUpdateForm
                    }
                    updateBookStatusUpdateForm={this.updateBookStatusUpdateForm}
                  />
                </div>
              )}
              <Card.Title>
                <h2>{this.state.userName}</h2>
              </Card.Title>
              <Card.Text>
                <p>{this.state.userEmail}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {this.state.booksData.length > 0 && (
          <Books
            books={this.state.booksData}
            deleteMyBook={this.deleteMyBook}
            showUpdateForm={this.showUpdateForm}
          />
        )}
      </div>
    );
  }
}

export default withAuth0(Profile);
