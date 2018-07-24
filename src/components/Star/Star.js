import React, {Component} from 'react';

class Star extends Component {
    constructor(props) {
        super(props);

        this.state = {
            star : {
                name : 'Felicia Day',
                role : 'The Guild'
            }
         }
    }

    handleNameChange = (event) => {
        this.setState({
            star : {
                ...this.state.star,
                name : event.target.value
            }
        })
    }

    handleRoleChange = (event) => {
        this.setState({
            star : {
                ...this.state.star,
                role : event.target.value
            }
        })
    }

    handleClick = () => {
        console.log(this.state.star);
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="Name" onChange={this.handleNameChange} />
                <input type="text" placeholder="Role" onChange={this.handleRoleChange} />
                <button onClick={this.handleClick}>Submit</button>
                <p>{this.state.star.name} is famous for {this.state.star.role}.</p>
            </div>
        )
    }

}

export default Star;