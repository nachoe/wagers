import React, { Component } from 'react';
import BetForm from './bet_form'

class NewComp extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h3>New Bet!</h3>
                    <BetForm/>
                </div>
            </div>

        );
    }
}
export default NewComp;