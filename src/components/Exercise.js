import React, { Component } from 'react';

class Exercise extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Exercise;
