import React from 'react';
import Pet from '../containers/Pet';

class PetPage extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'white'}}>
        <Pet />
      </div>
    );
  }
}

export default PetPage;
