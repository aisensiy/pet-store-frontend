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
  .custom-image {
    height: 240px;
  }

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
  imgUrl(url) {
    if (/^http/.exec(url)) {
      return url;
    } else {
      return (process.env.REACT_APP_API_PREFIX || "http://localhost:8080") + url
    }
  }

  render() {
    const { pet: { id, name, price, pictureUrl }} = this.props;
    return (
        <StyledCard style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
          <Link to={`/pets/${id}`}>
            <div className="custom-image">
              <img alt="example" width="100%" src={this.imgUrl(pictureUrl)}/>
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
    price: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired
  })
};
PetItem.defaultProps = {};

export default PetItem;
