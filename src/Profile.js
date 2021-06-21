import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Books from './Books';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.auth0.user.name,
      userEmail: this.props.auth0.user.email,
      userPicture: this.props.auth0.user.picture,
      serverUrl: process.env.REACT_APP_SERVER_URL,
      booksData: [],
    };
  }
  componentDidMount = () => {
    axios
      .get(`${this.state.serverUrl}/books?email=${this.state.userEmail}`)
      .then((response) => {
        this.setState({
          booksData: response.data[0].books,
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
        <h2>{this.state.userName}</h2>
        <p>{this.state.userEmail}</p>
        <img src={this.state.userPicture} alt={this.state.userName} />
        {this.state.booksData.length > 0 && (
          <Books books={this.state.booksData} />
        )}
      </div>
    );
  }
}

export default withAuth0(Profile);
