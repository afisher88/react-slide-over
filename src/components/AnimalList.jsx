import React from 'react';
import Favourites from './Favourites.jsx';
import '../scss/styles.scss';

export default class AnimalList extends React.Component {
    render() {
        return(
            <section>
                <Favourites />
                <div>{`Hello, you have a list of ${this.props.animals.length} Animals!`}</div>
            </section>
        )
    }
}