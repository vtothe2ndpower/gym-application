import React, { Component } from 'react';
import Workout from './components/Workout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { 
          name: "Chest/Arms", 
          exercises: [
            "A. Speed Barbell Bench Press ", 
            "B. Hammer Strength Incline Press", 
            "C. Guillotine Press", 
            "D. Wide Machine Press",
            "E. Cable Flyes (High -> Low) & (Low -> High)",
            "F. Tricep Push-Down/Cable Curl",
            "G. DB Overhead Tri Ext/Seated Incline DB Curl",
            "H. Hammer Curl",
            "I. Machine Tri Ext"
          ],
          numbers: [
            { reps: 5, sets: 5 },
            { reps: "6-10", sets: 4 },
            { reps: 5, sets: 2 },
            { reps: 5, sets: 3 },
            { reps: 5, sets: 3 },
            { reps: 5, sets: 3 },
            { reps: 5, sets: 5 },
          ]
        },
        { 
          name: "Back/Delts",
          exercises: [
            "Lat Pulldowns/Machine Press - SS", 
            "Neutral Grip Pulldowns/Arnold Presses - SS", 
            "High Rows", 
            "Barbell Rows",
            "Dumbell Rows",
            "Lateral Raises"
          ] 
       },
       { 
        name: "Back/Delts",
        exercises: [
          "Lat Pulldowns/Machine Press - SS", 
          "Neutral Grip Pulldowns/Arnold Presses - SS", 
          "High Rows", 
          "Barbell Rows",
          "Dumbell Rows",
          "Lateral Raises"
        ] 
     },
     { 
      name: "Back/Delts",
      exercises: [
        "Lat Pulldowns/Machine Press - SS", 
        "Neutral Grip Pulldowns/Arnold Presses - SS", 
        "High Rows", 
        "Barbell Rows",
        "Dumbell Rows",
        "Lateral Raises"
      ] 
   },
   { 
    name: "Back/Delts",
    exercises: [
      "Lat Pulldowns/Machine Press - SS", 
      "Neutral Grip Pulldowns/Arnold Presses - SS", 
      "High Rows", 
      "Barbell Rows",
      "Dumbell Rows",
      "Lateral Raises"
    ] 
 },
 { 
  name: "Back/Delts",
  exercises: [
    "Lat Pulldowns/Machine Press - SS", 
    "Neutral Grip Pulldowns/Arnold Presses - SS", 
    "High Rows", 
    "Barbell Rows",
    "Dumbell Rows",
    "Lateral Raises"
  ] 
}
      
      ],
      repScheme: ["5x5", "3x10", "4x8"]
    };
  }

  render() {
    let { data, repScheme } = this.state;
    return(
      <div>
        <div className="App">
          <h1>Gym Application</h1>

          <p>What Rep Scheme Is It Today?</p>
          <select name="" id="">
            {repScheme.map(scheme => {
              return <option value={scheme}>{scheme}</option>
            })}
          </select>
        </div>

        {data.map(workout => {
          return <Workout data={workout} />
        })}

        <textarea placeholder="Any Other Notes" name="" id="" cols="30" rows="10"></textarea>

      </div>
    );
  }
}

export default App;

// { name: "Delts/Arms" },
// { name: "Chest/Back"},
// { name: "Quads/Adductors A"},
// { name: "Hams/Calves A"},
// { name: "Quads/Adductors B"},
// { name: "Hams/Calves B"}
