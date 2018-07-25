import React, {Component} from 'react';

class Star extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allStars : [

            ],
            newStar : {
                name : 'Felicia Day',
                role : 'The Guild',
                popularity : 70
            }
         }
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            newStar : {
                ...this.state.newStar,
                [propertyName] : event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        this.setState({
            allStars : [
                ...this.state.allStars,
                this.state.newStar
            ],
            newStar : {
                name : '',
                role : '',
                popularity : ''
            }
        })
    }


    render() {

        let starList = this.state.allStars.map((star, index) => {
            return <li key={index}>{star.name}, {star.role}, {star.popularity}</li>
        })

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.newStar.name} type="text" placeholder="Name" onChange={this.handleChangeFor('name')} />
                    <input value={this.state.newStar.role} type="text" placeholder="Role" onChange={this.handleChangeFor('role')} />
                    <input value={this.state.newStar.popularity} type="number" placeholder="Popularity Rating" onChange={this.handleChangeFor('popularity')} />
                    <input type="submit" />
                </form>
                <p>{this.state.newStar.name} is famous for {this.state.newStar.role}.</p>
                <p>{this.state.newStar.name}'s popularity rating is {this.state.newStar.popularity}</p>
                <p>The Stars:</p>
                <ul>
                    {starList}
                </ul>
            </div>
        )
    }

}

export default Star;