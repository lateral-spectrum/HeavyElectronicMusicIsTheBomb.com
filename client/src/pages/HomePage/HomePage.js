import React from 'react';
import './HomePage.css';
import {logo} from '../../logo.svg'

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="HomePage-Main">

                <div className="SpinWords" alt="logo">
                    <h3>HEAVY ELECTRONIC MUSIC IS THE BOMB.COM</h3>
                </div>

            </div>
        );
    }
}
