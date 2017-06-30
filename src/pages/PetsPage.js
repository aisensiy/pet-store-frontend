import React from 'react';
import {Col, Row} from 'antd';
import Pets from '../containers/Pets';

class PetsPage extends React.Component {
  render() {
    return (
        <Row gutter={16} type="flex" align="top" style={{marginTop: '30px', backgroundColor: 'white'}}>
          <Col span={18} offset={3}>
            <Pets style={{backgroundColor: 'white'}}/>
          </Col>
        </Row>
    );
  }
}

export default PetsPage;
