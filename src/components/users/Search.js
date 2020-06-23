import React, { Component } from 'react'

class Search extends Component {

    state = {
        text: ''
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.searchUsers(this.state.text)
        this.setState({ text: ""});
    }


    render() {
        return (
            <div>
            <form className="form" onSubmit={this.onSubmit}> 
                <input type="text" value={this.state.text} onChange={this.onChange} name="text" placeholder="Search Users..."/>
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form> 
            </div>
        )
    }
}

export default Search;