import React from 'react';
import './scss/styles.scss';

export default class AnimalList extends React.Component {
    render() {
        return(
            <div>{`Hello, you have a list of ${this.props.animals.length} Animals!`}</div>
        )
    }
}