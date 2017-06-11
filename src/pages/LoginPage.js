import React from 'react';
import Login from '../containers/Login';
import { Layout, Col, Row } from 'antd';


class LoginPage extends React.Component {
  render() {
    return (
        <Layout>
          <Row>
            <Col span={10} offset={7} style={{padding: "50px 50px 25px 50px", marginTop: "24px", backgroundColor: "white"}}>
              <Login/>
            </Col>
          </Row>
        </Layout>
    );
  }
}

export default LoginPage;
