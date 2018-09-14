import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AnimalList from './AnimalList';
import * as animalActions from '../actions/animalList.actions';
import '../scss/styles.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.selectRandomAnimal = this.selectRandomAnimal.bind(this);
  }

  getRandomId(firstId, lastId) {
    let min = Math.ceil(firstId);
    let max = Math.ceil(lastId);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  selectRandomAnimal() {
    const { actions } = this.props;

    actions.selectRandomAnimal({
      id: this.getRandomId(1, 10)
    });
  }

  render() {
    const { animalList: { animals, randomAnimal } } = this.props;

    // console.log(animalList.randomAnimal || "Click the button to log an animal!");

    return (
      <section>
        <div>{`Hello, you have a list of ${animals.length} Animals!`}</div>
        <AnimalList items={animals} />
        <button type="button" onClick={this.selectRandomAnimal}>Show a random animal!</button>
        <p>Random animal: {randomAnimal.species}</p>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    animalList: state.animalList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(animalActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
