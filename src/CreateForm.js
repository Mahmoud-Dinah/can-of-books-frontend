  
import React, { Component } from 'react'

export class CreateForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.createMyBook(e)}>
                <label>Book Name</label>
                <input onChange={(e) => this.props.updateBookName(e.target.value)}></input>
                <input type='submit' value="create book" />
            </form>

        )
    }
}

export default CreateForm