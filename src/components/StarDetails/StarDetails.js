import React, {Component} from 'react';
import './StarDetails.css';

class StarDetails extends Component {
    render() {
        return (
            <div className="starDetails">
                <p>{this.props.star.name} is famous for {this.props.star.role}.</p>
                <p>{this.props.star.name}'s popularity rating is {this.props.star.popularity}</p>
            </div>
        )
    }
}

export default StarDetails;