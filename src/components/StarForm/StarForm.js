import React, {Component} from 'react';

class StarForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input value={this.props.newStar.name} type="text" placeholder="Name" onChange={this.props.handleChangeFor('name')} />
                <input value={this.props.newStar.role} type="text" placeholder="Role" onChange={this.props.handleChangeFor('role')} />
                <input value={this.props.newStar.popularity} type="number" placeholder="Popularity Rating" onChange={this.props.handleChangeFor('popularity')} />
                <input type="submit" />
            </form> 
        )
    }
}

export default StarForm;