import React from 'react';
import PetView from '../components/Pet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadPet } from '../actions/pet';
import { addItem } from '../actions/cart';

class Pet extends React.Component {
  componentDidMount() {
    this.props.loadPet(this.props.match.params.pet_id);
  }

  render() {
    return (
      <div>
        <PetView {...this.props} />
      </div>
    );
  }
}

const mapStoreToProps = ({pet}) => {
  return {
    pet
  };
};

const mapDispatchToProps = {
  loadPet,
  addToCard: addItem
};

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Pet));
