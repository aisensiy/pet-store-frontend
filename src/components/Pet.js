import React, { PropTypes } from 'react';
import { Icon, Button, Col, Row } from 'antd';
import styled from 'styled-components';

const StyleForPrice = styled.div`
  margin: 0.5em 0;
  color: #ff0036;
  font-size: 1.5em;
  
  span {
    font-size: 1.2em;
    font-weight: bold;
  }
`;

const Price = ({children}) => {
  return <StyleForPrice>¥<span>{children}</span></StyleForPrice>
};

const StyledDiv = styled(Row)`
  position: relative;
  height: 100%;
  .image {
  }
  .image img {
    width: 100%;
  }
  .content {
    min-height: 30em;
    overflow: auto;
  }
  .content h2 {
    font-size: 1.8em;
    color: black;
    margin-bottom: 1em;
  }
`;

class Pet extends React.Component {
  render() {
    let { pet, pet: { name, description, price }, addToCard } = this.props;

    return (
      <StyledDiv gutter={16}>
        <Col className="image" span={6}>
          <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt=""/>
        </Col>
        <Col className="content" span={18}>
          <h2>{name}</h2>
          <p>
            {description}
          </p>
          <p>价格：<Price>{price.replace(/[^\d\.]/g, '')}</Price></p>
          <Button size="large" className="add-to-cart" type={"primary"} onClick={() => addToCard(pet)}>加入购物车</Button>
        </Col>
      </StyledDiv>
    );
  }
}

Pet.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  })
};
Pet.defaultProps = {};

export default Pet;
