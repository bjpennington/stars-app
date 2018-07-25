import React, {Component} from 'react';

class Star extends Component {
    constructor(props) {
        super(props);

        this.state = {
            star : {
                name : 'Felicia Day',
                role : 'The Guild',
                popularity : 70
            }
         }
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            star : {
                ...this.state.star,
                [propertyName] : event.target.value
            }
        })
    }

    // handleNameChange = (event) => {
    //     this.setState({
    //         star : {
    //             ...this.state.star,
    //             name : event.target.value
    //         }
    //     })
    // }

    // handleRoleChange = (event) => {
    //     this.setState({
    //         star : {
    //             ...this.state.star,
    //             role : event.target.value
    //         }
    //     })
    // }

    handleSubmit = (event) => {
        console.log(this.state.star);
        event.preventDefault();

        this.setState({
            star : {
                name : '',
                role : '',
                popularity : ''
            }
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.star.name} type="text" placeholder="Name" onChange={this.handleChangeFor('name')} />
                    <input value={this.state.star.role} type="text" placeholder="Role" onChange={this.handleChangeFor('role')} />
                    <input value={this.state.star.popularity} type="number" placeholder="Popularity Rating" onChange={this.handleChangeFor('popularity')} />
                    <input type="submit" />
                </form>
                <p>{this.state.star.name} is famous for {this.state.star.role}.</p>
                <p>{this.state.star.name}'s popularity rating is {this.state.star.popularity}</p>
            </div>
        )
    }

}

export default Star;