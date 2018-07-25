import React, {Component} from 'react';
import StarForm from '../StarForm/StarForm';
import StarDetails from '../StarDetails/StarDetails';
import StarList from '../StarList/StarList';
import './Star.css';

class Star extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allStars : [

            ],
            newStar : {
                name : '',
                role : '',
                popularity : ''
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


        return (
            <div className="starsBody">
                <StarForm
                    newStar={this.state.newStar}
                    handleChangeFor={this.handleChangeFor}
                    handleSubmit={this.handleSubmit}
                 />
                <StarDetails star={this.state.newStar} />
                <StarList allStars={this.state.allStars} />
            </div>
        )
    }

}

export default Star;