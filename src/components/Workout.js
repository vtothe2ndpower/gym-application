import React, { Component } from 'react';
import Exercise from './Exercise';

import './Workout.css';

class Workout extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <h1 className="Workout">{this.props.data.name}</h1>
                <ul>
                    {this.props.data.exercises.map(exercise => {
                        return <Exercise name={exercise} />
                    })}
                </ul>
            </div>
        )
    }
}

export default Workout;