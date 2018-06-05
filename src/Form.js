import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            username: ''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    UserName:
                    <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;