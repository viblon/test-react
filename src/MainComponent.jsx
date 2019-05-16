import React from "react";
import { shuffle } from "lodash";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export class Main extends React.Component {

    state = {array: [1,2,3,4,5,6,7,8,9]};

    shuffle = () => this.setState({array: this.state.array});

    render() {
        console.log("render");
        return (
            <div style={{}}>
                {this.state.array.map(el => (
                    <button onClick={() => alert('My number is ' + el)}>{el}</button>
                ))}
                <button style={{width: 200, display: 'block', position: 'center'}} onClick={this.shuffle}>
                    SHUFFLE
                </button>
            </div>
        );
    }
}
