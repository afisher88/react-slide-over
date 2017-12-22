import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Favourites from './Favourites';
import { selectRandomAnimal } from '../actions/animalList.actions';
import '../scss/styles.scss';

class AnimalList extends React.Component {

    constructor(props) {
        super(props);

        this.getRandomId = this.getRandomId.bind(this);
        this.selectRandomAnimal = this.selectRandomAnimal.bind(this);
    }

    getRandomId(firstId, lastId) {
        let min = Math.ceil(firstId);
        let max = Math.ceil(lastId);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    selectRandomAnimal() {
        const { dispatch } = this.props;

        dispatch(selectRandomAnimal({
            id: this.getRandomId(0, 10)
        }));
    }

    render() {
        const { animalList } = this.props;

        console.log(animalList.randomAnimal || null);

        return(
            <section>
                <Favourites />
                <button type="button" onClick={this.selectRandomAnimal}>Console log a random animal!</button>
                <div>{`Hello, you have a list of ${this.props.animalList.length} Animals!`}</div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        animalList: state.animalList
    }
}

export default connect(mapStateToProps)(AnimalList);
