import React from "react";
import { connect } from "react-redux";
// import styled from 'styled-components';
// import Loader from 'react-loader-spinner';
import { CharacterList } from "../components";
import { getStarWars } from '../actions';
// import actions

class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    // call our action
    console.log("======", this.props.getStarWars)
    this.props.getStarWars();
  }

  render() {
    if (this.props.fetching) {
      console.log('Loading....')
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isLoading: state.charsReducer.isLoading,
    error: state.charsReducer.error
  }
}
export default connect(
   mapStateToProps,
  {getStarWars}
)(CharacterListView);
