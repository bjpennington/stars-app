import React, {Component} from 'react';

class Star extends Component {
    constructor(props) {
        super(props);

        this.state = {
            star : {
                name : 'Felicia Day',
                role : 'The Guild',
                popularity : ''
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
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" onChange={this.handleChangeFor('name')} />
                    <input type="text" placeholder="Role" onChange={this.handleChangeFor('role')} />
                    <input type="number" placeholder="Popularity Rating" onChange={this.handleChangeFor('popularity')} />
                    <input type="submit" />
                </form>
                <p>{this.state.star.name} is famous for {this.state.star.role}.</p>
                <p>Popularity Rating: {this.state.star.popularity}</p>
            </div>
        )
    }

}

export default Star;