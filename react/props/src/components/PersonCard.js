import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        };
    }

    birthday = () => {
        let newAge = this.state.age + 1;
        this.setState({age: newAge});
    }

    render() {
        return(
            <div>
                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.birthday}>Birthday button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }  
}

export default PersonCard;