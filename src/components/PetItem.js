import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: #ff0036;

  span {
    font-size: 1.2em;
    font-weight: bold;
  }
`;

const Price = (props) => {
  return (
      <StyledDiv className="price">¥<span>{props.children}</span></StyledDiv>
  )
};

const StyledCard = styled(Card)`
  .custom-image img {
    display: block;
  }

  .custom-card {
    padding: 10px 16px;
    overflow: auto;
  }

  .custom-card h4 {
    display: block;
    float: left;
    color: black;
    > :hover {
      color: black;
    }
  }

  .custom-card div {
    float: right;
  }
`;

class PetItem extends React.Component {
  render() {
    const { pet: { id, name, price }} = this.props;
    return (
        <StyledCard style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
          <Link to={`/pets/${id}`}>
            <div className="custom-image">
              <img alt="example" width="100%" src="https://gd4.alicdn.com/imgextra/i4/2867678467/TB2FyJqg80kpuFjSsziXXa.oVXa_!!2867678467.jpg_400x400.jpg" />
            </div>
            <div className="custom-card">
              <h4>{name}</h4>
              <Price>{price.replace(/[^\d.]+/g, '')}</Price>
            </div>
          </Link>
        </StyledCard>
    );
  }
}

PetItem.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  })
};
PetItem.defaultProps = {};

export default PetItem;
