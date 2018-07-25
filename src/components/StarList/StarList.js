import React, {Component} from 'react';
import './StarList.css'

class StarList extends Component {
    render() {
        let starList = this.props.allStars.map((star, index) => {
            return <li key={index}>{star.name}, {star.role}, {star.popularity}</li>
        })

        return(
            <div>
                <p className="listTitle">The Stars:</p>
                <ul>
                    {starList}
                </ul>
            </div>
        )
    }
}

export default StarList;