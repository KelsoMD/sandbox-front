import React from 'react';
import './paper.css'

export class NavBar extends React.Component {

    render() {
        return (
            <div className="paper-menu border border-primary">
                <ul className="inline">
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Github</a></li>
                </ul>
            </div>
        );
    }
}