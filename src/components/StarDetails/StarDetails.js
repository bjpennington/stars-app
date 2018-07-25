import React, {Component} from 'react';

class StarDetails extends Component {
    render() {
        return (
            <div>
                <p>{this.props.star.name} is famous for {this.props.star.role}.</p>
                <p>{this.props.star.name}'s popularity rating is {this.props.star.popularity}</p>
            </div>
        )
    }
}

export default StarDetails;