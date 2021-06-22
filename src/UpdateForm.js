import React, { Component } from 'react'

export class UpdateForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.updateMyBook(e)}>
                <label>Update Book Name</label>
                <input value={this.props.bookNameUpdate} onChange={(e) => this.props.updateBookNameUpdateForm(e.target.value)}></input>
                <input type="submit" value="update book" />
            </form>
        )
    }
}

export default UpdateForm