import React from 'react';
import PetItem from '../components/PetItem';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { loadPets } from '../actions/pets';

class Pets extends React.Component {
  componentDidMount() {
    this.props.loadPets();
  }

  render() {
    let { pets } = this.props;
    return (
        <div>
          <Row gutter={16}>
            {pets.map(pet => {
              return <Col span={6} style={{margin: "2em 0"}} key={pet.id}><PetItem pet={pet} /></Col>
            })}
          </Row>
        </div>
    );
  }
}

const mapStateToProps = ({pets}) => ({
  pets: pets
});

export default connect(mapStateToProps, { loadPets })(Pets);
