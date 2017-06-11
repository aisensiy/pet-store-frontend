import React from 'react';
import Registration from '../containers/Registration';
import { Layout, Col, Row } from 'antd';


class RegistrationPage extends React.Component {
  render() {
    return (
        <Layout>
          <Row>
            <Col span={10} offset={7} style={{padding: "50px 50px 25px 50px", marginTop: "24px", backgroundColor: "white"}}>
              <Registration/>
            </Col>
          </Row>
        </Layout>
    );
  }
}

export default RegistrationPage;
