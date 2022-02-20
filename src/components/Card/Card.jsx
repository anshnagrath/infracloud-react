import React, { Component } from 'react';
import './Card.css';
class Card extends Component {

    state = {

        hideMe: false,

    }
    timerId = ''

    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className="card mt-40 col-sm-4 col-sm-4">

                <div className="card-body">
                    <h5 className="card-title overflow">{this.props.title}</h5>
                    <p className="card-text overflow">{this.props.body}</p>

                </div>
            </div>
        )
    }





}

export default Card;


